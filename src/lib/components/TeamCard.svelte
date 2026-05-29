<script lang="ts">
  import { PawPrint } from "phosphor-svelte";

  let {
    name,
    role = "",
    fursona,
    bio,
    pfp,
    tilt = "0deg",
  }: {
    name?: string;
    role?: string;
    fursona?: string;
    bio?: string;
    pfp?: string;
    tilt?: string;
  } = $props();

  // role -> text colour (border + text share currentColor via .role-tag)
  function roleClass(raw: string): string {
    const r = raw.trim();
    if (r === "Founder") return "text-gold-deep";
    if (r === "Web Developer") return "text-sky-600";
    if (r === "Adviser") return "text-purple-600";
    if (r === "Illustrator") return "text-emerald-600";
    if (r === "Security") return "text-coral";
    if (r === "Medical Volunteer") return "text-pink-600";
    if (r === "Honarary Guest") return "text-teal";
    if (r === "Editor") return "text-amber-600";
    if (r === "Ambasaddor") return "text-lime-600";
    return "text-ink-soft";
  }

  const initials = $derived(
    (name ?? "")
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase(),
  );
</script>

<article
  class="card group flex h-full flex-col overflow-hidden transition-[rotate] duration-200 hover:rotate-0"
  style="rotate: {tilt};"
>
  <div class="relative h-64 border-b-[2.5px] border-ink">
    {#if pfp}
      <img src={pfp} alt={name} class="h-full w-full object-cover" />
    {:else}
      <div
        class="grid h-full w-full place-items-center bg-gradient-to-br from-gold to-amber"
      >
        <div class="flex flex-col items-center gap-1 text-ink">
          <PawPrint weight="fill" class="text-5xl" />
          <span class="font-display text-3xl font-black">{initials}</span>
        </div>
      </div>
    {/if}
  </div>

  <div class="flex flex-1 flex-col gap-2.5 p-5">
    <h3 class="text-2xl text-ink">{name || "John Doe"}</h3>

    <div class="flex flex-wrap gap-1.5">
      {#each role.split(",") as r (r)}
        <span class="role-tag {roleClass(r)}">{r.trim() || "Member"}</span>
      {/each}
    </div>

    {#if fursona}
      <span class="text-sm font-semibold text-ink-soft">
        Fursona · <span class="text-ink">{fursona}</span>
      </span>
    {/if}

    {#if bio}
      <p class="mt-1 flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
        <PawPrint
          weight="fill"
          class="mt-0.5 shrink-0 text-gold-deep transition-transform duration-150 group-hover:scale-125"
        />
        <span>{bio}</span>
      </p>
    {/if}
  </div>
</article>
