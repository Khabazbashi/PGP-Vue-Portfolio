<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    imgIcon() {
      return `background-image: url("${this.data.path}"); background-size: cover; background-repeat: no-repeat`;
    },
    bgIcon() {
      return `${this.data.path}`;
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col-reverse md:flex-row shrink justify-center items-center my-7"
  >
    <div class="flex flex-col h-[100%] md:w-[100%] pt-8 px-5">
      <div class="flex flex-row">
        <h2 class="text-2xl">{{ data.subtitle }}</h2>
        <a target="_blank" :href="data.link">
          <span class="material-symbols-outlined py-1 ml-4">link</span>
        </a>
      </div>

      <div
        class="flex flex-col"
        v-if="
          !data.readMore || (!data.readMore && data.description.length > 300)
        "
      >
        <p class="text-lg md:text-lg">
          {{ data.description.slice(0, 300) }}
          <span v-if="data.description.length > 300">... </span>
          <button
            v-if="data.description.length > 300"
            class="text-indigo-600 font-bold tracking-widest"
            @click="data.readMore = !data.readMore"
          >
            READ MORE
          </button>
        </p>
      </div>

      <div
        class="flex flex-col items-align justify-center"
        v-if="data.readMore || data.description < 300"
      >
        <p class="text-sm md:text-lg">
          {{ data.description }}
          <button
            class="text-indigo-600 font-bold tracking-widest"
            v-if="!data.description < 300"
            @click="data.readMore = !data.readMore"
          >
            READ LESS
          </button>
        </p>
      </div>
    </div>

    <div
      class="hidden md:inline h-[20rem] lg:h-[17rem] xl:h-[25em] w-[50%] pt-10 mt-0 mx-5 self-start"
    >
      <img
        class="hidden md:flex self-center max-w-[100%] max-h-[90%] object-fill m-auto"
        :src="bgIcon"
      />
    </div>
  </div>
</template>
