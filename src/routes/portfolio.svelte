<script>
	export const prerender = true
	import { fade } from 'svelte/transition'

	let current = 0
	let isOpen = false
	const PATH = '/assets/images/portfolio/'

	const portfolio = [
		{
			title: 'betonoptik_und_restaurierter_holzbalken',
			src: '/assets/images/portfolio/betonoptik_und_restaurierter_holzbalken-800w.webp',
			filename: 'betonoptik_und_restaurierter_holzbalken'
		},
		{
			title: 'Fassade',
			src: '/assets/images/portfolio/fassade-800w.webp',
			filename: 'fassade'
		},
		{
			title: 'metallic Effekt kupfer ',
			src: '/assets/images/portfolio/metallic-effekt_-_kupfer_(2)-800w.webp',
			filename: 'metallic-effekt_-_kupfer_(2)'
		},
		{
			title: 'wischtechnik mit beistrich',
			src: '/assets/images/portfolio/wischtechnik_mit_beistrich-800w.webp',
			filename: 'wischtechnik_mit_beistrich'
		},
	]

	function toggleModal(e, i){
		current = i ?? 0
		isOpen = !isOpen
	}
</script>

<svelte:head>
	<title>Qualität steckt im Detail</title>
</svelte:head>

<section>
  <div class="max-w-2xl mx-auto py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Qualität steckt im Detail</h2>
    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
		{#each portfolio as image, i}
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:opacity-75">
          <img 
	          class="w-full h-full object-center object-cover group-hover:opacity-75"
	          on:click={(e) => toggleModal(e, i)} 
	          src={image.src} 
	          alt={image.title} 
						srcset={`${PATH + image.filename}-1080w.webp 1080w,
							${PATH + image.filename}-800w.webp 800w,
							${PATH + image.filename}-480w.webp 480w`} 
					>


Read more: https://html.com/attributes/img-srcset/#ixzz7FWzw737N

        </div>
	  	{/each}
    </div>
  </div>

  {#if isOpen}
  <div id="modal" class={"grid fixed w-screen h-screen top-0 py-20 px-5 place-items-center"} transition:fade>
    <img src={portfolio[current].src} alt={"Abbildung von: " + portfolio[current].title} class="max-h-full max-w-full z-10 object-center object-cover rounded-md shadow-md">
    <div on:click={toggleModal} class="absolute w-screen h-screen bg-kurz-gray opacity-90" id="modalBg"/>
	</div>
	{/if}
</section>
