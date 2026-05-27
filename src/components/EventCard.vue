<template>
  <div class="card bg-surface-card rounded-md overflow-hidden w-[250px]">
    <div class="flex flex-col border border-border-base h-full">
      <img
        :src="image || 'https://placehold.co/300x120'"
        alt=""
        class="w-full h-50 object-cover"
      />

      <div class="flex flex-col px-4 py-3">
        <h2 class="text-md md:text-lg font-semibold">{{ title }}</h2>
        <p class="text-sm line-clamp-2">
          {{ description }}
        </p>
        <small class="text-text-muted">{{ date }}</small>

        <!-- <button class="w-fit self-end">
          <BsArrowReturnRight />
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { BsArrowReturnRight } from "@kalimahapps/vue-icons";

export default {
  props: ["image", "title", "description", "date"],
  components: {
    BsArrowReturnRight,
  },
};
</script>
