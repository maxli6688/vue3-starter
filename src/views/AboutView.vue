<script setup lang="ts">
import Header from '../components/Header/index.vue'
</script>

<template>
  <div class="about">
    <Header />
    <h1>This is an about page</h1>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
