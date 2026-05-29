<script lang="ts">
  import { onMount } from "svelte";
  import { PawPrint, List, X, ArrowUpRight } from "phosphor-svelte";
  import { socialLinks } from "$lib/constants";

  let mobileOpen = $state(false);
  let scrolled = $state(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
  ];

  function handleScroll() {
    scrolled = window.scrollY > 24;
  }

  onMount(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header class="fixed top-0 left-0 z-50 w-full">
  <nav
    class="flex items-center justify-between px-4 py-3 lg:px-10 transition-all duration-300 {scrolled
      ? 'bg-paper/85 backdrop-blur-md border-b-[2.5px] border-ink'
      : 'bg-transparent border-b-[2.5px] border-transparent'}"
  >
    <!-- LOGO -->
    <a href="/" class="group flex items-center gap-2.5">
      <span
        class="grid place-items-center w-10 h-10 rounded-full bg-gold border-[2.5px] border-ink shadow-[3px_3px_0_var(--color-ink)] transition-transform duration-200 group-hover:-rotate-12"
      >
        <PawPrint weight="fill" class="text-xl text-ink" />
      </span>
      <span class="nav-logo">Kagay-an Furs</span>
    </a>

    <!-- DESKTOP LINKS -->
    <div class="hidden lg:flex items-center gap-7">
      {#each links as link (link.label)}
        <a href={link.href} class="navigation-link">{link.label}</a>
      {/each}
      <a href={socialLinks.discord} target="_blank" class="btn btn-coral py-2.5 px-5">
        Join the pack
        <ArrowUpRight weight="bold" />
      </a>
    </div>

    <!-- MOBILE HAMBURGER -->
    <button
      type="button"
      aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={mobileOpen}
      onclick={() => (mobileOpen = !mobileOpen)}
      class="lg:hidden grid place-items-center w-11 h-11 rounded-full bg-paper-2 border-[2.5px] border-ink shadow-[3px_3px_0_var(--color-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition"
    >
      {#if mobileOpen}
        <X weight="bold" class="text-xl text-ink" />
      {:else}
        <List weight="bold" class="text-xl text-ink" />
      {/if}
    </button>
  </nav>

  <!-- MOBILE DRAWER -->
  <div
    class="lg:hidden overflow-hidden bg-paper border-b-[2.5px] border-ink transition-[max-height,opacity] duration-300 ease-out {mobileOpen
      ? 'max-h-96 opacity-100'
      : 'max-h-0 opacity-0'}"
  >
    <div class="flex flex-col gap-1 px-5 py-4">
      {#each links as link (link.label)}
        <a
          href={link.href}
          onclick={() => (mobileOpen = false)}
          class="flex items-center justify-between py-3 border-b border-line font-display text-2xl font-bold tracking-tight text-ink"
        >
          {link.label}
          <PawPrint weight="fill" class="text-base text-gold-deep" />
        </a>
      {/each}
      <a href={socialLinks.discord} target="_blank" class="btn btn-coral mt-3">
        Join the pack <ArrowUpRight weight="bold" />
      </a>
    </div>
  </div>
</header>
