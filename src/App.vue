<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav id="tre" class="border-b-2 text-center text-xl align-text-bottom">
    <RouterLink class="mt-6 mb-6" to="/">Home</RouterLink>
    <RouterLink class="mt-6 mb-6" to="/about">About</RouterLink>
    <RouterLink class="mt-6 mb-6" to="/projects">Projects</RouterLink>
    <RouterLink class="mt-6 mb-6" to="/techstack">Stack</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}
#tre {
  border-bottom: 1px solid rgb(53, 53, 53);
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
