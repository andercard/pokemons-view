<template>
  <div class="bar" v-if="items.length">
    <div class="bar__content">
      <WidButton 
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
        :class="{'disabled': active !== item.text}"
        @click="$emit('click', item)">
        {{item.text}}
      </WidButton>
    </div>
  </div>
</template>

<script src="./menuBar.js"></script>
<style src="./menuBar.scss" scoped lang="scss"></style>