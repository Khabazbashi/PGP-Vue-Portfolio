<script>
import home from "../data/data.json";

export default {
  data() {
    return home;
  },
};
</script>

<template>
  <div
    class="flex-row min-h-[100%] p-6 md:p-16 bg-[#1e272e] justify-center items-center"
  >
    <div class="flex w-[70%] lg:w-[35em] lg:mb-0">
      <img
        class="rounded-full object-contain"
        alt="Picture of me"
        src="@/assets/adda.png"
      />
    </div>
    <div
      class="flex flex-col justify-center items-center mt-12 md:mt-20 lg:m-0 lg:w-[70%]"
    >
      <h1
        style="font-family: 'Work Sans', sans-serif"
        class="text-4xl md:text-7xl mb-[4%] md:mb-[5%] lg:mb-[2%] lg:text-center lg:w-[80%]"
      >
        Hi, I'm Sara<span id="blink">_</span>
      </h1>
      <p
        class="text-xl md:text-2xl leading-tight leading-7 text-center break-words lg:m-[0] mb-[12%] lg:w-[80%]"
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
