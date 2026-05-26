<template>
  <div id="home" class="hero relative">
    <!-- contents -->
    <div
      class="space-y-4 md:space-y-0 text-white flex items-start justify-center px-4 md:px-12 h-full flex-col"
    >
      <h1 class="font-bold">Kagay-an Furs</h1>
      <p class="text-md md:text-lg">
        The first and only Furry Meetup Community in
        <span class="font-semibold text-primary">Cagayan de Oro</span>
      </p>
      <div class="mt-4">
        <a :href="socialLinks.furriesph" target="_blank">
          <button class="flex items-center gap-2 justify-between">
            Keep up with us!
            <FlColorAnimalPawPrint
              class="text-2xl hover:scale-110 hover:rotate-45 duration-200"
            />
          </button>
        </a>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-10 bg-surface-base blur-2xl"
    ></div>
  </div>
</template>
<script>
import { FlColorAnimalPawPrint } from "@kalimahapps/vue-icons";
import { socialLinks } from "../constants";

export default {
  components: {
    FlColorAnimalPawPrint,
  },

  data() {
    return {
      socialLinks,
    };
  },
};
</script>
