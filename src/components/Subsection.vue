<script>
export default {
  name: "ToggleDiv",
  data: function () {
    return {
      isShow: false,
    };
  },

  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="subsection first:mt-20 last:mb-20 my-9 lg:first:my-5">
    <h3 class="text-xl font-semibold">{{ data.subtitle }}</h3>

    <div v-if="data.date">
      <p class="italic">{{ data.date }}</p>
    </div>

    <div v-if="data.description">
      <p class="mt-2 pb-7">{{ data.description }}</p>
    </div>

    <div v-if="data.link" class="flex place-content-end pr-3">
      <a target="_blank" :href="data.link"
        ><span class="material-symbols-outlined relative absolute">
          link
        </span></a
      >
    </div>

    <div
      v-if="data.images"
      class="grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-4 mb-10"
    >
      <div
        class="img__container flex md:p-5"
        v-for="(ts, index) in data.images"
        :key="index"
      >
        <img :src="ts" />
      </div>
    </div>

    <div class="flex flex-col" v-if="data.bullets">
      <button class="w-10 mx-auto" @click="isShow = !isShow">
        <img alt="Expand" src="../assets/expand.png" />
      </button>
      <div class="p-5" v-if="isShow">
        <ul v-for="(tst, index) in data.bullets" :key="index">
          <li class="text-center">{{ tst }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img__container {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

@media (min-width: 1024px) {
}
</style>
