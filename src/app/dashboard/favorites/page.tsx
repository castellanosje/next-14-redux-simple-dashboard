import { PokemonsFavGrid } from "@/pokemons/components/PokemonFavGrid";



export const metadata = {
  title: "Lista de pokemons favoritos",
  description: "tu lista de pokemons favoritos",
};


export default async function PokemonsPage(){

  return (
    <div className="flex flex-col p-4">
      <span className="text-5xl my-2">
        Listado de Pokemons <small className="text-blue-500">Global State</small>
      </span>
      <PokemonsFavGrid  />
    </div>
  );
}




