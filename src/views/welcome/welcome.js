import WidButton from '@/widgets/button/button.vue'

export default {
  name: 'Welcome',
  components: {
    WidButton
  },
  methods: {
    onClick () {
      console.log('cli')
    }
  },
}