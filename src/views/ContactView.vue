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
    class="md:flex-row min-h-[100%] p-6 lg:p-16 justify-center items-center"
  >
    <div class="md:w-[60%] grow">
      <h1 class="text-center text-5xl font-bold">Contact me</h1>
      <div class="flex flex-row justify-center mt-6 md:my-10">
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
