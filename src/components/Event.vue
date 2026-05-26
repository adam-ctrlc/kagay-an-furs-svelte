<template>
  <section class="px-12 py-3" id="events">
    <div class="my-10">
      <h4 class="text-2xl">Events</h4>
    </div>
    <div>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center place-content-center"
      >
        <div v-for="event in events">
          <EventCard />
        </div>
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

  data() {
    return {
      events: [
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",
        },
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",
        },
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",
        },
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",
        },
      ],
    };
  },
};
</script>
