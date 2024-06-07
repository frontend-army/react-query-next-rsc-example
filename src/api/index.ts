const BASE_URL = 'https://pokeapi.co/api/v2';

interface PokemonListResult {
  results: {
    url: number;
    name: string;
  }[];
}

export const getPokemons = async (): Promise<PokemonListResult> => {
  // Mock a 1 second delay to show a UI loading state
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    return fetch(`${BASE_URL}/pokemon?limit=151`).then((res) => res.json())
  });
}
