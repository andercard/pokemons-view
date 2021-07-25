<template>
  <transition name="fade">
    <section v-if="show" class="detail">
      <div class="overlay" @click="onClose" />
      <div class="content">
        <div class="header">
          <IconClose @click="onClose" class="close" />
          <img
            class="image"
            :src="getPokemon.sprites.other.dream_world.front_default"
            :alt="getPokemon.name">
        </div>

        <div class="body">
          <div class="item">
            Name: {{ getPokemon.name }}
          </div>
          <div class="item">
            Weight: {{ getPokemon.weight }}
          </div>
          <div class="item">
            Height: {{ getPokemon.height }}
          </div>
          <div class="item">
            Types: {{ types }}
          </div>
        </div>

        <div class="footer">
          <WidButton @click="onCopy"> Share to my friends </WidButton>
          <ButtonFavorite
            @click="$emit('favorite', getPokemon)"
            :isActive="getPokemon.active" />
        </div>

      </div>
    </section>
  </transition>
</template>

<script src="./detail.js"></script>
<style src="./detail.scss" scoped lang="scss"></style>