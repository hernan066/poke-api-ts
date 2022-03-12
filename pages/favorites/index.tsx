import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts/Layout";

import localStorageFavorites from "../../utils/localStorageFavorites";
import { FavoritePokemons } from "../../components/pokemon";
import { PokeNameOrId } from "../../interfaces";
import { getPokemonInfoById } from "../../utils/getPokemonInfo";
import { NoFavorites } from "../../components/pokemon/favorite/NoFavorites";

const FavoritesPages = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  const [poke, setPoke] = useState<PokeNameOrId[]>([]);

  //Segundo metodo que soluciona el no existe localstorage
  useEffect(() => {
    setFavoritePokemons(localStorageFavorites.pokemons());
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      favoritePokemons.map(async (id) => {
        const pokemon = await getPokemonInfoById(id);
        setPoke((poke) => [...poke, pokemon]);
      });
    };
    getPokemon();
  }, [favoritePokemons]);

  return (
    <Layout title="Favorites">
      <main className="favorite__pokeCard-grid">
        {favoritePokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemons pokemons={poke} />
        )}
      </main>
    </Layout>
  );
};

export default FavoritesPages;
