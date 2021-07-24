import { mapActions, mapGetters, mapMutations } from 'vuex';
import IconStar from '@/widgets/iconStar/iconStar.vue';
import IconAll from '@/widgets/iconAll/iconAll.vue';
import IconSearch from '@/widgets/iconSearch/iconSearch.vue';

export default {
  name: 'Home',
  components: {
    IconStar,
    IconAll,
    IconSearch,
  },
  mounted() {
    this.onPokemons();
  },
  computed: {
    ...mapGetters(['getPokemons']),
  },
  methods: {
    ...mapActions(['action_getPokemons']),
    ...mapMutations(['IS_LOADING']),
    async onPokemons () {
      try {
        this.IS_LOADING(true);
        await this.action_getPokemons()
      } catch (error) {
        alert('error en el servidor')
      } finally {
        this.IS_LOADING(false);
      }
    }
  }
}