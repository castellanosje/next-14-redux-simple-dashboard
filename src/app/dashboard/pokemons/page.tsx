import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
  title: "Lista de pokemons",
  description: "Una lista de pokemons",
};

const getPokemons = async (limit=20, offset=0):Promise<SimplePokemon[]>=>{
    const data:PokemonsResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then(res => res.json());
    
    const pokemons = data.results.map(pokemon => (
        {
            id:pokemon.url.split('/').at(-2)!,
            name:pokemon.name
        }
    ));
    return pokemons;
}



export default async function PokemonsPage(){
const pokemons = await getPokemons(151, 0);
  return (
    <div className="flex flex-col p-4">
      <span className="text-5xl my-2">
        Listado de Pokemons <small className="text-blue-500">estático</small>
      </span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}




