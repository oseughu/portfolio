<script>
  import Intro from '$components/Intro.svelte'
  import Projects from '$components/Projects.svelte'
  import { fly } from 'svelte/transition'
</script>

<svelte:head>
  <title>Osemudiamhen Ughu</title>
  <meta property="title" content="Osemudiamhen Ughu" />
  <meta name="description" content="the best dev you'll ever meet." />
  <meta property="og:description" content="the best dev you'll ever meet." />
  <meta property="og:site_name" content="Ose Ughu" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/drze4mafd/image/upload/v1655275915/Ose/ose_meta_wgpg27.png"
  />
  <meta property="og:url" content="https://oseughu.com" />
  <meta property="og:title" content="Osemudiamhen Ughu" />

  <meta property="twitter:title" content="Osemudiamhen Ughu" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content="the best dev you'll ever meet." />
  <meta
    property="twitter:image"
    content="https://res.cloudinary.com/drze4mafd/image/upload/v1655275915/Ose/ose_meta_wgpg27.png"
  />
  <meta property="twitter:creator" content="@oseughu" />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<main
  transition:fly={{ y: 200, duration: 2000 }}
  class="flex items-center justify-center font-sans bg-gray-200"
>
  <div>
    <Intro />
    <Projects />
  </div>
</main>
