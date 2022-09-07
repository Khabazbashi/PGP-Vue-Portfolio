<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  dataType: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="border-t-2">
    <div v-if="dataType === 'about'">
      <h3 class="font-bold pt-5 text-lg">{{ data.subtitle }}</h3>
      <p class="italic pb-2">{{ data.date }}</p>
      <p class="pb-5 text-ellipsis">{{ data.description }}</p>
    </div>

    <div v-else-if="dataType === 'project'">
      <h3 class="font-bold pt-5 text-lg">{{ data.subtitle }}</h3>
      <p class="pb-5 text-ellipsis">{{ data.description }}</p>
      <p>{{ data.link }}</p>
    </div>

    <div v-else>
      <h3 class="subtitle font-bold pt-3 pb-1 text-2xl">{{ data.subtitle }}</h3>
      <div class="stack__container grid gap-5 grid-cols-3 justify-items-center">
        <div
          class="img__container"
          v-for="(image, index) in data.images"
          v-bind:key="index"
        >
          <img :src="image" />
        </div>
      </div>
      <ul class="stack-container ml-9 pb-6 list-disc">
        <li v-for="(item, index) in data.bullets" v-bind:key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.stack__container {
  padding: 1rem;
  align-items: center;
}

.img__container {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.icon img {
  max-width: 80%;
  max-height: 80%;
  margin: auto;
}
@media (min-width: 1024px) {
}
</style>
