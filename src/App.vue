<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
import contact from "./views/ContactView.vue";
import home from "./views/HomeView.vue";
import projects from "./views/ProjectsView.vue";
import about from "./views/AboutView.vue";
</script>

<script>
export default {
  name: "post-request",
  data() {
    return {
      color: String,
    };
  },
  computed: {
    gradient1() {
      return `linear-gradient(${this.color.palette[0]}, ${this.color.palette[1]})`;
    },
    gradient2() {
      return `linear-gradient(${this.color.palette[1]}, ${this.color.palette[2]})`;
    },
    gradient3() {
      return `linear-gradient(${this.color.palette[2]}, ${this.color.palette[3]})`;
    },
  },
  created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        mode: "transformer",
        num_colors: 4,
        temperature: "1.3",
        num_results: 2,
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
      .then((data) => (this.color = data.results[0]));
  },
};
</script>

<template>
  <navbar class="h-[4em] lg:h-[7vh]" />
  <RouterView class="lg:hidden flex flex-col md:m-h-full grow" />
  <div class="hidden lg:inline mx-20 mb-20 overflow-auto h-[86vh] lg:mb-[7vh]">
    <home id="home" :bgColor="color.palette[0]" class="hidden lg:flex" />
    <div class="h-[30em]" :style="{ background: gradient1 }"></div>

    <about id="about" :bgColor="color.palette[1]" class="hidden lg:flex" />
    <div class="h-[30em]" :style="{ background: gradient2 }"></div>
    <projects
      id="projects"
      :bgColor="color.palette[2]"
      class="hidden lg:flex"
    />
    <div class="h-[30em]" :style="{ background: gradient3 }"></div>
    <contact id="contact" :bgColor="color.palette[3]" class="hidden lg:flex" />
  </div>
</template>
