<script setup>
import Section from "../components/Section.vue";
</script>

<template>
  <Section
    id="Projects"
    :main="{ title: 'PROJECTS' }"
    :content="[
      {
        subtitle: 'Invitation to Wedding',
        link: 'https://wedding-invitation-iota.vercel.app/',
        description:
          'This project was created for my wedding as a replacement for invitation cards, it was an opportunity for me to learn a bit more about React and how to deploy.The project is entirely based on React, deployed using Vercel. Key learning moments was general training in React, routing, deployment and connecting to Google Maps services. The site is primarily designed for mobile use.',
      },
      {
        subtitle: 'Linqin',
        link: 'https://calm-smoke-042ccb503.1.azurestaticapps.net/',
        description:
          'This is a project we (Sara, Ulfath, Björn) made as a mob to graduate Salt. The project lasted for two weeks and was required to be full stack. LINQ facilitates and streamlines coding and increases readability and maintainability of your code. It can however at times be daunting and challenging, especially for one who lacks previous experience in coding. We wanted to create an app that helps future coders and students at SALT by providing a visual and challenge based coding experience of LINQ that facilitates the learning process. ',
      },
    ]"
  />
</template>
