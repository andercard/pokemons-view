import IconStar from '@/widgets/iconStar/iconStar.vue';

export default {
  name: 'ItemList',
  components: {
    IconStar
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'Name'
    },
  },
  methods: {
    onOpen () {
      this.$emit('open', this.name)
    },
    onFavorite () {
      this.$emit('favorite', this.name)
    }
  },
}