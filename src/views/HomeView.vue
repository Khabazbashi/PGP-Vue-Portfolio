<script>
import home from "../data/data.json";

export default {
  data() {
    return home;
  },
};
</script>

<template>
  <div class="flex flex-col lg:flex-row p-5 lg:p-32 lg:h-[100%] bg-[#1e272e]">
    <div class="flex w-[60vw] m-auto md:mb-[16%] lg:mb-0">
      <img
        class="rounded-full object-contain"
        alt="Picture of me"
        src="@/assets/adda.png"
      />
    </div>
    <div class="flex flex-col justify-center items-center">
      <h1
        class="text-4xl md:text-7xl mb-[7%] md:mb-[5%] lg:mb-[2%] lg:text-center lg:w-[80%]"
      >
        Hi, I'm Sara<span id="blink">_</span>
      </h1>
      <p
        class="text-xl md:text-2xl leading-tight leading-7 text-center break-words mb-[12%] lg:w-[80%]"
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
