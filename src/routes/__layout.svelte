<script>
  import Footer from '$components/Footer.svelte'
  import Nav from '$components/Nav.svelte'
  import '$src/app.css'
  import { onMount } from 'svelte'

  let ready = false
  onMount(() => (ready = true))
</script>

{#if ready}
  <Nav />
  <slot />
  <Footer />
{/if}
