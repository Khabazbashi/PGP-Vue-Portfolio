<script>
export default {
  props: {
    data: String,
  },
};
</script>

<template>
  <div class="flex flex-col items-center bg-blue-500 p-3">
    <p class="text-center text-md md:text-lg">{{ data }}</p>
  </div>
</template>
