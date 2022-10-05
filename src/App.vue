<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
import contact from "./views/ContactView.vue";
import home from "./views/HomeView.vue";
import projects from "./views/ProjectsView.vue";
import about from "./views/AboutView.vue";
</script>

<template>
  <navbar class="h-[7vh]" />
  <RouterView class="lg:hidden flex flex-col m-h-full grow" />
  <div class="mx-20 mb-20 bg-[#142d4c] overflow-auto h-[86vh]">
    <home id="home" />
    <about id="about" />
    <projects id="projects" />
    <contact id="contact" />
  </div>
</template>
