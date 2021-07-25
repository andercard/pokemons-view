<template>
  <div @click="$emit('click')" :class="{'active': isActive}" class="icon">
    <IconStar />
  </div>
</template>

<script src="./buttonFavorite.js"></script>
<style src="./buttonFavorite.scss" scoped lang="scss"></style>