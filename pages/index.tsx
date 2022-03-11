import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

import { PokeCard } from "../components/pokemon/cards/PokeCard";
import { Pokemon, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <div className="pokeCard-grid">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  //obtener todos los datos de una sola vez

  const pokemon_count: number = 50;
  const pokemonsData = [];
  for (let i = 1; i <= pokemon_count; i++) {
    const resp = await pokeApi.get<Pokemon>(`/pokemon/${i}`);

    pokemonsData.push(resp.data);
  }

  const pokemons: SmallPokemon[] = pokemonsData.map((data, idx) => {
    return {
      name: data.name,
      id: idx + 1,
      height: data.height,
      weight: data.weight,
      types: data.types,
      stats: data.stats,
    };
  });

 

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
