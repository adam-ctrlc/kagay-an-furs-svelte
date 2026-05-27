<template>
  <section class="px-4 md:px-12 py-3" id="events">
    <div class="my-10">
      <h4 class="text-2xl">Events</h4>
    </div>
    <div>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-6 md:space-y-0 gap-2 items-center place-content-center"
      >
        <div v-for="event in events">
          <EventCard
            :image="event.image"
            :title="event.title"
            :description="event.description"
            :date="event.date"
            :isUpcoming="new Date(event.date) > new Date()"
          />
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
            "First of the 2 filler meetups of Kagay-an FurMeet (KFM) 2026.",
          image: event4,
          date: "May 30, 2026",
        },
        {
          title: "Kagay-an FurMeet (KFM) 2026",
          description: "The first furry meetup in CDO history!",
          image: event1,
          date: "Jan 25, 2026",
        },
        {
          title: "Kagay-an FurMeet 0",
          description: "Dry run in preparation for Kagay-an FurMeet 2026.",
          image: event3,
          date: "Nov 23, 2025",
        },
        {
          title: "Meet and Greet with Duke Horde",
          description:
            "Special Meet & Greet with Duke Horde, a somewhat famous VR fur.",

          image: event2,
          date: "Dec 30 2025",
        },
      ],
    };
  },
};
</script>
