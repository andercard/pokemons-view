import WidButton from '@/widgets/button/button.vue';

export default {
  name: 'EmptyList',
  components: {
    WidButton
  },
  props: {
    title: {
      type: String,
      default: 'Uh-oh!'
    },
    description: {
      type: String,
      default: 'You look lost on your journey!'
    },
    button: {
      type: String,
      default: 'Go back home'
    },
  }
}