import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {
  
    const router = useRouter();
  
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${pokemonId}`);
  }
  
    return (
    <Grid key={pokemonId} xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onFavoriteClicked}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width="100%"
            height={140}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};
