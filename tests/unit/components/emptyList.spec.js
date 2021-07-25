import { shallowMount } from '@vue/test-utils'
import EmptyList from '@/components/emptyList/emptyList.vue'

describe('EmptyList.vue', () => {

  it('Should show title', () => {
    const title = 'title';
    const wrapper = shallowMount(EmptyList, {
      propsData: { title }
    })
    expect(wrapper.find('h5').text()).toBe(title);
  })

  it('Should show description', () => {
    const description = 'lorem';
    const wrapper = shallowMount(EmptyList, {
      propsData: { description }
    })
    expect(wrapper.find('p').text()).toBe(description);
  })

  it('Should show button', () => {
    const button = 'button';
    const wrapper = shallowMount(EmptyList, {
      propsData: { button }
    })

    expect(wrapper.find('widbutton-stub').text()).toBe(button);
  })


})
