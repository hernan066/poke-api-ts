import { FC } from "react";
import { PokeEvoChain, PokeNameOrId } from "../../../interfaces";
import Image from 'next/image';
import { Router, useRouter } from "next/router";

interface Props {
  evolution: PokeEvoChain;
  pokemon: PokeNameOrId;
}

export const Evolution: FC<Props> = ({ evolution, pokemon }) => {
  const evo1 = evolution.evoChain[0].species_name;
  const evo2 = evolution.evoChain[1].species_name;
  const evo3 = evolution.evoChain[2]?.species_name;

  const lvl2 = evolution.evoChain[1].min_level;
  const lvl3 = evolution.evoChain[2]?.min_level;

  const typeEvo2 = evolution.evoChain[1].trigger_name;
  const typeEvo3 = evolution.evoChain[2]?.trigger_name;

  const type1 = pokemon.types[0].type.name;

  const router = useRouter();

    const handleClick = (evo: string) => {
        console.log('click')
        router.push(`/name/${evo}`);
    }
  
  
  
  return (
    <article className="article__evolution">
      <div className="poke-card-evolution">
        <div className={`poke-evolution ${type1}`}>
         <Image 
          src={`https://projectpokemon.org/images/normal-sprite/${evo1}.gif`}
          height={75}
          width={75}
          alt={evo1}
          onClick={() => handleClick(evo1)}
         />
        </div>
        <h3>{evo1}</h3>
      </div>

      <div className="level-up">
        <p>
          {typeEvo2} {lvl2} →
        </p>
      </div>
      <div className="poke-card-evolution">
        <div className={`poke-evolution ${type1}`}>
        <Image 
          src={`https://projectpokemon.org/images/normal-sprite/${evo2}.gif`}
          height={75}
          width={75}
          alt={evo1}
          onClick={() => handleClick(evo2)}
         />
        </div>
        <h3>{evo2}</h3>
      </div>
      {evo3 && (
        <>
          <div className="level-up">
            <p>
              {typeEvo3} {lvl3} →
            </p>
          </div>

          <div className="poke-card-evolution">
            <div className={`poke-evolution ${type1}`}>
            <Image 
          src={`https://projectpokemon.org/images/normal-sprite/${evo3}.gif`}
          height={75}
          width={75}
          alt={evo1}
          onClick={() => handleClick(evo3)}
         />
            </div>
            <h3>{evo3}</h3>
          </div>
        </>
      )}
    </article>
  );
};
