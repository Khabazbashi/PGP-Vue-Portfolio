<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="flex flex-col items-center bg-blue-500 rounded-lg p-3">
    <p class="text-center text-md md:text-lg">{{ data }}</p>
  </div>
</template>
