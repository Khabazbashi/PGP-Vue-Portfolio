<script setup>
import Values from "values.js";
</script>

<script>
export default {
  props: {
    data: String,
    color: String,
  },
  computed: {
    newColor() {
      const currentColor = new Values(this.color);
      const shades = currentColor.shades(23);
      var shade = "#" + shades[Math.floor(Math.random() * shades.length)].hex;
      return shade;
    },
  },
};
</script>

<template>
  <div
    :style="{ background: newColor }"
    class="flex flex-col items-center py-3 px-1"
  >
    <p class="text-center text-md md:text-lg">{{ data }}</p>
  </div>
</template>
