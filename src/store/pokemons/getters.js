export default {
  getPokemon (store) {
    return store.pokemon;
  },
  getPokemons (store) {
    const pokemons = store.pokemons;
    const favorites = store.favorites;

    if (favorites.length && pokemons) {
      const pokemonsLength = pokemons.results.length;
      let list = [];

      for (let i = 0; i < pokemonsLength; i++) {
        const element = pokemons.results[i];
        const findIndex = favorites.findIndex(item => item.name === element.name)

        let active = false;
        if (findIndex >= 0) active = true

        list.push({
          ...element,
          active
        })
      }
      return list;
    }


    return pokemons ? pokemons.results.map(item => ({ ...item, active: false })) : [];
  },
  getFavorites (store) {
    return store.favorites
  }
}