<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
import contact from "./views/ContactView.vue";
import home from "./views/HomeView.vue";
import projects from "./views/ProjectsView.vue";
import about from "./views/AboutView.vue";
</script>

<template>
  <navbar class="h-[10vh] md:h-[7vh]" />
  <RouterView class="lg:hidden flex flex-col m-h-full grow" />
  <div class="hidden lg:inline mx-20 mb-20 bg-[#142d4c] overflow-auto h-[86vh]">
    <home class="hidden lg:flex" id="home" />
    <about class="hidden lg:flex" id="about" />
    <projects class="hidden lg:flex" id="projects" />
    <contact class="hidden lg:flex" id="contact" />
  </div>
</template>
