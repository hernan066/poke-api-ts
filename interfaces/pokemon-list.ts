import { Stat, Type } from ".";



export interface PokemonListResponse{
    count: number;
    next?: string;
    previous?: string;
    results: SmallPokemon[];
}

export interface SmallPokemon{
    name: string;
    url: string;
    id: number;
    img: string;
    height: number,
    weight: number,
    types: Type[],
    base_experience: number,
    stats:Stat[],
}

