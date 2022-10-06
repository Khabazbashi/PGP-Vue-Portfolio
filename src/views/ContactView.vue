<script>
import GithubIcon from "../components/icons/IconGithub.vue";
import LinkedinIcon from "../components/icons/IconLinkedin.vue";
import PortfolioIcon from "../components/icons/IconPortfolio.vue";
import contact from "../data/data.json";

export default {
  components: {
    GithubIcon: GithubIcon,
    LinkedinIcon: LinkedinIcon,
    PortfolioIcon: PortfolioIcon,
  },
  props: {
    bgColor: {
      type: String,
    },
  },
  data() {
    return contact;
  },
};
</script>

<template>
  <div
    :style="{ 'background-color': bgColor }"
    class="flex-col min-h-[100%] xl:p-16 p-6 items-center justify-center"
  >
    <div class="md:w-[60%]">
      <h1 class="text-center text-5xl font-bold my-10">Contact me</h1>
      <div class="flex flex-row justify-center my-10">
        <a target="_blank" :href="contact.github"
          ><GithubIcon class="social-icon w-auto h-20 m-5 rounded-full"
        /></a>
        <a target="_blank" :href="contact.linkedin"
          ><LinkedinIcon class="social-icon w-auto h-20 m-5 rounded-full"
        /></a>
        <a target="_blank" :href="contact.email"
          ><PortfolioIcon class="social-icon w-auto h-20 m-5 rounded-full"
        /></a>
      </div>
    </div>
  </div>
</template>
