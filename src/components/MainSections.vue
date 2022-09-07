<script setup>
import SubSection from "./SubSections.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: Array,
  },
  contentType: {
    type: String,
  },
});
</script>

<template>
  <div class="flex grow flex-col ml-6 mr-6">
    <h1 class="text-4xl mt-10 mb-3">{{ title }}</h1>
    <SubSection
      v-bind:dataType="contentType"
      v-for="(item, index) in contents"
      v-bind:key="index"
      v-bind:data="item"
    ></SubSection>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Dosis", sans-serif;
}
@media (min-width: 1024px) {
}
</style>
