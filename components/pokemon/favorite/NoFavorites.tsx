import { Container, Text, Image } from '@nextui-org/react';
import { Z_ASCII } from 'zlib';

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 1,
      }}>
        <Text h1>There are no favorites</Text>
        <Image 
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
          alt='icono de la app'
          width={250}
          height={250}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
  )
};