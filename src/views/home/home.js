import { mapActions, mapGetters, mapMutations } from 'vuex';
import Search from '@/widgets/search/search.vue';

export default {
  name: 'Home',
  components: {
    Search,
  },
  mounted() {
    this.onPokemons();
  },
  computed: {
    ...mapGetters(['getPokemons']),
  },
  data() {
    return {
      input: 'que'
    }
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
    },
    onInput (e) {
      console.log( e)
    },
    onEnter (e) {
      console.log('e', e.target.value)
    }
  }
}