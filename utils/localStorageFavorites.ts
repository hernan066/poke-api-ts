

const toggleFavorite = (id: number) => {
   

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));


};

const existInFavorites = (id: number): boolean => {
    
    //ReferenceError: localStorage is not defined
    if (typeof window === 'undefined') return false;
    
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    return favorites.includes(id);

};

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    toggleFavorite,
    existInFavorites,
    pokemons,
}