import { FC } from "react";
import { PokeNameOrId, PokeSpecies } from "../../../interfaces";

interface Props {
  pokemon: PokeNameOrId;
  species: PokeSpecies;
}

export const Bio: FC<Props> = ({ species, pokemon }) => {
  const ability1 = pokemon.abilities[0].ability.name;
  const ability2 = pokemon.abilities[1]?.ability.name;

  const hidden1 = pokemon.abilities[0].is_hidden;
  const hidden2 = pokemon.abilities[1]?.is_hidden;

  return (
    <article className="article__bio">
      <div className="article__description">
        <h3>Description</h3>
        <p>{species.bio}</p>
      </div>

      <div className="article__row">
        <div className="article__training">
          <table className="table-training">
            <tr>
              <h4>Training</h4>
            </tr>

            <tr>
              <td>Base Exp:</td>
              <td className="center"> {pokemon.base_experience}</td>
            </tr>
            <tr>
              <td>Base Happiness:</td>
              <td className="center"> {species.happy}</td>
            </tr>
            <tr>
              <td>Capture Rate:</td>
              <td className="center"> {species.capture}</td>
            </tr>
            <tr>
              <td>Growth Rate:</td>
              <td className="center"> {species.growth_rate} </td>
            </tr>
          </table>
        </div>

        <div className="article__abilities">
          <table className="table-abilities">
            <tr>
              <h4>Abilities</h4>
            </tr>

            <tr>
              {ability1} {hidden1 === true ? "(Hidden Ability)" : ""}
            </tr>

            {ability2 ? (
              <tr>
                {ability2} {hidden2 === true ? "(Hidden Ability)" : ""}
              </tr>
            ) : null}
          </table>
        </div>
      </div>
    </article>
  );
};
