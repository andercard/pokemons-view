import { mapGetters } from 'vuex';
import IconClose from '@/widgets/iconClose/iconClose.vue';
import WidButton from '@/widgets/button/button.vue';
import ButtonFavorite from '@/components/buttonFavorite/buttonFavorite.vue';

export default {
  name: 'Detail',
  components: {
    WidButton,
    IconClose,
    ButtonFavorite,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.onKeyPress)
    }
  },
  computed: {
    ...mapGetters(['getPokemon']),
    types () {
      const types = this.getPokemon.types.map(item => item.type.name);
      return types.join(', ')
    }
  },
  methods: {
    onClose () {
      this.$emit('close')
    },
    onKeyPress (e) {
      if (this.show && e.keyCode === 27) this.onClose()
    },
    async onCopy () {
      try {
        const pokemon = this.getPokemon;
        const text = `
          Name: ${pokemon.name},
          Weight: ${pokemon.weight},
          Height: ${pokemon.height},
          Types: ${this.types}
        `;

        await navigator.clipboard.writeText(text);

        alert('Copied to clipboard');
      } catch (err) {
        alert('Could not be copied')
      }
    }
  }
}