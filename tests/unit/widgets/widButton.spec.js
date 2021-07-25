import { shallowMount } from '@vue/test-utils'
import WidButton from '@/widgets/widButton/widButton.vue'

describe('WidButton.vue', () => {
  it('It should show the icon', () => {
    const icon = 'all';
    const wrapper = shallowMount(WidButton, {
      propsData: { icon }
    })
    const iconfind = wrapper.find('iconall-stub')

    expect(iconfind.exists()).toBeTruthy();
  })

  it('It should show the text', () => {
    const textSlot = 'all';
    const wrapper = shallowMount(WidButton, {
      slots: {
        default: textSlot
      }
    })
    const text = wrapper.find('span')

    expect(text.text()).toEqual(textSlot);
  })

  it('Must emit the click event', () => {
    const to = '/';
    const wrapper = shallowMount(WidButton, {
      propsData: { to },
      mocks: { $router: jest.fn() }
    })
    wrapper.vm.$emit('click')

    expect(wrapper.emitted()).toHaveProperty('click');
  })

})
