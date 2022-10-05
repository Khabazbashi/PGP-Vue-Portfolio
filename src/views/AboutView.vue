<script>
import about from "../data/data.json";
import Icon from "../components/Icon.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Icon: Icon,
    Button: Button,
  },
  data() {
    return about;
  },
};
</script>

<template>
  <div class="flex flex-col items-center min-h-[100%] py-10 bg-[#946268]">
    <div class="w-[50%]">
      <div class="mb-20">
        <h1 class="text-5xl mt-20 mb-5 font-bold text-center">
          {{ about.title }}
        </h1>
        <p
          style="white-space: pre-line"
          class="text-xl text-justify w-[80%] m-auto"
        >
          {{ about.info }}
        </p>
      </div>

      <div class="flex flex-col place-items-center">
        <h2
          class="lg:text-3xl leading-tight leading-7 text-center break-words mb-[2%]"
        >
          {{ about.subtitle }}
        </h2>
        <div class="grid grid-cols-5 gap-5">
          <div
            class="flex"
            v-for="(item, index) in about.stack.icons"
            :key="index"
          >
            <Icon class="m-5" v-bind:data="item" />
          </div>
        </div>
        <div class="grid grid-cols-3 my-20 self-center">
          <div v-for="(item, index) in about.stack.noicons" :key="index">
            <Button class="m-5" v-bind:data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
