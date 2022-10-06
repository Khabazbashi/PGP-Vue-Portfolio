<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="flex flex-col items-center w-24">
    <img class="object-contain" :src="data.image" />
    <p class="text-center text-md mt-5">{{ data.alt }}</p>
  </div>
</template>
