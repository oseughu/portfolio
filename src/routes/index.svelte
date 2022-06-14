<script>
  import Intro from '$components/Intro.svelte'
  import Projects from '$components/Projects.svelte'
  import { fly } from 'svelte/transition'
</script>

<svelte:head>
  <title>Osemudiamhen Ughu</title>
  <meta name="description" content="Osemudiamhen Ughu, a bad-ass dev." />
  <meta
    name="keywords"
    content="osemudiamhen, ughu, svelte, website developer, portfolio, personal, personal website, personal portfolio"
  />
  <link
    rel="image_src"
    href="https://res.cloudinary.com/drze4mafd/image/upload/v1637477675/Ose/Ose_jhc4fd.jpg"
  />
  <meta name="author" content="Osemudiamhen Ughu" />
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
