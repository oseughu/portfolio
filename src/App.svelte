<script>
  // @ts-nocheck
  import Footer from '$components/Footer.svelte'
  import Header from '$components/Header.svelte'
  import Intro from '$components/Intro.svelte'
  import Projects from '$components/Projects.svelte'
  import { fly } from 'svelte/transition'
</script>

<Header />
<main
  transition:fly={{ y: 200, duration: 2000 }}
  class="flex items-center justify-center font-sans bg-gray-200"
>
  <div>
    <Intro />
    <Projects />
  </div>
</main>
<Footer />
