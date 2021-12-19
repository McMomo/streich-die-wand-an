<script>
	export const prerender = true
	import { fade } from 'svelte/transition'

	let current = 0
	let isOpen = false

	const portfolio = [
		{
			title: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
			src: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
		},
		{
			title: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
			src: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
		},
		{
			title: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
			src: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
		},
		{
			title: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
			src: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
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
          <img on:click={(e) => toggleModal(e, i)} src={image.src} alt={image.title} class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
	  	{/each}
    </div>
  </div>

  {#if isOpen}
  <div id="modal" class={"grid fixed w-screen h-screen top-0 py-20 px-5 place-items-center"} transition:fade>
    <img src={portfolio[current].src} class="max-h-full max-w-full z-10 object-center object-cover rounded-md shadow-md">
    <div on:click={toggleModal} class="absolute w-screen h-screen bg-kurz-gray opacity-90" id="modalBg"/>
	</div>
	{/if}
</section>
