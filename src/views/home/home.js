import { mapActions, mapGetters, mapMutations } from 'vuex';
import Search from '@/widgets/search/search.vue';
import ItemList from '@/components/itemList/itemList.vue';

export default {
  name: 'Home',
  components: {
    Search,
    ItemList,
  },
  mounted() {
    this.onPokemons();
  },
  computed: {
    ...mapGetters(['getPokemons', 'getFavorites']),
    list () {
      return this.getPokemons
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions(['action_getPokemons']),
    ...mapMutations(['IS_LOADING', 'FAVORITES']),
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
    },
    onFavorite (pokemon) {
      let findIndex = -1;
      let favorites = this.getFavorites;

      if (favorites.length) {
        findIndex = favorites.findIndex(item => item.name === pokemon.name)
      }

      if (findIndex >= 0) {
        favorites.splice(findIndex, 1);
      } else {
        favorites = [...favorites, pokemon];
      }

      this.FAVORITES(favorites);

    },
    onOpen (e) {
      console.log('onOpen', e)
    },
  }
}