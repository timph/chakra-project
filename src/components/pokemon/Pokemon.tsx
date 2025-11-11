import { Badge, Grid, Image, GridItem, VStack, Text } from '@chakra-ui/react';
import { usePokemonPage } from './hooks/usePokemonPage';
import Page from '../Page';

export default function PokemonPage() {
  const limit = 30;
  const { pokemons } = usePokemonPage(limit);

  return (
    <Page title="Pokemon List">
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)"
        }}
        gap={6}
      >
        {pokemons?.map((p: any) => {
          const id = p.url.split('/')[6];
          return (
            <GridItem 
              key={id}
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
              _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <VStack gap={3}>
                <Image 
                  height="140px"
                  width="140px"
                  objectFit="contain"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                />
                <Text fontWeight="bold" textTransform="capitalize">
                  {p.name}
                </Text>
                <Badge colorScheme="blue" px={2} py={1}>
                  #{id.padStart(3, '0')}
                </Badge>
              </VStack>
            </GridItem>
          );
        })}
      </Grid>
    </Page>
  );
}