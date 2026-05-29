<script lang="ts">
  import { PawPrint, DiscordLogo, ArrowDown } from "phosphor-svelte";
  import { socialLinks } from "$lib/constants";
  import { reveal } from "$lib/actions/reveal";
  import bg from "$lib/assets/bg.jpg";
</script>

<section class="relative isolate flex min-h-[92vh] items-center overflow-hidden">
  <!-- background photo -->
  <img
    src={bg}
    alt=""
    aria-hidden="true"
    class="absolute inset-0 -z-20 h-full w-full object-cover"
  />
  <!-- warm overlay -->
  <div
    class="absolute inset-0 -z-10"
    style="background:
      linear-gradient(180deg, rgba(34,26,13,0.55) 0%, rgba(34,26,13,0.35) 40%, rgba(34,26,13,0.78) 100%),
      radial-gradient(70% 60% at 15% 20%, rgba(244,180,0,0.45), transparent 60%);"
  ></div>

  <!-- floating paw stickers -->
  <PawPrint
    weight="fill"
    class="pointer-events-none absolute left-[6%] top-[24%] hidden text-5xl text-gold/80 rotate-[18deg] md:block"
  />
  <PawPrint
    weight="fill"
    class="pointer-events-none absolute right-[10%] top-[18%] hidden text-4xl text-coral/80 -rotate-12 lg:block"
  />
  <PawPrint
    weight="fill"
    class="pointer-events-none absolute right-[18%] bottom-[16%] hidden text-6xl text-paper/30 rotate-[8deg] md:block"
  />

  <div class="relative mx-auto w-full max-w-6xl px-5 md:px-12">
    <div use:reveal style="--reveal-delay: 0.05s" class="mb-6">
      <span class="pill bg-paper-2/95 backdrop-blur">
        <PawPrint weight="fill" class="text-gold-deep" />
        Cagayan de Oro · Est. 2025
      </span>
    </div>

    <h1
      use:reveal
      style="--reveal-delay: 0.12s"
      class="max-w-4xl text-paper drop-shadow-[0_4px_0_rgba(34,26,13,0.35)] text-6xl sm:text-7xl md:text-8xl"
    >
      Kagay-an<br />Furs<span class="text-gold">.</span>
    </h1>

    <p
      use:reveal
      style="--reveal-delay: 0.2s"
      class="mt-6 max-w-xl text-lg md:text-2xl font-medium text-paper/90"
    >
      The first &amp; only furry meetup community in
      <span class="display-italic text-gold">Cagayan de Oro</span>. Paws up,
      tails out, all welcome.
    </p>

    <div
      use:reveal
      style="--reveal-delay: 0.3s"
      class="mt-9 flex flex-wrap items-center gap-4"
    >
      <a href={socialLinks.discord} target="_blank" class="btn text-lg">
        Hop in our Discord
        <DiscordLogo weight="fill" />
      </a>
      <a
        href={socialLinks.furriesph}
        target="_blank"
        class="btn text-lg"
        style="background: var(--color-paper-2);"
      >
        Keep up with us
        <PawPrint weight="fill" />
      </a>
    </div>
  </div>

  <!-- scroll cue -->
  <a
    href="#events"
    aria-label="Scroll to events"
    class="absolute bottom-7 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border-[2.5px] border-paper/70 text-paper/80 animate-bounce"
  >
    <ArrowDown weight="bold" />
  </a>
</section>
