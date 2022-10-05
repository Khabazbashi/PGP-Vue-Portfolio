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
  <div class="flex flex-col w-[100%] items-center">
    <div v-if="main.title" class="flex flex-col text-center w-[50%] mb-16">
      <h1 class="text-5xl mt-36 mb-5 font-bold">{{main.title}}</h1>
      <p class="text-xl">{{ main.info }}</p>
    </div>
    <div class="main__body lg:w-6/12">
      <subsection
        v-for="(item, index) in content"
        v-bind:key="index"
        v-bind:data="item"
      ></subsection>
    </div>
  </div>
</template>


