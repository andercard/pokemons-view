import { shallowMount } from '@vue/test-utils'
import ItemList from '@/components/itemList/itemList.vue'

describe('ItemList.vue', () => {

  it('It should be active if it is in favorite', () => {
    const isActive = true;
    const wrapper = shallowMount(ItemList, {
      propsData: { isActive }
    })
    expect(wrapper.find('.active').exists()).toBe(true);
  })

  it('Should show name', () => {
    const name = 'name';
    const wrapper = shallowMount(ItemList, {
      propsData: { name }
    })
    expect(wrapper.find('p').text()).toBe(name);
  })


})
