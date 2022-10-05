<script>
import projects from "../data/data.json";

export default {
  data() {
    return projects;
  },
};
</script>

<template>
  <div class="flex flex-col items-center min-h-[100%] bg-[#1b191a]">
    <div class="w-[60%]">
      <h1 class="text-5xl mt-20 mb-[15%] font-bold text-center">
        {{ projects.title }}
      </h1>
      <div>
        <div class="grid grid-cols-2 gap-20 my-16">
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
