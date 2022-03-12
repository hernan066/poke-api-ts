import { useState } from "react";
import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PokeEvoChain, PokeNameOrId, PokeSpecies } from "../../../interfaces";
import { Bio } from "./Bio";
import { BaseStats } from "./BaseStats";
import { Evolution } from "./Evolution";
import { localFavorites } from "../../../utils";
import confetti from "canvas-confetti";

interface Props {
  pokemon: PokeNameOrId;
  species: PokeSpecies;
  evolution: PokeEvoChain;
}

export const PokeDetails: FC<Props> = ({ pokemon, species, evolution }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const type1 = pokemon.types[0].type.name;
  const type2 = pokemon.types[1]?.type.name;

  const [page, setPage] = useState({
    bio: "active",
    stats: "",
    evolution: "",
  });

  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };

  const handleFavorite = () => {
    
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
    <div className="grid-container">
      <aside className="sidebar">
        <div className={`sidebar__card ${type1} `}>
          <div className="sidebar__img-container">
            <Image
              src={`/poke512/${pokemon.id}.png`}
              height={500}
              width={500}
              alt={pokemon.name}
            />
          </div>

          <div className="sidebar__type-text">
            <h3>{pokemon.name}</h3>
          </div>

          <div className="sidebar__img-type-container">
            <Image
              src={`/types/${type1}.png`}
              height={150}
              width={100}
              alt={pokemon.name}
            />
            {type2 && (
              <Image
                src={`/types/${type2}.png`}
                height={150}
                width={100}
                alt={pokemon.name}
              />
            )}
          </div>
        </div>
      </aside>
      <main className="main">
        <div className="espaciador"></div>
        <div className="main__card">
          <header className="main__title">
            <h1>{pokemon.name}</h1>
          </header>
          <nav className="main__nav">
            <div className={`main__stats ${page.bio} ${type1}`}>
              <h2
                onClick={() =>
                  setPage({
                    bio: "active",
                    stats: "",
                    evolution: "",
                  })
                }
              >
                Bio
              </h2>
            </div>
            <div className={`main__stats ${page.stats} ${type1}`}>
              <h2
                onClick={() =>
                  setPage({
                    bio: "",
                    stats: "active",
                    evolution: "",
                  })
                }
              >
                Base Stats
              </h2>
            </div>
            <div className={`main__stats ${page.evolution} ${type1}`}>
              <h2
                onClick={() =>
                  setPage({
                    bio: "",
                    stats: "",
                    evolution: "active",
                  })
                }
              >
                Evolution
              </h2>
            </div>
          </nav>
          {page.bio === "active" && <Bio species={species} pokemon={pokemon} />}
          {page.stats === "active" && (
            <BaseStats pokemon={pokemon} species={species} />
          )}
          {page.evolution === "active" && (
            <Evolution evolution={evolution} pokemon={pokemon} />
          )}
          <div className="main__buttons">
            <div
              className={`main__button-return  ${type1}`}
              onClick={handleClick}
            >
              Return
            </div>
            <div className={`main__button-favorite  ${type1} ${isInFavorites ? 'favorite' : ''}`} 
            onClick={handleFavorite}>
            {
              isInFavorites ? 'Remove from favorites' : 'Add to favorites'
            }
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
