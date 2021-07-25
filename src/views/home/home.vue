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
    <BottomBar @click="onChangeMenu" :active="menuActive" :items="menu" />
    <Detail
      @close="onToggleDetail"
      @favorite="onFavorite"
      :show="showDetail" />
  </div>
</template>

<script src="./home.js"></script>
<style src="./home.scss" scoped lang="scss"></style>

