import { shallowMount } from '@vue/test-utils'
import MenuBar from '@/components/menuBar/menuBar.vue'

describe('MenuBar.vue', () => {
  it('It should show', () => {
    const items = [{
      text: 'All',
      icon: 'all'
    }];
    const wrapper = shallowMount(MenuBar, {
      propsData: { items }
    })
    expect(wrapper.find('.bar').exists()).toBe(true);
  })

  it('It should not show', () => {
    const items = [];
    const wrapper = shallowMount(MenuBar, {
      propsData: { items }
    })
    expect(wrapper.find('.bar').exists()).toBe(false);
  })


})
