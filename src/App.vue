<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
</script>

<template>
  <navbar />
  <RouterView id="app-main" class="flex flex-col m-h-full grow" />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
