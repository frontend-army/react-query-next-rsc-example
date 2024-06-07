'use client';

import { getPokemons } from "@/api";
import { getQueryClient } from "@/app/QueryProvider";
import { useQuery } from "@tanstack/react-query"

export default function PokemonList() {
  const { data, isFetching } = useQuery({ queryKey: ['pokemon'], queryFn: getPokemons })

  const onRefresh = () => {
    getQueryClient().invalidateQueries({ queryKey: ['pokemon'] });
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button onClick={onRefresh} className="my-4 py-2 px-4 border rounded">Refresh</button>
      <ul className="flex flex-col items-center justify-center">
        {data?.results.map((pokemon, index) => (
          <li key={pokemon.name} className="flex">
            <span>{index + 1} - {pokemon.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}