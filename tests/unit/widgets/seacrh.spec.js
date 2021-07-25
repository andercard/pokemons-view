import { shallowMount } from '@vue/test-utils'
import Search from '@/widgets/search/search.vue'

describe('Search.vue', () => {
  it('It must emit the information written in the input', () => {
    const value = 'example';
    const wrapper = shallowMount(Search)
    wrapper.find('input').setValue(value)
    expect(wrapper.emitted().input[0][0]).toEqual(value);
  })

  it('It should show the initial custom value', () => {
    const value = 'example';
    const wrapper = shallowMount(Search, {
      propsData: { value }
    })
    const input = wrapper.find('input')

    expect(input.element.value).toEqual(value);
  })

  it('It should show the custom placeholder', () => {
    const placeholder = 'example';
    const wrapper = shallowMount(Search, {
      propsData: { placeholder }
    })
    const input = wrapper.find('input')

    expect(input.element.placeholder).toEqual(placeholder);
  })
})
