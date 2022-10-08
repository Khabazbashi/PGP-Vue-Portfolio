<script>
import about from "../data/data.json";
import Icon from "../components/Icon.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Icon: Icon,
    Button: Button,
  },
  props: {
    bgColor: {
      type: String,
    },
  },
  data() {
    return about;
  },
};
</script>

<template>
  <div
    :style="{ 'background-color': bgColor }"
    class="flex-col min-h-[100%] xl:p-16 p-6 items-center"
  >
    <div>
      <div class="my-20 xl:w-[50%] m-auto">
        <h1 class="text-5xl md:mt-20 mb-8 font-bold text-center">
          {{ about.title }}
        </h1>
        <p
          style="white-space: pre-line"
          class="text-xl md:text-2xl text-center w-[80%] m-auto"
        >
          {{ about.info }}
        </p>
      </div>

      <div class="flex flex-col place-items-center">
        <h2
          class="text-2xl xl:text-3xl leading-tight leading-7 text-center break-words mb-[5%] lg:mb-0 md:mb-[2%]"
        >
          {{ about.subtitle }}
        </h2>
        <div
          class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-12 lg:my-10 self-center xl:justify-center"
        >
          <div v-for="(item, index) in about.stack.noicons" :key="index">
            <Button class="m-1" :color="bgColor" v-bind:data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
