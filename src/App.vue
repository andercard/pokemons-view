<template>
  <div id="app">
    <Loading :show="getIsLoading" />
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/loading/loading.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapGetters(['getIsLoading']),
  },
}
</script>
