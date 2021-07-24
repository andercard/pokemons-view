<template>
  <button @click="onClick" class="button">
    <IconStar v-if="icon === 'star'" />
    <IconAll v-if="icon === 'all'" />
    <span><slot /></span>
  </button>
</template>

<script src="./button.js"></script>
<style src="./button.scss" scoped lang="scss"></style>