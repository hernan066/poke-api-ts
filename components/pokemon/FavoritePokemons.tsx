import { Grid, Card } from "@nextui-org/react"
import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
          {pokemons.map((pokemon) => (
            <FavoriteCardPokemon key={pokemon} pokemonId={pokemon} />
          ))}
        </Grid.Container>
  )
}
