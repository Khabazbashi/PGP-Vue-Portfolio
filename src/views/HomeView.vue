<script setup>
import GithubIcon from "@/components/icons/IconGithub.vue";
import LinkedinIcon from "@/components/icons/IconLinkedin.vue";
import PortfolioIcon from "@/components/icons/IconPortfolio.vue";
</script>

<template>
  <div class="flex h-2/5 w-auto m-4 place-content-center">
    <img
      class="rounded-full shadow-lg object-contain"
      alt="Picture of me"
      src="@/assets/adda.png"
    />
  </div>
  <div class="flex grow flex-col ml-6 mr-6">
    <h1 class="text-5xl mt-5">Hello<span id="blink">_</span></h1>
    <p class="text-2xl mt-5 mb-5 leading-tight text-justify break-words">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam
      eligendi quam mollitia minima deserunt, ad doloribus esse iste velit.
    </p>
  </div>
  <div id="borders" class="flex flex-row place-content-evenly pt-4 pb-4">
    <a target="_blank" href="https://github.com/Khabazbashi"
      ><GithubIcon class="w-auto h-14"
    /></a>
    <a target="_blank" href="https://www.linkedin.com/in/sara-k-768537219/"
      ><LinkedinIcon class="w-auto h-14"
    /></a>
    <RouterLink to="projects"><PortfolioIcon class="w-auto h-14" /></RouterLink>
  </div>
</template>

<style scoped>
.text-5xl {
  text-shadow: red -4px 0, cyan 4px 0;
}

#blink {
  animation: blinking 1s infinite;
}

#borders {
  border-top: 2px solid black;
  box-shadow: 5px -4px 0px -2px rgba(255, 0, 0, 1),
    30px -6px 0px -2px rgba(0, 255, 255, 1);
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
