<script setup>
import { RouterLink, RouterView } from "vue-router";
import GithubIcon from "./icons/IconGithub.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import PortfolioIcon from "./icons/IconPortfolio.vue";
import { Slide } from "vue3-burger-menu";
</script>

//TODO fix scroll up button

<template>
  <nav class="navbar flex flex-row text-black md:p-4 md:w-full">
    <div class="flex relative bg-black">
      <Slide
        class="hamburger-menu grow lg:hidden"
        right
        width="420"
        :closeOnNavigation="true"
      >
        <a href="#home"> Home </a>
        <a href="#about"> About </a>
        <a href="#projects"> Projects </a>
        <a href="#contact"> Contact </a>
      </Slide>
    </div>
    <div class="hidden xl:flex flex-row text-xl my-auto ml-16 space-x-10 grow">
      <p style="font-family: 'Raleway', sans-serif; font-size: 25px">
        Sara Khabazbashi
      </p>
    </div>

    <div
      style="font-family: 'Work Sans', sans-serif; font-size: 25px"
      class="hidden xl:flex flex-row space-x-4 text-xl my-auto float-right mr-16"
    >
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT ME</a>
    </div>
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
  left: 5% !important;
  top: 3% !important;
}
.bm-burger-button.hidden {
  display: none;
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
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Black*/
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
</style>
