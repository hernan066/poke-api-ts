import { Stat, Type } from ".";
import { Ability, Move } from "./pokemon-full";

export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokeNameOrId[];
}

/* export interface SmallPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: Type[];
  stats: Stat[];
} */

export interface PokeSpecies {
  bio: string;
  evo: string;
  capture: number;
  happy: number;
  growth_rate: string;
}

export interface PokeNameOrId {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  stats: Stat[];
  base_experience: number;
  abilities: Ability[];
  moves: Move[];
}

export interface PokeEvoChain {
    evoChain: EvoChain[];
}

export interface EvoChain {
    species_name: string;
    min_level: number;
    trigger_name: string;
}

