<template>
  <button @click="onClick" class="button">
    <IconStar v-if="icon === 'star'" />
    <IconAll v-if="icon === 'all'" />
    <span><slot /></span>
  </button>
</template>

<script src="./widButton.js"></script>
<style src="./widButton.scss" scoped lang="scss"></style>