<template>
  <header class="fixed top-0 z-50 bg-white/80 backdrop-blur-md">
    <!-- NAVBAR -->
    <nav
      class="flex w-screen justify-between items-center border-b border-gray-200 p-4 lg:px-10"
    >
      <!-- LOGO -->
      <div
        class="flex items-center gap-4 hover:text-primary duration-70 ease-in"
      >
        <h1 href="#" class="nav-logo">Kagay-an Furs</h1>
        <FlColorAnimalPawPrint class="text-xl sm:text-4xl rotate-45" />
      </div>

      <!-- DESKTOP LINKS -->
      <div class="hidden lg:flex gap-1 space-x-8">
        <a href="/" class="navigation-link">Home</a>
        <!-- <a href="#about" class="navigation-link">About</a> -->
        <a href="#" class="navigation-link">Archive</a>
        <a href="/team" class="navigation-link">Team</a>
        <a href="#" class="navigation-link">Code of Conduct</a>
      </div>

      <!-- MOBILE HAMBURGER -->
      <div class="navbar-end gap-2">
        <div class="dropdown dropdown-end lg:hidden">
          <label tabindex="0" @click="mobileNavHandler" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </nav>
    <ul
      tabindex="0"
      ref="mobileNav"
      class="top-0 h-0 w-full overflow-hidden bg-white transtion-all duration-200 ease-in-out shadow-lg border border-gray-200 font-semibold text-gray-600"
    >
      <div class="flex flex-col pt-4">
        <a href="/" class="navigation-link">Home</a>
        <!-- <a href="#about" class="navigation-link">About</a> -->
        <a href="#" class="navigation-link">Archive</a>
        <a href="/team" class="navigation-link">Team</a>
        <a href="#" class="navigation-link">Code of Conduct</a>
      </div>
    </ul>
  </header>
</template>

<script>
import { FlColorAnimalPawPrint } from "@kalimahapps/vue-icons";
export default {
  components: {
    FlColorAnimalPawPrint,
  },

  methods: {
    mobileNavHandler() {
      this.$refs.mobileNav.classList.toggle("h-0");
      this.$refs.mobileNav.classList.toggle("h-52");
      this.$refs.mobileNav.classList.toggle("px-12");
    },
  },
};
</script>

<style>
/* * {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
} */

/* a {
  font-size: 1em;
} */
</style>
