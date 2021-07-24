import IconSearch from '@/widgets/iconSearch/iconSearch.vue'

export default {
  name: 'Search',
  components: {
    IconSearch
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    value: {
      type: String,
      default: ''
    }
  }
}