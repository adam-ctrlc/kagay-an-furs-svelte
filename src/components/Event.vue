<template>
  <section class="px-4 md:px-12 py-3" id="events">
    <div class="my-10">
      <h4 class="text-2xl">Events</h4>
    </div>
    <div>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center place-content-center"
      >
        <div v-for="event in events">
          <EventCard :image="event.image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EventCard from "./EventCard.vue";
import event1 from "../assets/events/event1.png";
import event2 from "../assets/events/event2.jpg";
import event3 from "../assets/events/event3.jpg";
import event4 from "../assets/events/event4.jpg";
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
          image: event4,
        },
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",
          image: event3,
        },
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",

          image: event2,
        },
        {
          title: "Keep up with the furs!",
          description:
            "Occaecat elit sunt consectetur do adipisicing est occaecat nisi in laboris.",
          image: event1,
        },
      ],
    };
  },
};
</script>
