<script setup>
import Section from "../components/MainSections.vue";
</script>

<template>
  <Section
    title="PROJECTS"
    contentType="project"
    :contents="[
      {
        subtitle: 'Title',
        link: 'link',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
      },
      {
        subtitle: 'Title',
        link: 'link',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
      },
    ]"
  />
</template>

<style scoped></style>
