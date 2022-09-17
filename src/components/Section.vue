<script setup>
import subsection from "./Subsection.vue";
defineProps({
  main: {
    type: Object,
  },
  content: {
    type: Array,
  },
});
</script>

<template>
  <div class="main flex grow flex-col">
    <div v-if="main.title" class="main__header flex flex-col text-center">
      <h1 class="main__title text-5xl mt-36 mb-10 mx-9">{{ main.title }}</h1>
      <p class="main__info text-lg mx-9 mb-32">{{ main.info }}</p>
    </div>

    <div class="main__body bg-white">
      <subsection
        class="mx-9"
        v-for="(item, index) in content"
        v-bind:key="index"
        v-bind:data="item"
      ></subsection>
    </div>
  </div>
</template>

<style scoped>
.main__info {
  font-family: "Miriam Libre", sans-serif;
}
.main__title {
  font-family: "Dosis", sans-serif;
}
@media (min-width: 1024px) {
}
</style>
