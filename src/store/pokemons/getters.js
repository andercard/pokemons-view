export default {
  getPokemon (store) {
    return store.pokemon;
  },
  getPokemons (store) {
    return store.pokemons ? store.pokemons.results : [];
  },
}