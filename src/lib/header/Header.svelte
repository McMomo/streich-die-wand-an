<script>
	import { page } from '$app/stores';
  import { goto } from '$app/navigation'
  import { fade } from 'svelte/transition'

  import { onMount } from 'svelte';

  let navigation = [
    { name: 'Start', href: '/', current: false },
    { name: 'Nachhaltigkeit', href: '/sustainable', current: false },
    { name: 'Portfolio', href: '/portfolio', current: false },
    { name: 'Team', href: '/team', current: false },
    { name: 'Kontakt', href: '/kontakt', current: false },
  ]

  let open = false

  onMount(async () => {
    console.log($page.path)
    const path = navigation.find(entry => entry.href === $page.path)
	if (path) {
		setActive(path)
	}
  })

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function setActive(routeName){
    navigation.forEach((item) => item.current = item.name === routeName)
    navigation = navigation
  }

  function navigateTo(route){
    goto(route.href)
    setActive(route.name)
    console.log(route)
    open = false
  }
</script>

<header>
	<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-kurz-white">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-kurz-green hover:text-white hover:bg-kurz-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" on:click={() => open = !open}>
          <span class="sr-only">Open main menu</span>
          {#if open}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>

          {:else}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">

        	<img src="/assets/icons/malermeister-kurz-logo.svg" class="block h-12 w-auto" alt="Malermeister Kurz Logo: Ein Blatt mit einem Pinsel in der Mitte."/>

        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 h-full items-center justify-center">
            {#each navigation as item}
               <a
                key={item.name}
                on:click={() => navigateTo(item)}
                class={classNames(
                  item.current ? 'bg-kurz-green text-white' : 'text-gray-700 hover:bg-kurz-green hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if open}
    <div class="sm:hidden z-10 bg-kurz-white absolute w-full flex items-center justify-center" id="mobile-menu" transition:fade>
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navigation as item}
         <a
          key={item.name}
          on:click={() => navigateTo(item)}
          class={classNames(
            item.current ? 'bg-kurz-green text-white' : 'text-gray-700 hover:bg-kurz-green hover:text-white',
            'block px-3 py-2 rounded-md text-center font-medium cursor-default'
          )}
          aria-current={item.current ? 'page' : undefined}
          >
              {item.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
</header>
