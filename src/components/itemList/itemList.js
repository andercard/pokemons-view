import IconStar from '@/widgets/iconStar/iconStar.vue';
import ButtonFavorite from '@/components/buttonFavorite/buttonFavorite.vue';

export default {
  name: 'ItemList',
  components: {
    IconStar,
    ButtonFavorite,
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