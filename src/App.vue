<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbar from "./components/Navbar.vue";
import contact from "./views/ContactView.vue";
import home from "./views/HomeView.vue";
import projects from "./views/ProjectsView.vue";
import about from "./views/AboutView.vue";
</script>

<template>
  <navbar class="h-[4em] lg:grow" />
  <RouterView class="lg:hidden flex flex-col md:m-h-full grow" />
  <div class="hidden lg:inline mx-20 mb-20 overflow-auto h-[88vh]">
    <home id="home" class="hidden lg:flex" />
    <about id="about" class="hidden lg:flex" />
    <projects id="projects" class="hidden lg:flex" />
    <contact id="contact" class="hidden lg:flex" />
  </div>
</template>
