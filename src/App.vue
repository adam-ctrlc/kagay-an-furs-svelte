<template>
  <Header></Header>
  <Hero></Hero>

  <!-- <div class="border absolute bottom-0 left-0 w-full overflow-hidden leading-none">

    <div class="h-40 bg-gradient-to-b from-transparent via-yellow-200/60 to-white blur-2xl"></div>

    <div class="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-white"></div>
  </div> -->

  <section class="px-12 py-3 mt-10">
    <h4 class="text-2xl">Events</h4>

  </section>

</template>




<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue'

export default {
  components: {
    Header,
    Hero
  }
}
</script>