<script lang="ts">
  import EventCard from "$lib/components/EventCard.svelte";
  import { reveal } from "$lib/actions/reveal";
  import event1 from "$lib/assets/events/event1.png";
  import event2 from "$lib/assets/events/event2.jpg";
  import event3 from "$lib/assets/events/event3.jpg";
  import event4 from "$lib/assets/events/event4.jpg";

  const events = [
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
  ];

  const tilts = ["-1.5deg", "1.5deg", "-1deg", "2deg"];
  const now = new Date();
</script>

<section id="events" class="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-12">
  <div use:reveal class="mb-10 flex flex-wrap items-end justify-between gap-4">
    <div>
      <span class="section-label">01 · What's on</span>
      <h2 class="mt-3 text-5xl md:text-6xl">Events &amp; meetups</h2>
    </div>
    <p class="max-w-sm text-ink-soft md:text-right">
      From dry runs to the main event, here's where the pack gathers.
    </p>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {#each events as event, i (event.title)}
      <div use:reveal style="--reveal-delay: {i * 0.08}s">
        <EventCard
          image={event.image}
          title={event.title}
          description={event.description}
          date={event.date}
          isUpcoming={new Date(event.date) > now}
          tilt={tilts[i % tilts.length]}
        />
      </div>
    {/each}
  </div>
</section>
