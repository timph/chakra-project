import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, HStack, Link, Heading, Button, Code, Image, Text } from '@chakra-ui/react'
import { useQueryPokemon, useQueryPokemons } from './hooks/usePokemon'

function App() {
  const [count, setCount] = useState(0)
  const pokeId = 10;
  const {data: pokemons, isLoading: pokemonsLoading} = useQueryPokemons();
  const {data: pokemon, isLoading: pokemonLoading} = useQueryPokemon(pokeId);
  console.log({ pokemon, pokemons })

  return (
    <Container centerContent py={8}>
      <HStack gap={6} mb={4}>
        <Link href="https://vite.dev">
          <Image src={viteLogo} boxSize="64px" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev">
          <Image src={reactLogo} boxSize="64px" alt="React logo" />
        </Link>
      </HStack>

      <Heading as="h1" size="lg" mb={4}>
        Vite + React
      </Heading>

      <HStack p={6} borderWidth="1px" borderRadius="md" mb={4} justifyContent="center" alignItems="center">
        <Button color="blue" bg="aqua" borderColor="ActiveBorder" 
          onClick={() => setCount((c) => c + 1)}
          minW="1.5"
        >
          Count is {count}
        </Button>
        <Text>
          Edit <Code>src/App.tsx</Code> and save to test HMR
        </Text>
        <Button color="white" bg="purple" borderColor="ActiveBorder" 
          onClick={() => setCount(0)}
        >
          Clear
        </Button>
      </HStack>

      <Text color="gray.500">Click on the Vite and React logos to learn more</Text>
    </Container>
  )
}

export default App
