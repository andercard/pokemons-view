import WidButton from '@/widgets/widButton/widButton.vue';

export default {
  name: 'BottomBar',
  components: {
    WidButton
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    active: {
      type: String,
      default: ''
    }
  },
}