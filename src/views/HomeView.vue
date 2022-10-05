<script>
import home from "../data/data.json";

export default {
  data() {
    return home;
  },
};
</script>

<template>
  <div class="flex flex-row p-32 xm-9 xmax-h-[77%] lg:h-[100%] bg-[#1e272e]">
    <div class="flex w-[60vw] xmb-[16%]">
      <img
        class="rounded-full object-contain"
        alt="Picture of me"
        src="@/assets/adda.png"
      />
    </div>
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-7xl mb-[2%] lg:text-center lg:w-[80%]">
        Hi, I'm Sara<span id="blink">_</span>
      </h1>
      <p
        class="text-xl lg:text-2xl leading-tight leading-7 text-justify lg:text-center break-words mb-[12%] lg:w-[80%]"
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
