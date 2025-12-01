<script setup lang="ts">
  import Calculator from '../components/Calculator.vue'
</script>

<template>
  <div class="home-page">
    <Calculator />
  </div>
</template>

<style>
  .home-page {
    min-height: 100vh;
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
