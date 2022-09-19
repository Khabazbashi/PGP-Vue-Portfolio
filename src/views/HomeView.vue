<script setup></script>

<template>
  <div
    class="home flex flex-col justify-center m-9 max-h-[77%] lg:max-w-[65%] lg:m-auto lg:place-items-center"
  >
    <h1 class="hello text-5xl my-[8%]">Hello<span id="blink">_</span></h1>
    <p
      class="about flex text-xl lg:text-2xl leading-tight leading-7 text-justify lg:text-center break-words mb-[12%] lg:w-[50%]"
    >
      My name is Sara and I'm a Full-Stack .NET Developer from Stockholm. My
      primary field is .NET Core and C#, but I have experience with several
      other tools and technologies as well. I am always open to learning new
      skills and I enjoy a good challenge and the opportunity to be creative.
    </p>
    <div class="flex w-auto place-content-center grayscale h-56 mb-[16%]">
      <img
        class="rounded-full object-contain"
        alt="Picture of me"
        src="@/assets/adda.png"
      />
    </div>
  </div>
</template>

<style scoped>
.about {
  font-family: "Dosis", sans-serif;
}

#blink {
  animation: blinking 1s infinite;
}

@keyframes blinking {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
