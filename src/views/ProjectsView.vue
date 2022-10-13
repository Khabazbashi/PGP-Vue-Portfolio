<script>
import projects from "../data/data.json";
import Card from "../components/Card.vue";

export default {
  components: {
    Card: Card,
  },
  props: {
    bgColor: {
      type: String,
    },
  },
  data() {
    return projects;
  },
};
</script>

<template>
  <div class="flex-col min-h-[100%] xl:p-16 p-6 items-center md:px-15">
    <div class="flex flex-col items-center">
      <h1 class="text-5xl mt-20 mb-[10%] md:mb-[4%] font-bold">
        {{ projects.title }}
      </h1>

      <div
        class="flex flex-row flex-wrap xl:w-[80%] justify-evenly content-evenly"
      >
        <div
          class="flex flex-col shrink xl:w-[40rem] md:m-5"
          v-for="(item, index) in projects.items"
          :key="index"
        >
          <Card style="xl:min-height: 30rem" :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
