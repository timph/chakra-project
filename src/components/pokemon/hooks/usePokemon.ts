import { pokemonUri } from "../../../constants";
import { useMutation, useQuery } from "@tanstack/react-query";

const getPokemons = async (limit?: number) => {
  const response = await fetch(`${pokemonUri}?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network call error');
  }
  return await response.json();
}

const getPokemon = async (id: number) => {
  const response = await fetch(`${pokemonUri}/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const useQueryPokemon = (id: number) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id),
    enabled: !!id, // only run the query if id is truthy
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export const useQueryPokemons = (limit?: number) => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const useUpdatePokemon = (id: number, data: any) => {
  return useMutation({
    mutationFn: async () => {
      const response = await fetch(`${pokemonUri}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });
}