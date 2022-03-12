
import { FC } from "react";
import { PokeNameOrId } from "../../../interfaces";
import { PokeCard } from "../cards/PokeCard";

interface Props {
  pokemons: PokeNameOrId[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon: PokeNameOrId) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};
