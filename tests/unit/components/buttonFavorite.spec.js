import { shallowMount } from '@vue/test-utils'
import ButtonFavorite from '@/components/buttonFavorite/buttonFavorite.vue'

describe('ButtonFavorite.vue', () => {

  it('should show that it is active', () => {
    const isActive = true;
    const wrapper = shallowMount(ButtonFavorite, {
      propsData: { isActive }
    })
    expect(wrapper.find('.active').exists()).toBe(true);
  })

  it('should not show that it is active', () => {
    const isActive = false;
    const wrapper = shallowMount(ButtonFavorite, {
      propsData: { isActive }
    })
    expect(wrapper.find('.active').exists()).toBe(false);
  })


})
