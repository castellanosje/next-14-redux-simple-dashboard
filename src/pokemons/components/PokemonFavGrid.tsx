'use client'
import { useAppSelector } from "@/store";
import { PokemonsGrid } from "..";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonsFavGrid = () => {

  const favoritePokemons = Object.values(useAppSelector(state => state.pokemons.favorites));
  if (!favoritePokemons?.length) return <NoFavoritePokemons />;
  return <PokemonsGrid pokemons={favoritePokemons} />;
};



export const NoFavoritePokemons = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No has agregado pokemons a tu lista de favoritos</span>
    </div>
  );
};