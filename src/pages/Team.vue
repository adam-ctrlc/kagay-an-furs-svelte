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

  <main class="mb-12">
    <section id="about" class="px-12 py-3">
      <div class="my-5">
        <h3 class="text-3xl tracking-wide font-extralight">Meet the team!</h3>
      </div>

      <div
        class="grid sm:grid-cols-2 md:grid-cols-4 space-y-10 place-content-center w-full"
      >
        <TeamCard
          name="Cerb"
          role="Founder"
          fursona="Reynard Ashvites"
          bio="They see my howlin' they hatin'"
          :pfp="cerbPfp"
        ></TeamCard>
        <TeamCard
          name="Jyn"
          role="Web Developer"
          bio="Not a furry, just a developer."
          :pfp="jynPfp"
        ></TeamCard>
        <TeamCard name="Anakin PH" role="Adviser"></TeamCard>
        <TeamCard name="Cos de Al" role="Illustrator"></TeamCard>
        <TeamCard name="Duke Horde" role="Honarary Guest, Adviser"></TeamCard>
        <TeamCard name="FusionThe Fox" role="Editor, Adviser"></TeamCard>
        <TeamCard
          name="Hiro Inagaki"
          role="Medical Volunteer, Security, Illustrator"
        ></TeamCard>
        <TeamCard name="Horkey Sama" role="Ambasaddor, Security"></TeamCard>
        <TeamCard name="Jhappa Logramonte" role="Medical Volunteer"></TeamCard>
      </div>
    </section>
  </main>
</template>
<script>
import { FlColorAnimalPawPrint } from "@kalimahapps/vue-icons";
import TeamCard from "../components/TeamCard.vue";
import jynPfp from "../assets/members/jyn.jpg";
import cerbPfp from "../assets/members/cerb.jpg";

export default {
  components: {
    TeamCard,
    FlColorAnimalPawPrint,
  },

  data() {
    return {
      jynPfp,
      cerbPfp,
    };
  },
};
</script>
