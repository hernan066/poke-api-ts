import axios from "axios";
import { pokeApi } from "../api";
import { Pokemon, Species } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

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
};



export const getPokemonSpecies = async (id: number) => {
  const { data } = await pokeApi.get(`/pokemon-species/${id}/`);

  return {
    bio: data.flavor_text_entries[0].flavor_text,
    evo: data.evolution_chain.url,
    capture: data.capture_rate,
    happy: data.base_happiness,
    growth_rate: data.growth_rate.name,
  };
};



export const getPokemonEvolution = async (url: string) => {
  const { data } = await axios.get(url);

  let evoChain = [];
  let evoData = data.chain;

  do {
    var evoDetails = evoData["evolution_details"][0];

    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoDetails ? 1 : evoDetails.min_level,
      trigger_name: !evoDetails ? null : evoDetails.trigger.name,
    });

    evoData = evoData["evolves_to"][0];
  } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

  return {
    evoChain
  };
};
