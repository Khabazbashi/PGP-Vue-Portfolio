<script setup>
import GithubIcon from "@/components/icons/IconGithub.vue";
import LinkedinIcon from "@/components/icons/IconLinkedin.vue";
import PortfolioIcon from "@/components/icons/IconPortfolio.vue";
</script>

<template>
  <div class="home flex flex-col m-9">
    <h1 class="hello text-5xl mt-24">Hello<span id="blink">_</span></h1>
    <p
      class="about flex grow text-2xl leading-tight text-justify break-words my-9"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam
      eligendi quam mollitia minima deserunt, ad doloribus esse iste velit.
    </p>
    <div class="flex h-2/5 w-auto m-16 place-content-center grayscale">
      <img
        class="rounded-full shadow-lg object-contain"
        alt="Picture of me"
        src="@/assets/adda.png"
      />
    </div>
  </div>
</template>

<style scoped>
.about {
  font-family: "Dosis", sans-serif;
}

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
