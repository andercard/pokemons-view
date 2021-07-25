import { mapActions, mapGetters, mapMutations } from 'vuex';
import Search from '@/widgets/search/search.vue';
import ItemList from '@/components/itemList/itemList.vue';
import EmptyList from '@/components/emptyList/emptyList.vue';
import BottomBar from '@/components/bottomBar/bottomBar.vue';

export default {
  name: 'Home',
  components: {
    Search,
    ItemList,
    EmptyList,
    BottomBar,
  },
  mounted() {
    this.onPokemons();
  },
  data() {
    return {
      input: '',
      menu: [
        { text: 'All', icon: 'all' },
        { text: 'Favorites', icon: 'star' },
      ],
      menuActive: 'All',
    }
  },
  computed: {
    ...mapGetters(['getPokemons', 'getFavorites']),
    list () {
      const pokemons = this.menuActive === 'All' ? this.getPokemons : this.getFavorites;

      if (this.input) {
        return pokemons.filter(item => {
          return item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1
        })
      }

      return pokemons;
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
      this.input = e;
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
        favorites = [...favorites, { ...pokemon, active: true }];
      }

      this.FAVORITES(favorites);

    },
    onOpen (e) {
      console.log('onOpen', e);
    },
    onEmpty () {
      this.input = '';
      this.menuActive = 'All';
    },
    onChangeMenu (e) {
      this.menuActive = e.text;
    }
  }
}