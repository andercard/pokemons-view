<template>
  <div class="search">
    <IconSearch />
    <input
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('enter', $event)"
      type="text"
      :value="value"
      :placeholder="placeholder">
  </div>
</template>

<script src="./search.js"></script>
<style src="./search.scss" scoped lang="scss"></style>