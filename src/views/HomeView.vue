<script>
import home from "../data/data.json";

export default {
  props: {
    bgColor: {
      type: String,
    },
  },
  data() {
    return home;
  },
};
</script>

<template>
  <div
    :style="{ 'background-color': bgColor }"
    class="flex-row min-h-[100%] p-6 md:p-16 justify-center items-center"
  >
    <div class="flex w-[14em] md:w-[70%] xl:w-[35em] xl:mb-0">
      <img
        class="rounded-full object-contain"
        alt="Picture of me"
        src="@/assets/adda.png"
      />
    </div>
    <div
      class="flex flex-col justify-center items-center mt-12 md:mt-20 xl:m-0 xl:w-[70%]"
    >
      <h1
        style="font-family: 'Work Sans', sans-serif"
        class="text-4xl md:text-7xl mb-[4%] md:mb-[5%] xl:mb-[2%] xl:text-center xl:w-[80%]"
      >
        Hi, I'm Sara<span id="blink">_</span>
      </h1>
      <p
        class="text-xl md:text-2xl leading-tight leading-7 text-center break-words xl:m-[0] mb-[12%] xl:w-[80%]"
      >
        {{ home.info }}
      </p>
    </div>
  </div>
</template>

<style scoped>
#blink {
  animation: blinking 1s infinite;
}

@keyframes blinking {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
