<template>
  <div class="home">
    <div class="home__content">
      <Search @input="onInput" />
      <div v-if="list.length" class="home__list">
        <ItemList
          v-for="item in list" :key="item.name"
          :isActive="item.active"
          :name="item.name"
          @favorite="onFavorite(item)"
          @open="onOpen(item)" />
      </div>
      <EmptyList class="empty" @click="onEmpty" v-else />
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style src="./home.scss" scoped lang="scss"></style>

