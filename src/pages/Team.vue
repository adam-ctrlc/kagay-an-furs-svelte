<template>
  <div class="furry-divider">
    <span class="divider-line"></span>
    <div class="divider-paws">
      <FlColorAnimalPawPrint class="text-xl sm:text-4xl" />
      <FlColorAnimalPawPrint class="text-xl sm:text-4xl" />
      <FlColorAnimalPawPrint class="text-xl sm:text-4xl" />
      <FlColorAnimalPawPrint class="text-xl sm:text-4xl" />
      <FlColorAnimalPawPrint class="text-xl sm:text-4xl" />
      <FlColorAnimalPawPrint class="text-xl sm:text-4xl" />
    </div>
    <span class="divider-line"></span>
  </div>

  <main class="">
    <section id="about" class="px-12 py-3">
      <div class="my-5">
        <h3 class="text-3xl tracking-wide font-extralight">Meet the team!</h3>
      </div>

      <div class="grid grid-cols-4">
        <TeamCard
          name="Cerb"
          role="Founder"
          fursona="Reynard Ashvites"
          bio="They see my howlin' they hatin'"
        ></TeamCard>
        <TeamCard
          name="Jyn"
          role="Web Developer"
          bio="Not a furry, just a developer."
        ></TeamCard>
        <TeamCard></TeamCard>
      </div>
    </section>
  </main>
</template>
<script>
import { FlColorAnimalPawPrint } from "@kalimahapps/vue-icons";
import TeamCard from "../components/TeamCard.vue";
export default {
  components: {
    TeamCard,
    FlColorAnimalPawPrint,
  },
};
</script>
