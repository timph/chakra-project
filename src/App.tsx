import './App.css'
import { Text, Box, HStack, Input, VStack } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';
import Page from './components/Page';
import { tickerService, type Company, type CompanySymbol } from './TickerService';
import { debounce } from './utils/debounce';


function App() {
  const [symbol, setSymbol] = useState<CompanySymbol>("");
  const [watchedCompany, setWatchedCompany] = useState<Company[]>([]);
  const [results, setResults] = useState<Company[]>([]);
  const waitRef = useRef<number>(new Date().getTime());

  const updatedCallback = (companies: Company[]) => {
    const currentTime = new Date().getTime();
    if (currentTime > waitRef.current + 2000 ) {
      setWatchedCompany(companies);
      waitRef.current = currentTime;
    }
  };
  tickerService.onDataChanged(updatedCallback);

  useEffect(() => {
    const retrieveCompanies = async () => {
      const res = await tickerService.search(symbol);
      setResults(res.results);
    }
    
    retrieveCompanies();

  }, [symbol])

  const searchStock = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value;
    if (values.length >= 2) {
      debounce(setSymbol, 300)(values);
    }
  }

  const addWatch = (symbol: string) => {
    tickerService.watch(symbol);
  }

  return (
    <Page title="Stock picker app" margin="0 10%">

      <HStack p={6} borderWidth="1px" borderRadius="md" mb={4} justifyContent="center" alignItems="center">
        <Input name="symbol" onChange={searchStock}></Input>
      </HStack>
      <VStack gap={2}>
        {results && results.map(company =>
          <div onClick={() => addWatch(company.symbol)}>{company.name} ({company.symbol})</div>
        )}
      </VStack>
      <br/>
      <VStack>
          <>
            <Text as={'h2'}>Live Results</Text>
              {watchedCompany && watchedCompany.map(company =>
                  <HStack gap={6}>
                    <Box>{company.symbol}</Box>
                    <Box>{company.name}</Box>
                    <Box>{company.lastPrice}</Box>
                  </HStack>
              )}
          </>
      </VStack>

    </Page>
  )
}

export default App
