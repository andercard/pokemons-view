import IconStar from '@/widgets/iconStar/iconStar.vue';
import IconAll from '@/widgets/iconAll/iconAll.vue';


export default {
  name: 'WidButton',
  components: {
    IconStar,
    IconAll
  },
  props: {
    icon: {
      default: '',
      type: String,
    },
    to: {
      default: '',
      type: [String, Object],
    }
  },
  methods: {
    onClick () {

      if (this.to) this.$router.push(this.to)

      this.$emit('click')
    }
  },
}