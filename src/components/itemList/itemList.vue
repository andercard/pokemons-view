<template>
  <div :class="{'active': isActive}" class="item">
    <div @click="onOpen" class="item__text">
      <p>{{name}}</p>
    </div>
    <div @click="onFavorite" class="item__icon">
      <IconStar />
    </div>
  </div>
</template>

<script src="./itemList.js"></script>
<style src="./itemList.scss" scoped lang="scss"></style>