<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="flex flex-col items-center w-20">
    <img class="object-contain" :src="data.image" />
    <p class="text-center text-lg">{{ data.alt }}</p>
  </div>
</template>
