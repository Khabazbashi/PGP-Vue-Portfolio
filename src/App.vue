<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
import contact from "./views/ContactView.vue";
import home from "./views/HomeView.vue";
import projects from "./views/ProjectsView.vue";
import about from "./views/AboutView.vue";
import { lightOrDark } from "./assets/colorGenerator.js";
</script>

<script>
window.location.replace("https://adda-portfolio.vercel.app/");

export default {
  methods: {
    lightOrDark,
  },
  computed: {
    gradient1() {
      return `linear-gradient(${this.color1}, ${this.color2})`;
    },
    gradient2() {
      return `linear-gradient(${this.color2}, ${this.color3})`;
    },
    gradient3() {
      return `linear-gradient(${this.color3}, ${this.color4})`;
    },
  },
  name: "post-request",
  data() {
    return {
      colorList: null,
      color1: null,
      color2: null,
      color3: null,
      color4: null,
    };
  },
  created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        mode: "transformer",
        num_colors: 4,
        temperature: "1.3",
        num_results: 4,
        adjacency: [
          "0",
          "65",
          "45",
          "35",
          "65",
          "0",
          "35",
          "65",
          "45",
          "35",
          "0",
          "35",
          "35",
          "65",
          "35",
          "0",
        ],
        palette: ["-", "-", "-", "-"],
      }),
    };
    fetch("https://api.huemint.com/color", requestOptions)
      .then((response) => response.json())
      .then(
        (data) => (
          (this.colorList = data),
          (this.color1 = lightOrDark(data.results[0].palette)),
          (this.color2 = lightOrDark(data.results[1].palette)),
          (this.color3 = lightOrDark(data.results[2].palette)),
          (this.color4 = lightOrDark(data.results[3].palette))
        )
      );
  },
};
</script>

<template>
  <navbar class="h-[4em] md:h-[5em] lg:h-[7vh]" />
  <div
    class="overflow-auto mb-20 grow h-[90vh] md:h-[86vh] md:mx-20 lg:mb-[7vh] lg:inline"
  >
    <home id="home" :bgColor="color1" class="flex" />
    <div class="h-2" :style="{ background: gradient1 }"></div>
    <about id="about" :bgColor="color2" class="lg:flex" />
    <div class="h-2" :style="{ background: gradient2 }"></div>
    <projects id="projects" :bgColor="color3" class="lg:flex" />
    <div class="h-2" :style="{ background: gradient3 }"></div>
    <contact id="contact" :bgColor="color4" class="flex" />
  </div>
</template>
