import './App.css'
import { Center, Text, Box, HStack, Input, VStack } from '@chakra-ui/react'
import Page from './components/Page';


function App() {
  return (
    <Page title="Magic App" margin="0 10%">

    <Center>
      <VStack gap={4}>
        <HStack w='2xl' p={6} borderWidth="1px" borderRadius="md" mb={4}>
          <Input
            name="search"
            placeholder="Enter search value"
            onChange={(e) => console.log(e.target.value)}
            />
        </HStack>

        Results {}
      
      </VStack>
    </Center>
  
    </Page>
  )
}

export default App
