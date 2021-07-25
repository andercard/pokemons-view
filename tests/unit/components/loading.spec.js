import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/loading/loading.vue'

describe('Loading.vue', () => {

  it('It should show', () => {
    const show = true;
    const wrapper = shallowMount(Loading, {
      propsData: { show }
    })
    expect(wrapper.find('.loading').exists()).toBe(true);
  })

  it('It should not show', () => {
    const show = false;
    const wrapper = shallowMount(Loading, {
      propsData: { show }
    })
    expect(wrapper.find('.loading').exists()).toBe(false);
  })


})
