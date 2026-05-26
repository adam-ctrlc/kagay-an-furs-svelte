<template>
  <div class="card bg-surface-card rounded-md overflow-hidden w-[250px]">
    <div class="flex flex-col border border-border-base h-full">
      <img
        src="https://placehold.co/300x200"
        alt=""
        class="w-full h-80 object-cover"
      />

      <div class="flex flex-col px-4 py-3">
        <h2 class="text-md md:text-lg font-semibold">
          {{ name || "John Doe" }}
        </h2>
        <span
          :class="[
            'font-light ',
            { 'text-primary font-semibold': role == 'Founder' },
            { 'text-blue-600/60  font-light': role == 'Web Developer' },
          ]"
          >{{ role || "Member" }}</span
        >
        <span v-if="fursona" class="text-sm text-text-main/60"
          >Fursona: {{ fursona }}</span
        >
        <span
          v-if="bio"
          class="text-sm text-text-main/60 flex gap-2 items-center"
        >
          <FlColorAnimalPawPrint class="text-sm hover:scale-120 duration-75" />
          {{ bio }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  BsArrowReturnRight,
  FlColorAnimalPawPrint,
} from "@kalimahapps/vue-icons";

export default {
  props: ["name", "role", "fursona", "bio"],
  components: {
    BsArrowReturnRight,
    FlColorAnimalPawPrint,
  },
};
</script>
