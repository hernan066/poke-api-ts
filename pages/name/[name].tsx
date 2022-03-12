import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import confetti from "canvas-confetti";
import { pokeApi } from "../../api";
import {
  PokeEvoChain,
  Pokemon,
  PokemonListResponse,
  PokeNameOrId,
  PokeSpecies,
} from "../../interfaces";
import { localFavorites } from "../../utils";
import {
  getPokemonInfo,
  getPokemonSpecies,
  getPokemonEvolution,
} from "../../utils/getPokemonInfo";
import { PokeDetails } from "../../components/pokemon/details/PokeDetails";
import { Layout } from "../../components/layouts";
import { numberOfPokemons } from "../../utils/numberOfPokemons";

interface Props {
  pokemon: PokeNameOrId;
  species: PokeSpecies;
  evolution: PokeEvoChain;
}

const PokemonByNamePage: NextPage<Props> = ({
  pokemon,
  species,
  evolution,
}) => {
  console.log(evolution);

  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;
    confetti({
      zIndex: 10,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0.1,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <PokeDetails pokemon={pokemon} species={species} evolution={evolution} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    `/pokemon?limit=${numberOfPokemons}`
  );

  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    //retorna los xxx(numberOfPokemons) pathname
    paths: pokemonNames.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  //1. obtener pokemon id
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
  const species = await getPokemonSpecies(data.id);
  //2. obtener pokemon species
  const url = species.evo;
  //3. obtener pokemon evolution
  const evolution = await getPokemonEvolution(url);
  console.log(evolution);

  return {
    props: {
      pokemon: await getPokemonInfo(name),
      species,
      evolution,
    },
  };
};

export default PokemonByNamePage;
