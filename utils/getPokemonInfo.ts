import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';


export const getPokemonInfo = async( nameOrId: string ) => {

  
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        height: data.height,
        weight: data.weight,
        types: data.types,
        base_experience: data.base_experience,
        stats: data.stats,
    }

} 