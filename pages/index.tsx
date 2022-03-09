
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

import { PokeCard } from "../components/pokemon/cards/PokeCard";
import { Pokemon, PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  
  console.log(pokemons)
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

  
  const pokemon_count: number = 8;
  const pokemonsData = [];
  for (let i = 1; i <= pokemon_count; i++) {
    const resp = await pokeApi.get<Pokemon>(`/pokemon/${i}`);
    
    pokemonsData.push(resp.data);
    
  }
  
   const pokemons: SmallPokemon[] = pokemonsData.map((data, idx) => {
    return {
      name: data.name,
      url: 'url',
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`,
      height: data.height,
      weight: data.weight,
      types: data.types,
      base_experience: data.base_experience,
      stats: data.stats,
    }; });
  
  
  
  
  /* const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

 

  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => {
    return {
      name: poke.name,
      url: poke.url,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        idx + 1
      }.svg`,
    };
  });  */
  

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
