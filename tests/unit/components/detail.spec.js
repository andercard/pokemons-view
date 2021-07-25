import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex';
import Detail from '@/components/detail/detail.vue'

const pokemon = {
  "height": 7,
  "name": "bulbasaur",
  "weight": 69,
  "sprites": {
    "other": {
      "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      }
    }
  },
  "types": [
    {
      "type": {
        "name": "grass",
      }
    },
    {
      "type": {
        "name": "poison",
      }
    }
  ]
};

const localVue = createLocalVue();
localVue.use(Vuex);

jest.spyOn(window, 'alert').mockReturnValue();

describe('Detail.vue', () => {

  let getters
  let store

  beforeEach(() => {
    getters = {
      getPokemon: () => pokemon
    }
    store = new Vuex.Store({
      getters
    })
  })

  it('It should show', () => {
    const show = true;
    const wrapper = shallowMount(Detail, {
      store,
      localVue,
      propsData: { show }
    })
    expect(wrapper.find('.detail').exists()).toBe(true);
  })

  it('It should not show', () => {
    const show = false;
    const wrapper = shallowMount(Detail, {
      store,
      localVue,
      propsData: { show }
    })
    expect(wrapper.find('.detail').exists()).toBe(false);
  })

  it('Should run event to close modal', async () => {
    const show = true;
    const wrapper = shallowMount(Detail, {
      store,
      localVue,
      propsData: { show }
    })

    await wrapper.find('.overlay').trigger('click');

    expect(wrapper.emitted().close).toBeTruthy();
  })

})
