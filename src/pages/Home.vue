<template>
  <Hero></Hero>
  <Event></Event>

  <section
    class="border border-border-base bg-primary/10 mt-12 flex items-center justify-center"
  >
    <img :src="kfmImage" />
  </section>

  <section id="about" class="px-12 py-3 bg-[#f7f7f7]">
    <div class="my-10">
      <h4 class="text-2xl">About</h4>
    </div>

    <div class="flex flex-col items-center justify-center">
      <!-- <div class="w-full">
        <img src="https://placehold.co/400" alt="" class="" />
      </div> -->
      <div class="self-start">
        <div class="about-heading w-100">
          <h1 class="text-4xl">Kagay-an Furs</h1>
        </div>
        <!-- 
        <div class="w-full">
          <img src="https://placehold.co/300" alt="" class="" />
        </div> -->
      </div>

      <div class="md:max-w-4xl space-y-8">
        <p class="text-md">
          Deserunt officia in occaecat incididunt dolore cupidatat. Cillum
          adipisicing elit aliqua tempor pariatur. Irure quis commodo in nisi
          tempor in eu ullamco et veniam duis. Laboris quis labore eiusmod minim
          eu et incididunt duis eiusmod pariatur proident esse ullamco.
          Excepteur cupidatat cillum est incididunt. Veniam duis ullamco enim
          enim exercitation incididunt.
        </p>
        <div class="flex gap-12 items-center justify-center">
          <div class="relative">
            <h4 class="text-4xl text-primary">67</h4>
            <p
              class="text-text-main text-sm absolute -top-5 -left-5 font-extralight"
            >
              Members
            </p>
          </div>

          <div
            class="h-[60px] border-[0.5px] border-gray-500/10 rounded-lg w-0"
          ></div>

          <div class="relative">
            <h4 class="text-4xl text-primary">5</h4>
            <p
              class="text-text-main text-sm absolute -top-5 -left-5 font-extralight"
            >
              Events
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 md:px-12 py-3 bg-white mb-12">
    <div class="my-10">
      <h4 class="text-2xl">Join Us</h4>
    </div>

    <div>
      <div class="flex flex-col gap-4 items-center justify-center">
        <button
          class="text-lg w-xs md:w-lg flex items-center justify-center gap-4"
        >
          Discord
          <AkDiscordFill />
        </button>
        <button
          class="text-lg w-xs md:w-lg flex items-center justify-center gap-4"
        >
          Facebook
          <AkFacebookFill />
        </button>
        <button
          class="text-lg w-xs md:w-lg flex items-center justify-center gap-2"
        >
          Visit us on furries.ph!
          <FlColorAnimalPawPrint class="rotate-45" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Event from "../components/Event.vue";
import kfmImage from "../assets/kfm.jpg";
import {
  AkDiscordFill,
  AkFacebookFill,
  FlColorAnimalPawPrint,
} from "@kalimahapps/vue-icons";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Hero,
    Event,
    AkDiscordFill,
    AkFacebookFill,
    FlColorAnimalPawPrint,
    Footer,
  },
  data() {
    return {
      kfmImage,
    };
  },
};
</script>
