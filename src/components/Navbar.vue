<script setup>
import { RouterLink, RouterView } from "vue-router";
import GithubIcon from "./icons/IconGithub.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import PortfolioIcon from "./icons/IconPortfolio.vue";
import { Slide } from "vue3-burger-menu";
</script>

<template>
  <nav class="navbar flex flex-row bg-white p-4">
    <Slide
      class="hamburger-menu grow"
      id="sm"
      right
      width="420"
      :closeOnNavigation="true"
    >
      <a>
        <span> <RouterLink to="/">Home</RouterLink></span>
      </a>
      <a>
        <span> <RouterLink to="about">About</RouterLink></span>
      </a>
      <a>
        <span> <RouterLink to="projects">Projects</RouterLink></span>
      </a>
      <a>
        <span> <RouterLink to="techstack">TechStack</RouterLink></span>
      </a>
    </Slide>
    <div class="social-buttons flex flex-row space-x-4 first:pl-2">
      <a target="_blank" href="https://github.com/Khabazbashi"
        ><GithubIcon class="social-icon w-auto h-12 p-2 rounded-full self-end"
      /></a>
      <a target="_blank" href="https://www.linkedin.com/in/sara-k-768537219/"
        ><LinkedinIcon class="social-icon w-auto h-12 p-2 rounded-full"
      /></a>
      <RouterLink to="projects"
        ><PortfolioIcon class="social-icon w-auto h-12 p-2 rounded-full"
      /></RouterLink>
    </div>

    <!-- <div class="nav-links flex flex-row my-auto">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="about">About</RouterLink>
      <RouterLink to="projects">Projects</RouterLink>
      <RouterLink to="techstack">TechStack</RouterLink>
    </div> -->
  </nav>
</template>

<style>
html {
  height: 100%;
}
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  left: 5%;
  top: 25px;
}
.bm-burger-button.hidden {
  display: none;
}
.bm-burger-bars {
  background-color: #373a47;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-cross-button.hidden {
  display: none;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgba(63, 63, 65, 0.8); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
.bm-overlay {
  background: rgba(0, 0, 0, 0);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

.social-icon {
  background-color: var(--color-background);
}
/* @media screen and (min-width: 600px) {
  .app-nav {
    display: none;
  }
} */
@media (min-width: 1024px) {
  nav {
    text-align: right;
    font-size: 1.5rem;
    padding: 1rem 0;
  }
}
</style>
