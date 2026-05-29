<script lang="ts">
  import { PawPrint } from "phosphor-svelte";
  import TeamCard from "$lib/components/TeamCard.svelte";
  import { reveal } from "$lib/actions/reveal";
  import jynPfp from "$lib/assets/members/jyn.jpg";
  import cerbPfp from "$lib/assets/members/cerb.jpg";
  import anakinPfp from "$lib/assets/members/anakin.jpg";
  import dukePfp from "$lib/assets/members/duke.jpg";
  import hiroPfp from "$lib/assets/members/hiro.jpg";

  type Member = {
    name: string;
    role: string;
    fursona?: string;
    bio?: string;
    pfp?: string;
  };

  const members: Member[] = [
    {
      name: "Cerb",
      role: "Founder",
      fursona: "Reynard Ashvites",
      bio: "They see my howlin' they hatin'",
      pfp: cerbPfp,
    },
    {
      name: "Jyn",
      role: "Web Developer",
      bio: "Not a furry, just a developer.",
      pfp: jynPfp,
    },
    { name: "Anakin PH", role: "Adviser", pfp: anakinPfp },
    { name: "Cos de Al", role: "Illustrator" },
    { name: "Duke Horde", role: "Honarary Guest, Adviser", pfp: dukePfp },
    { name: "FusionThe Fox", role: "Editor, Adviser" },
    {
      name: "Hiro Inagaki",
      role: "Medical Volunteer, Security, Illustrator",
      pfp: hiroPfp,
    },
    { name: "Horkey Sama", role: "Ambasaddor, Security" },
    { name: "Jhappa Logramonte", role: "Medical Volunteer" },
  ];

  const tilts = ["-1.5deg", "1.5deg", "-1deg", "2deg", "1deg", "-2deg"];
</script>

<section class="mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-12 md:pt-36">
  <div use:reveal class="text-center">
    <span class="section-label justify-center">The crew</span>
    <h1 class="mt-4">Meet the <span class="display-italic">team</span></h1>
    <p class="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
      The volunteers, advisers and good boys keeping the pack together.
    </p>
  </div>

  <div use:reveal class="furry-divider my-12">
    <span class="divider-line"></span>
    <div class="divider-paws">
      {#each Array(5) as _, i (i)}
        <PawPrint weight="fill" class="text-2xl sm:text-3xl" />
      {/each}
    </div>
    <span class="divider-line"></span>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each members as member, i (member.name)}
      <div use:reveal style="--reveal-delay: {(i % 3) * 0.08}s">
        <TeamCard
          name={member.name}
          role={member.role}
          fursona={member.fursona}
          bio={member.bio}
          pfp={member.pfp}
          tilt={tilts[i % tilts.length]}
        />
      </div>
    {/each}
  </div>
</section>
