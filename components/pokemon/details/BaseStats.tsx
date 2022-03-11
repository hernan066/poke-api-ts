import { FC } from "react"
import { PokeNameOrId, PokeSpecies } from "../../../interfaces"

interface Props {
    pokemon: PokeNameOrId;
    species: PokeSpecies;
}

export const BaseStats:FC<Props> = ({pokemon, species}) => {
  
    const hp = pokemon.stats[0].base_stat;
    const attack = pokemon.stats[1].base_stat;
    const defense = pokemon.stats[2].base_stat;
    const specialAttack = pokemon.stats[3].base_stat;
    const specialDefense = pokemon.stats[4].base_stat;
    const speed = pokemon.stats[5].base_stat;
  
    document.documentElement.style.setProperty('--hhp', `calc(${hp * 0.01}*(var(--container-size)/8))`);
    document.documentElement.style.setProperty('--atk', `calc(${attack * 0.01}*(var(--container-size)/8))`);
    document.documentElement.style.setProperty('--def', `calc(${defense * 0.01}*(var(--container-size)/8))`);
    document.documentElement.style.setProperty('--spa', `calc(${specialAttack * 0.01}*(var(--container-size)/8))`);
    document.documentElement.style.setProperty('--spd', `calc(${specialDefense* 0.01}*(var(--container-size)/8))`);
    document.documentElement.style.setProperty('--spe', `calc(${speed * 0.01}*(var(--container-size)/8))`);
  
  
    return (
    
    
 <article className="article">


    <div className='container-stats'>
        <div className='tri1'></div>
        <div className='tri2'></div>
        <div className='tri3'></div>
        <div className='tri4'></div>
        <div className='tri5'></div>
        <div className='tri6'></div>

        <span className="hp">HP {hp}</span>
        <span className="atk">Atk {attack}</span>
        <span className="def">Def {defense}</span>
        <span className="spa">Sp Atk {specialAttack}</span>
        <span className="spd">Sp Def {specialDefense}</span>
        <span className="spe">Speed {speed}</span>

    </div>
     <table className="table-stats">
        <tr>
            <td> Weight</td>
            <td>Happiness</td>
            <td>Height</td>
            <td>Capture rate</td>
        </tr>
        <tr>
            <td className="center">{pokemon.weight} kg</td>
            <td className="center">  {species.happy}</td>
            <td className="center" >  {pokemon.height}m</td>
            <td className="center">  {species.capture}</td>
        </tr>
    </table> 

</article>
  )
}
