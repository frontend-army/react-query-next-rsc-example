import { getPokemons } from '@/api'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import PokemonList from './_components/PokemonList'

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['pokemon'],
    queryFn: getPokemons,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex flex-col items-center justify-center">
        <PokemonList />
      </main>
    </HydrationBoundary>
  )
}