<script setup>
import Section from "../components/Section.vue";
</script>

<template>
  <div class="about">
    <Section
      :main="{
        title: 'EDUCATION',
      }"
      :content="[
        {
          subtitle:
            'Full Stack .NET Developer / School of Applied Technology SALT',
          date: 'July 2022 - April 2022',
          description:
            'Intensive three month training program for full stack web development with a focus on TDD, mob programming and applied learning.',
        },
        {
          subtitle:
            'Degree of Master of Science in Dental Surgery / University of Gothenburg',

          date: 'June 2015 - August 2010',
          description:
            'Five years of studies integrating theoretical, research-based knowledge with practical applications and hands-on training.',
        },
      ]"
    />
    <Section
      :main="{ title: 'WORK EXPERIENCE' }"
      :content="[
        {
          subtitle: 'Dentist / Distriktstandvården Kallhäll',
          date: 'July 2020 - June 2022',
          description:
            'Lead for pediatric dentistry and orthodontics. My role included supporting colleagues when needed, undertaking more complex treatments and sedation. Responsible for organizing and maintaining all administrative tasks related to pediatric referrals.',
        },
        {
          subtitle: 'Dentist / Folktandvården Stockholm AB',
          date: 'February 2017 - March 2020',
          description:
            'Routine dental tasks and responsible for radiological control. Quality control of x-ray equipment and x-ray related medical records.',
        },
        {
          subtitle: 'Dentist / Folktandvården Örebro län',
          date: 'August 2015 - January 2017',
          description:
            'My first work experience as a dentist where I had the opportunity to greatly grow in my professional role and skills.',
        },
      ]"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
