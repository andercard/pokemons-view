import IconStar from '@/widgets/iconStar/iconStar.vue';

export default {
  name: 'ButtonFavorite',
  components: {
    IconStar,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    }
  }
}