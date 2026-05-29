<script lang="ts">
  import { Sparkle, CalendarBlank } from "phosphor-svelte";

  let {
    image,
    title,
    description,
    date,
    isUpcoming = false,
    tilt = "0deg",
  }: {
    image?: string;
    title?: string;
    description?: string;
    date?: string;
    isUpcoming?: boolean;
    tilt?: string;
  } = $props();
</script>

<article
  class="card group flex h-full flex-col overflow-hidden transition-[rotate] duration-200 hover:rotate-0"
  style="rotate: {tilt};"
>
  <div class="relative">
    <img
      src={image || "https://placehold.co/300x200"}
      alt={title ?? ""}
      class="h-44 w-full border-b-[2.5px] border-ink object-cover"
    />

    {#if isUpcoming}
      <span class="badge-up absolute -top-3 right-3">
        <Sparkle weight="fill" /> Upcoming
      </span>
    {/if}

    <span
      class="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper-2 px-2.5 py-1 text-xs font-bold shadow-[2px_2px_0_var(--color-ink)]"
    >
      <CalendarBlank weight="bold" class="text-gold-deep" />
      {date}
    </span>
  </div>

  <div class="flex flex-1 flex-col gap-2 p-5">
    <h3 class="text-2xl text-ink">{title}</h3>
    <p class="text-sm leading-relaxed text-ink-soft line-clamp-3">
      {description}
    </p>
  </div>
</article>
