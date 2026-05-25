<template>
  <!-- NAVBAR -->
  <div class="flex justify-between items-center  bg-white border-b border-gray-200 p-4 lg:px-10">

    <!-- LOGO -->
    <div class="flex items-center gap-4 hover:text-primary duration-70 ease-in">
      <h1 href="#" class="nav-logo">
        Kagay-an Furs
      </h1>
      <FlColorAnimalPawPrint class="text-4xl rotate-45" />
    </div>

    <!-- DESKTOP LINKS -->
    <div class="hidden lg:flex gap-1 space-x-8">
      <a href="#" class="navigation-link">Home</a>
      <a href="#" class=" navigation-link">About</a>
      <a href="#" class=" navigation-link">Archive</a>
      <a href="#" class=" navigation-link">Code
        of
        Conduct</a>
    </div>

    <!-- ATTEND BUTTON + MOBILE HAMBURGER -->
    <!-- <div class="navbar-end gap-2">

      <a href="#" class="btn btn-neutral btn-lg hidden sm:inline-flex font-bold px-5">
        🎟️ Attend KFM!
      </a>

      <div class="dropdown dropdown-end lg:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabindex="0"
          class="dropdown-content menu bg-white rounded-box z-50 mt-2 w-52 p-2 shadow-lg border border-gray-200 font-semibold text-gray-600">
          <li><a href="#" class="hover:text-black hover:bg-gray-100">🏠 Home</a></li>
          <li><a href="#" class="hover:text-black hover:bg-gray-100">🐾 About</a></li>
          <li><a href="#" class="hover:text-black hover:bg-gray-100">📁 Archive</a></li>
          <li><a href="#" class="hover:text-black hover:bg-gray-100">📜 Code of Conduct</a></li>
          <div class="divider my-1"></div>
          <li><a href="#" class="btn btn-neutral btn-lg rounded-full font-bold justify-center">Attend KFM!</a></li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
import { FlColorAnimalPawPrint } from '@kalimahapps/vue-icons';
export default {
  components: {
    FlColorAnimalPawPrint,
  }
}

</script>

<style>
/* * {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
} */

/* a {
  font-size: 1em;
} */
</style>