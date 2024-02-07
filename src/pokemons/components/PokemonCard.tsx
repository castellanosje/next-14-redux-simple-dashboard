'use client';
import Link from "next/link"
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface PokemonCardProps {
    pokemon: SimplePokemon;
}
export const PokemonCard = ({pokemon}: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state=> !!state.pokemons.favorites[id]);  
  const dispatch = useAppDispatch();
  const handleToggleFavorite =()=>{
    dispatch(toggleFavorite(pokemon));
  }
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
            className="w-[100px] h-[100px]"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 uppercase">
            {name}
          </p>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />
          <div className="mt-5">
            <Link
              href={`./pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div onClick={handleToggleFavorite} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "remover de favoritos" : "marcar como favorito"}
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
