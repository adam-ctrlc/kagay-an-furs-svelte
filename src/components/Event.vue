<template>
  <section class="px-12 py-3">
    <div class="my-10">
      <h4 class="text-2xl">Events</h4>
    </div>
    <div>
      <div class="flex gap-12">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  </section>
</template>

<script>
import EventCard from "./EventCard.vue";
export default {
  components: {
    EventCard,
  },
};
</script>
