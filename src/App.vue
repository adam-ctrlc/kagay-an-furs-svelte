<template>
  <Header></Header>
  <RouterView></RouterView>

  <!-- back to top button -->
  <button
    ref="backToTopRef"
    @click="backToTop"
    class="back-to-top fixed bottom-6 right-10 rounded-full opacity-0 transition-opacity duration-300"
  >
    <BsArrow90DegUp class="text-lg font-extrabold" />
  </button>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { BsArrow90DegUp } from "@kalimahapps/vue-icons";

export default {
  components: {
    Header,
    Footer,
    BsArrow90DegUp,
  },

  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        this.$refs.backToTopRef.classList.add("opacity-100");
      } else {
        this.$refs.backToTopRef.classList.remove("opacity-100");
      }
    });
  },

  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  data() {
    return {};
  },
};
</script>
