import React from 'react'
import { SimplePokemon } from '..';
import { PokemonCard } from './PokemonCard';

interface PokemonsGridProps {
    pokemons?:SimplePokemon[]|null;
}

export const PokemonsGrid = ({ pokemons }: PokemonsGridProps) => {
  if (!pokemons?.length) return null
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={`${pokemon.name}-${pokemon.id}`} pokemon={pokemon}  />
      ))}
    </div>
  );
}