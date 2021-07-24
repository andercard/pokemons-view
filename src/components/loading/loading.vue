<template>
  <transition name="fade">
    <section v-if="show" class="loading">
      <div class="loading__content">
        <img src="@/assets/images/pokeball.png" alt="loading">
      </div>
    </section>
  </transition>
</template>

<script src="./loading.js"></script>
<style src="./loading.scss" scoped lang="scss"></style>