<script setup>
import Section from "../components/Section.vue";
</script>

<template>
  <div class="techstack">
    <Section
      :main="{ title: 'SKILLS', info: '' }"
      :content="[
        {
          subtitle: 'General',
          images: [
            'https://i.imgur.com/FV9bGuI.png',
            'https://i.imgur.com/AkF7wwX.png',
            'https://i.imgur.com/XlBhL8r.png',
          ],
          bullets: ['C#', '.NET', 'JavaScript'],
        },
      ]"
    />
    <Section
      :main="{ title: null, info: null }"
      :content="[
        {
          subtitle: 'Frontend',
          images: [
            'https://i.imgur.com/oPr12pv.png',
            'https://i.imgur.com/krVgT6g.png',
            'https://i.imgur.com/R0Klr0O.png',
            'https://i.imgur.com/tyxw1w4.png',
            'https://i.imgur.com/f7Pvt9O.png',
          ],
          bullets: [
            'Html',
            'CSS',
            'Vue',
            'React',
            'TailwindCSS',
            'Razor Pages',
          ],
        },
      ]"
    />
    <Section
      :main="{ title: null, info: null }"
      :content="[
        {
          subtitle: 'Backend',
          images: [
            'https://i.imgur.com/aqr9aOI.png',
            'https://i.imgur.com/CnYcu2X.png',
            'https://i.imgur.com/4R5h5mh.png',
            'https://i.imgur.com/3ewyYsv.pngs',
            'https://i.imgur.com/LjcMIjZ.jpg',
            'https://i.imgur.com/DGspkuq.png',
            'https://i.imgur.com/LZpYB17.png',
            'https://i.imgur.com/PSVDtf3.png',
          ],
          bullets: [
            'ASP.NET/MVC',
            'Microsoft SQL Server',
            'Entity Framework',
            'NodeJS',
            'REST API',
            'Vercel',
            'Heroku',
            'R',
          ],
        },
      ]"
    />
    <Section
      :main="{ title: null, info: null }"
      :content="[
        {
          subtitle: 'Tools & technologies',
          images: [
            'https://i.imgur.com/DOuRecZ.png',
            'https://i.imgur.com/PAshpFC.png',
            'https://i.imgur.com/G4nMova.png',
            'https://i.imgur.com/YS06ztj.png',
            'https://i.imgur.com/XTPbmX7.png',
            'https://i.imgur.com/VWyn82M.png',
            'https://i.imgur.com/88KOoHw.png',
            'https://i.imgur.com/C6bA2gH.png',
            'https://i.imgur.com/cdQVaxK.pngs',
            'https://i.imgur.com/2qI5iej.png',
            'https://i.imgur.com/S2d8YGC.png',
            'https://i.imgur.com/RpZfluP.png',
          ],
          bullets: [
            'Azure',
            'Azure Data Studio',
            'Visual Studio Code',
            'Visual Studio',
            'Rider',
            'Docker',
            'Mocha/Jest',
            'xUNIT',
            'Figma',
            'Trello',
            'Latex',
            'GitHub',
            'TDD',
            'Agile work methods',
            'Mob Programming',
          ],
        },
      ]"
    />
  </div>
</template>
