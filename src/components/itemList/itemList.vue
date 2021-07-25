<template>
  <div :class="{'active': isActive}" class="item">
    <div @click="onOpen" class="item__text">
      <p>{{name}}</p>
    </div>
    <ButtonFavorite :isActive="isActive" @click="onFavorite" />
  </div>
</template>

<script src="./itemList.js"></script>
<style src="./itemList.scss" scoped lang="scss"></style>