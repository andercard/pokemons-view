import { shallowMount } from '@vue/test-utils'
import Welcome from '@/views/welcome/welcome.vue'

describe('Welcome.vue', () => {

  it('Should show image', () => {
    const wrapper = shallowMount(Welcome)
    expect(wrapper.find('img').element.src).toBeTruthy();
  })

  it('Should show title', () => {
    const title = 'Welcome to Pokédex';
    const wrapper = shallowMount(Welcome)
    expect(wrapper.find('h1').text()).toBe(title);
  })

  it('Should show description', () => {
    const description = 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.';
    const wrapper = shallowMount(Welcome)
    expect(wrapper.find('p').text()).toBe(description);
  })

  it('Should show button', () => {
    const button = 'Get started';
    const wrapper = shallowMount(Welcome, {
      propsData: { button }
    })

    expect(wrapper.find('widbutton-stub').text()).toBe(button);
  })


})
