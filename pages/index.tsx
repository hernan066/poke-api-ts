import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

import { PokeCard } from "../components/pokemon/cards/PokeCard";
import { Pokemon, PokeNameOrId } from "../interfaces";

interface Props {
  pokemons: PokeNameOrId[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="List of pokemon">
      <div className="home__pokeCard-grid">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  //obtener todos los datos de una sola vez

  const pokemon_count: number = 10;
  const pokemonsData = [];
  for (let i = 1; i <= pokemon_count; i++) {
    const resp = await pokeApi.get<Pokemon>(`/pokemon/${i}`);

    pokemonsData.push(resp.data);
  }

  const pokemons: PokeNameOrId[] = pokemonsData.map((data) => {
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      height: data.height,
      weight: data.weight,
      types: data.types,
      base_experience: data.base_experience,
      stats: data.stats,
      abilities: data.abilities,
      moves: data.moves,
    };
  });

 

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
