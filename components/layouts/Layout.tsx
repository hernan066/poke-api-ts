import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Hernan Moneta" />
        <meta name="description" content={` Informacion sobre los pokemons ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`}/>
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "2rem 2rem",
          display: "flex",
          justifyContent: "center",
        }} 
      >
        {children}
      </main>
    </>
  );
};
