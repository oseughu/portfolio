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
  <meta
    property="og:image"
    content="https://res.cloudinary.com/drze4mafd/image/upload/v1637477675/Ose/Ose_jhc4fd.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  <meta property="og:url" content="https://oseughu.com" />
  <meta name="author" content="Osemudiamhen Ughu" />
  <meta name="twitter:card" content="summary" />
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
