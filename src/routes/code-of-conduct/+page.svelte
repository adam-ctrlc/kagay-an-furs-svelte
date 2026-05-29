<script lang="ts">
  import {
    Handshake,
    ShieldCheck,
    Heart,
    Prohibit,
    UsersThree,
    Flag,
    DiscordLogo,
    PawPrint,
  } from "phosphor-svelte";
  import { reveal } from "$lib/actions/reveal";
  import { socialLinks } from "$lib/constants";

  const principles = [
    {
      Icon: Handshake,
      title: "Respect everyone",
      body: "Treat every fur, guest and volunteer with kindness. No gatekeeping, no put-downs. We're all here for the same reason.",
    },
    {
      Icon: Heart,
      title: "Consent first",
      body: "Always ask before hugs, photos, or touching anyone's suit or tail. \"No\" is a full sentence and is always respected.",
    },
    {
      Icon: Prohibit,
      title: "Zero harassment",
      body: "Bullying, slurs, unwanted advances, or any form of discrimination have no place at KFM. Full stop.",
    },
    {
      Icon: UsersThree,
      title: "Keep it all-ages",
      body: "Our meets are public, family-friendly spaces. Keep conversation, art and behaviour appropriate for everyone present.",
    },
    {
      Icon: ShieldCheck,
      title: "Stay safe",
      body: "Follow venue rules and staff instructions. Don't attend under the influence, and look out for one another.",
    },
    {
      Icon: Flag,
      title: "Speak up",
      body: "See something off? Tell a staff member or message the mods on Discord. Reports are handled discreetly.",
    },
  ];
</script>

<svelte:head>
  <title>Code of Conduct · Kagay-an Furs (KFM)</title>
</svelte:head>

<section class="mx-auto max-w-5xl px-5 pb-12 pt-32 md:px-12 md:pt-36">
  <div use:reveal class="text-center">
    <span class="section-label justify-center">Community</span>
    <h1 class="mt-4">Code of <span class="display-italic">Conduct</span></h1>
    <p class="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
      Kagay-an Furs is built on one simple idea: everyone deserves a safe,
      welcoming place to be themselves. By joining our meets and channels, you
      agree to keep the den friendly for all.
    </p>
  </div>
</section>

<section class="mx-auto max-w-6xl px-5 pb-20 md:px-12">
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each principles as p, i (p.title)}
      <article
        use:reveal
        style="--reveal-delay: {(i % 3) * 0.08}s"
        class="card flex h-full flex-col gap-3 p-6"
      >
        <span
          class="grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-gold shadow-[3px_3px_0_var(--color-ink)]"
        >
          <p.Icon weight="bold" class="text-2xl text-ink" />
        </span>
        <h3 class="text-2xl text-ink">{p.title}</h3>
        <p class="text-sm leading-relaxed text-ink-soft">{p.body}</p>
      </article>
    {/each}
  </div>
</section>

<!-- enforcement / reporting -->
<section class="border-y-[2.5px] border-ink bg-sand">
  <div use:reveal class="mx-auto max-w-3xl px-5 py-16 text-center md:px-12">
    <PawPrint weight="fill" class="mx-auto text-4xl text-gold-deep" />
    <h2 class="mt-4 text-4xl md:text-5xl">Breaking the rules?</h2>
    <p class="mx-auto mt-4 max-w-xl text-ink-soft">
      Staff may issue a warning, ask you to leave a meet, or remove you from our
      channels, whatever it takes to keep the pack safe. If you need to report
      something, reach the mods anytime.
    </p>
    <div class="mt-8 flex justify-center">
      <a href={socialLinks.discord} target="_blank" class="btn btn-ink">
        Message the mods <DiscordLogo weight="fill" />
      </a>
    </div>
  </div>
</section>
