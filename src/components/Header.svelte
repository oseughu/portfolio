<script>
  import { fly } from 'svelte/transition'
</script>

<nav
  transition:fly={{ y: 200, duration: 2000 }}
  class="pb-50 border-t-4 border-indigo-800 shadow bg-gray-50">
  <div class="container px-6 py-4 mx-auto">
    <div class="flex items-center justify-between">
      <div>
        <a class="flex items-center text-gray-800 hover:text-indigo-600" href="/">
          <svg class="w-6 h-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>

          <span class="mx-3 text-sm font-bold md:text-base font-sans">Ose Ughu</span>
        </a>
      </div>

      <div class="flex items-center -mx-2">
        <a
          class="email flex items-center mx-2 text-gray-800"
          href="mailto:oseughu@gmail.com"
          target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/37/37572.png" alt="email-icon" />
        </a>

        <a
          class="flex items-center mx-2 text-gray-800"
          href="https://twitter.com/oseughu"
          target="_blank">
          <svg
            class="w-5 h-5 fill-current sm:h-6 sm:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
          </svg>
        </a>

        <a
          class="flex items-center mx-2 text-gray-800"
          href="https://github.com/oseughu"
          target="_blank">
          <svg
            class="w-5 h-5 fill-current sm:h-6 sm:w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
          </svg>
        </a>
        <a
          class="icon flex items-center mx-2 text-gray-800"
          href="https://linkedin.com/in/oseughu"
          target="_blank"
          ><img
            src="https://cdn.iconscout.com/icon/free/png-256/linkedin-32-114604.png"
            alt="linkedin-logo" />
        </a>
        <a
          class="icon flex items-center mx-2 text-gray-800"
          href="https://oseughu.medium.com"
          target="_blank">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/medium-4054255-3352997.png"
            alt="medium-icon" />
        </a>
      </div>
    </div>
  </div>
</nav>

<style>
  .icon {
    width: 25px;
    height: 25px;
  }

  .email {
    width: 22px;
    height: 22px;
  }
</style>
