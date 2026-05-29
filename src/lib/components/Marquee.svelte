<script lang="ts">
  import { PawPrint } from "phosphor-svelte";

  let { items = [] }: { items?: string[] } = $props();
</script>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    {#each [0, 1] as group (group)}
      <div class="marquee__item">
        {#each items as item (item)}
          <span>{item}</span>
          <PawPrint weight="fill" class="shrink-0 text-base text-coral" />
        {/each}
      </div>
    {/each}
  </div>
</div>
