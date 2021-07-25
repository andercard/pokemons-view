import WidButton from '@/widgets/button/button.vue';

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