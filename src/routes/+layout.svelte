<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { ArrowUp } from "phosphor-svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();

  let scrolled = $state(false);

  function handleScroll() {
    scrolled = window.scrollY > 400;
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:head>
  <title>Kagay-an Furs (KFM) · Cagayan de Oro's Furry Meetup Community</title>
  <meta
    name="description"
    content="The first and only furry meetup community in Cagayan de Oro. Events, meetups and the friendliest pack in CDO."
  />
</svelte:head>

<div class="grain"></div>

<Header />

<main>
  {@render children()}
</main>

<!-- back to top -->
<button
  type="button"
  aria-label="Back to top"
  onclick={backToTop}
  class="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-gold text-ink shadow-[4px_4px_0_var(--color-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_6px_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_var(--color-ink)] {scrolled
    ? 'translate-y-0 opacity-100'
    : 'pointer-events-none translate-y-4 opacity-0'}"
>
  <ArrowUp weight="bold" class="text-lg" />
</button>

<Footer />
