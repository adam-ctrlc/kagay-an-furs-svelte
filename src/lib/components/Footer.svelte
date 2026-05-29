<script lang="ts">
  import {
    PawPrint,
    FacebookLogo,
    DiscordLogo,
    GithubLogo,
    ArrowUpRight,
  } from "phosphor-svelte";
  import { socialLinks } from "$lib/constants";

  const year = new Date().getFullYear();

  const socials = [
    { label: "Facebook", href: socialLinks.facebook, Icon: FacebookLogo },
    { label: "Discord", href: socialLinks.discord, Icon: DiscordLogo },
    { label: "GitHub", href: socialLinks.github, Icon: GithubLogo },
    { label: "furries.ph", href: socialLinks.furriesph, Icon: PawPrint },
  ];
</script>

<footer class="relative mt-24 bg-ink text-paper">
  <div class="mx-auto max-w-6xl px-5 py-16 md:px-12">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <!-- brand -->
      <div>
        <div class="flex items-center gap-3">
          <span
            class="grid h-11 w-11 place-items-center rounded-full border-[2.5px] border-paper bg-gold"
          >
            <PawPrint weight="fill" class="text-2xl text-ink" />
          </span>
          <span class="font-display text-3xl font-black tracking-tight">
            Kagay-an Furs
          </span>
        </div>
        <p class="mt-5 max-w-sm text-paper/70">
          The first &amp; only furry meetup community in Cagayan de Oro.
          Paws up, tails out, everyone's welcome.
        </p>
      </div>

      <!-- quick links -->
      <div class="flex flex-col gap-3">
        <p class="eyebrow text-gold">Explore</p>
        <a href="/" class="footer-link">Home</a>
        <a href="/#events" class="footer-link">Events</a>
        <a href="/#about" class="footer-link">About</a>
        <a href="/team" class="footer-link">Team</a>
        <a href="/code-of-conduct" class="footer-link">Code of Conduct</a>
      </div>

      <!-- socials -->
      <div class="flex flex-col gap-3">
        <p class="eyebrow text-gold">Find us</p>
        {#each socials as s (s.label)}
          <a
            href={s.href}
            target="_blank"
            class="footer-link group inline-flex items-center gap-2"
          >
            <s.Icon weight="fill" class="text-lg" />
            {s.label}
            <ArrowUpRight
              weight="bold"
              class="text-sm opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>
        {/each}
      </div>
    </div>

    <div
      class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/20 pt-6 sm:flex-row"
    >
      <p class="text-sm text-paper/60">
        © {year} Kagay-an Furs · KFM. All rights reserved.
      </p>
      <div class="flex items-center gap-1.5 text-gold">
        <PawPrint weight="fill" />
        <PawPrint weight="fill" />
        <PawPrint weight="fill" />
      </div>
    </div>
  </div>
</footer>

<style>
  .footer-link {
    color: color-mix(in srgb, var(--color-paper) 78%, transparent);
    font-weight: 500;
    width: fit-content;
    transition: color 0.15s ease;
  }
  .footer-link:hover {
    color: var(--color-gold);
  }
</style>
