import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Pokemons from './pokemons';
import Loading from './loading';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Pokemons,
    Loading
  },
  plugins: [createPersistedState({
    key: '_ander_',
    paths: ['Pokemons'],
  })]
})
