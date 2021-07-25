<template>
  <section class="empty">
    <h5>{{title}}</h5>
    <p>{{description}}</p>
    <WidButton @click="$emit('click')">{{button}}</WidButton>
  </section>
</template>

<script src="./emptyList.js"></script>
<style src="./emptyList.scss" scoped lang="scss"></style>