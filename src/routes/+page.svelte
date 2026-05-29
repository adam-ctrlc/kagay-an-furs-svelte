<script lang="ts">
  import { DiscordLogo, FacebookLogo, PawPrint, ArrowUpRight } from "phosphor-svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Event from "$lib/components/Event.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import { reveal } from "$lib/actions/reveal";
  import kfmImage from "$lib/assets/kfm.jpg";
  import { socialLinks } from "$lib/constants";

  const marqueeItems = [
    "Kagay-an FurMeet 2026",
    "Paws up, tails out",
    "Cagayan de Oro",
    "All fursonas welcome",
    "K · F · M",
  ];

  const stats = [
    { value: "67", label: "Members" },
    { value: "5", label: "Events" },
    { value: "1st", label: "in CDO" },
  ];
</script>

<Hero />

<Marquee items={marqueeItems} />

<Event />

<!-- ABOUT -->
<section
  id="about"
  class="scroll-mt-24 border-y-[2.5px] border-ink bg-sand"
>
  <div
    class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-12"
  >
    <div use:reveal class="relative">
      <div class="card overflow-hidden rotate-[-2.5deg]">
        <img src={kfmImage} alt="Kagay-an Furs gathering" class="w-full" />
      </div>
      <span
        class="absolute -bottom-4 -right-3 hidden rotate-6 rounded-full border-[2.5px] border-ink bg-coral px-4 py-2 font-display text-lg font-bold text-paper shadow-[3px_3px_0_var(--color-ink)] sm:block"
      >
        the pack 🐾
      </span>
    </div>

    <div use:reveal style="--reveal-delay: 0.1s">
      <span class="section-label">02 · Who we are</span>
      <h2 class="about-heading mt-4 text-5xl md:text-6xl">Kagay-an Furs</h2>
      <p class="mt-6 text-lg leading-relaxed text-ink-soft">
        Kagay-an Furs is the first and only furry community in Cagayan de Oro,
        born from a handful of locals who just wanted a place to be themselves.
        What started as a small group chat has grown into real meetups, the
        city's first FurMeet, and a den where artists, suiters, gamers and
        fur-curious folks all feel at home. No experience and no fursona
        required, only good vibes and respect for one another.
      </p>

      <div class="mt-9 flex flex-wrap gap-4">
        {#each stats as stat (stat.label)}
          <div class="stat-tile">
            <div class="font-display text-4xl font-black text-gold-deep">
              {stat.value}
            </div>
            <div class="mt-1 text-xs font-bold uppercase tracking-widest text-ink-soft">
              {stat.label}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- JOIN -->
<section class="relative overflow-hidden bg-gold">
  <PawPrint
    weight="fill"
    class="pointer-events-none absolute -left-6 top-8 text-8xl text-ink/10 rotate-12"
  />
  <PawPrint
    weight="fill"
    class="pointer-events-none absolute -right-4 bottom-6 text-8xl text-ink/10 -rotate-12"
  />

  <div use:reveal class="mx-auto max-w-3xl px-5 py-20 text-center md:px-12">
    <span class="section-label justify-center">03 · Join the pack</span>
    <h2 class="mt-4 text-5xl text-ink md:text-7xl">
      Come run with <span class="display-italic">us</span>.
    </h2>
    <p class="mx-auto mt-5 max-w-xl text-lg text-ink/80">
      Whether you've got a fursona or you're just fur-curious, there's a spot
      for you in the den.
    </p>

    <div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a href={socialLinks.discord} target="_blank" class="btn btn-ink w-full sm:w-auto">
        Discord <DiscordLogo weight="fill" />
      </a>
      <a href={socialLinks.facebook} target="_blank" class="btn w-full bg-paper-2 sm:w-auto">
        Facebook <FacebookLogo weight="fill" />
      </a>
      <a href={socialLinks.furriesph} target="_blank" class="btn btn-coral w-full sm:w-auto">
        furries.ph <ArrowUpRight weight="bold" />
      </a>
    </div>
  </div>
</section>
