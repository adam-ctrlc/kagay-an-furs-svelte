<template>
  <div class="card bg-surface-card rounded-md overflow-hidden w-[250px]">
    <div class="flex flex-col border border-border-base h-full">
      <img :src="pfp" :alt="name" class="w-full h-80 object-cover" />

      <div class="flex flex-col px-4 py-3">
        <h2 class="text-md md:text-lg font-semibold">
          {{ name || "John Doe" }}
        </h2>
        <span
          v-for="r in role.split(',')"
          :class="[
            `font-light `,
            { 'text-primary font-semibold': r == 'Founder' },
            { 'text-blue-600/60  font-light': r == 'Web Developer' },
            { 'text-purple-600/60 font-light': r.trim() == 'Adviser' },
            { 'text-green-600/60 font-light': r.trim() == 'Illustrator' },
            { 'text-red-600/60 font-light': r.trim() == 'Security' },
            { 'text-pink-600/60 font-light': r.trim() == 'Medical Volunteer' },
            { 'text-cyan-600/60 font-light': r.trim() == 'Honarary Guest' },
            { 'text-amber-600/60 font-light': r.trim() == 'Editor' },
            { 'text-lime-600/60 font-light': r.trim() == 'Ambasaddor' },
          ]"
          >{{ r || "Member" }}</span
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
  props: ["name", "role", "fursona", "bio", "pfp"],
  components: {
    BsArrowReturnRight,
    FlColorAnimalPawPrint,
  },

  data() {
    return {};
  },
};
</script>
