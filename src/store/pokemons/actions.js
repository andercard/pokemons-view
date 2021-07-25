import API from '@/api'

export default {
  async action_getPokemons ({ commit } , payload = null) {
    try {
      let params = null
      if (payload) {
        let { offset, limit } = payload;
        params = { offset, limit }
      }

      const { data } = await API('pokemon',{
        params
      })

      commit('POKEMONS', data)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
  async action_getPokemon ({ commit } , payload = 'null') {
    try {
      const { data } = await API(`pokemon/${payload}`)

      commit('POKEMON', data)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
}
