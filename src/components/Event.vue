<template>
  <section class="px-12 py-3">
    <div class="my-10">
      <h4 class="text-2xl">Events</h4>
    </div>
    <div>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center place-content-center"
      >
        <EventCard />
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
