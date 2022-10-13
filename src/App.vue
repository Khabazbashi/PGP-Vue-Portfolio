<script setup>
import navbar from "./components/Navbar.vue";
import contact from "./views/ContactView.vue";
import home from "./views/HomeView.vue";
import projects from "./views/ProjectsView.vue";
import about from "./views/AboutView.vue";
import { lightOrDark } from "./assets/colorGenerator.js";

//TODO One size images
//TODO Add scroll effect
//TODO Improve responsiveness
//TODO Use CMS for handling data (Sanity)
//TODO Make page more dynamic
</script>

<script>
window.history.pushState("", "", "/");

export default {
  methods: {
    lightOrDark,
  },
  computed: {
    gradient1() {
      return `linear-gradient(${this.color1}, ${this.color2})`;
    },
    gradient3() {
      return `linear-gradient(${this.color2}, ${this.color3})`;
    },
    gradient4() {
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
    class="overflow-auto mb-20 grow h-[91vh] md:h-[86vh] md:mx-20 lg:mb-[7vh] lg:inline"
  >
    <home
      id="home"
      :bgColor="color1"
      class="flex"
      :style="{ background: gradient1 }"
    />
    <about
      id="about"
      :bgColor="color2"
      class="lg:flex"
      :style="{ background: color2 }"
    />
    <projects
      id="projects"
      :bgColor="color3"
      class="lg:flex"
      :style="{ background: gradient3 }"
    />
    <contact
      id="contact"
      :bgColor="color4"
      class="flex"
      :style="{ background: gradient4 }"
    />
  </div>
</template>
