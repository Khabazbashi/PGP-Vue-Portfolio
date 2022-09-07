<script setup>
import Section from "../components/MainSections.vue";
</script>

<template>
  <div class="about">
    <Section
      title="EDUCATION"
      contentType="about"
      :contents="[
        {
          subtitle: 'Full Stack .NET - School of Applied Technology SALT',
          date: 'May 2022 - Aug 2022',
          description:
            ' Intensive three month training program for full stack web development with a focus on TDD, mob programming and applied learning.',
        },
        {
          subtitle:
            'Degree of Master of Science in Dental Surgery – University of Gothenburg',
          date: 'July 2020 - June 2022',
          description:
            ' Five years of studies integrating theoretical, research-based knowledge with practical applications and hands-on training.',
        },
      ]"
    />
    <Section
      title="WORK EXPERIENCE"
      contentType="about"
      :contents="[
        {
          subtitle: 'Dentist – Distriktstandvården Kallhäll',
          date: 'July 2020 - June 2022',
          description:
            'Lead for pediatric dentistry and orthodontics. My role included supporting colleagues when needed, undertaking more complex treatments and sedation. Responsible for organizing and maintaining all administrative tasks related to pediatric referrals.',
        },
        {
          subtitle: 'Dentist – Folktandvården Stockholm AB',
          date: 'February 2017 - March 2020',
          description:
            ' Routine dental tasks and responsible for radiological control. Quality control of x-ray equipment and x-ray related medical records.',
        },
        {
          subtitle: 'Dentist – Folktandvården Region Örebro län',
          date: 'August 2015 - January 2017',
          description:
            ' My first work experience as a dentist where I had the opportunity to greatly grow in my professional role and skills.',
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
