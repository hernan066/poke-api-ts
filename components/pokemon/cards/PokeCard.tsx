import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import Tilt from "react-parallax-tilt";
import { PokeNameOrId } from "../../../interfaces";
import { getPokemonInfo } from "../../../utils/getPokemonInfo";

interface Props {
  pokemon: PokeNameOrId;
}

export const PokeCard: FC<Props> = ({ pokemon }) => {
  const hp = pokemon.stats[0].base_stat;
  const attack = pokemon.stats[1].base_stat;
  const defense = pokemon.stats[2].base_stat;
  const specialAttack = pokemon.stats[3].base_stat;
  const specialDefense = pokemon.stats[4].base_stat;
  const speed = pokemon.stats[5].base_stat;

  const type = pokemon.types[0].type.name;

  const router = useRouter();

  const handleClick = () => {
    console.log("click");
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Tilt
     
      className="parallax-effect-img"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={500}
      transitionSpeed={1000}
      scale={1.05}
      gyroscope={true}
    >
      <div className={`card ${type}`} onClick={handleClick}>
        <div className="card__image">
          <Image
            src={`/sprites/${pokemon.id}.gif`}
            height={185}
            width={150}
            alt="raichu"
            quality={70}
          />
        </div>
        <div className="bg-img">
          <Image
            src={`/img/bg4.png`}
            height={200}
            width={300}
            alt="raichu"
            quality={70}
          />
        </div>

        <div className="card__content">
          <div className="card__content-main">
            <div className="card__title">{pokemon.name}</div>
            <div className={`card__hp ${type}`}>hp {hp}</div>
          </div>

          <div className="card__stats columns ">
            <div className="column">
              {type}
              <span className={`tag ${type}`}>Type</span>
            </div>
            <div className="column center-column ">
              {(pokemon.weight * 0.1).toFixed()} kg
              <span className={`tag ${type}`}>Weight</span>
            </div>
            <div className="column ">
              {(pokemon.height * 0.1).toFixed(1)} m
              <span className={`tag ${type}`}>Height</span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
