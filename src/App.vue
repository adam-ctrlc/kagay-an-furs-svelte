<template>
  <Header></Header>
  <Hero></Hero>
  <Event></Event>
  <!-- <div class="border absolute bottom-0 left-0 w-full overflow-hidden leading-none">

    <div class="h-40 bg-gradient-to-b from-transparent via-yellow-200/60 to-white blur-2xl"></div>

    <div class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-white"></div>
  </div> -->
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Event from "./components/Event.vue";

export default {
  components: {
    Header,
    Hero,
    Event,
  },
};
</script>
