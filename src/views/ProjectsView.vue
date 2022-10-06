<script>
import projects from "../data/data.json";

export default {
  data() {
    return projects;
  },
};
</script>

<template>
  <div
    class="flex-col min-h-[100%] lg:p-16 p-6 bg-[#1b191a] items-center md:px-20"
  >
    <div class="lg:w-[60%]">
      <h1
        style="font-family: 'Work Sans', sans-serif"
        class="text-5xl mt-20 lg:mb-[8%] font-bold text-center"
      >
        {{ projects.title }}
      </h1>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 my-16">
          <div
            class="flex flex-col"
            v-for="(item, index) in projects.items"
            :key="index"
          >
            <div class="flex">
              <h2 class="text-3xl grow">{{ item.subtitle }}</h2>
              <a target="_blank" :href="item.link">
                <span class="material-symbols-outlined relative absolute"
                  >link</span
                >
              </a>
            </div>
            <p class="text-justify text-xl">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
