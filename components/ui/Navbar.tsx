import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <NextLink href="/" passHref>
            <Image src={"/pokeapi.png"} height={50} width={150} alt="Pokeapi" />
          </NextLink>
        </div>

        <div className="navbar__nav">
          <h6 className="navbar__link">Search</h6>

          <NextLink href="/favorites" passHref>
            <h6 className="navbar__link">Favorites</h6>
          </NextLink>
        </div>
      </nav>
    </header>
  );
};
