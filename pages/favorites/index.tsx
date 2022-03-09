import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts/Layout";
import { NoFavorites } from "../../components/ui";
import localStorageFavorites from "../../utils/localStorageFavorites";
import { FavoritePokemons } from "../../components/pokemon";


const FavoritesPages = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  //Segundo metodo que soluciona el no existe localstorage
  useEffect(() => {
    setFavoritePokemons(localStorageFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons ={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPages;
