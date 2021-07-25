import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import Home from '@/views/home/home.vue';

const pokemons = [
  { name: "bulbasaur", active: false, },
  { name: "ivysaur", active: false, },
  { name: "venusaur", active: false, },
]

const localVue = createLocalVue();
localVue.use(Vuex);


jest.spyOn(window, 'alert').mockReturnValue();

describe('Home.vue', () => {

  let state
  let actions
  let getters
  let mutations
  let store

  beforeEach(() => {
    state = {
      favorites: [],
    }
    getters = {
      getFavorites: (store) => store.favorites,
      getPokemons: () => pokemons,
    }
    mutations = {
      FAVORITES (store, data) {
        store.favorites = data
      },
      IS_LOADING: jest.fn(),
    }
    actions = {
      action_getPokemons: jest.fn()
    }
    store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions,
    })
  })

  it('It should show the empty list information', () => {
    const computed = {
      list () {
        return []
      }
    }

    const wrapper = shallowMount(Home, {
      store,
      localVue,
      computed
    })

    expect(wrapper.find('emptylist-stub').exists()).toBe(true);
  })

  it('It should show all the pokemons', () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    })

    const itemlistLength = wrapper.findAll('itemlist-stub').length;
    const pokemonsLength = pokemons.length;

    expect(itemlistLength).toBe(pokemonsLength);
  })

})
