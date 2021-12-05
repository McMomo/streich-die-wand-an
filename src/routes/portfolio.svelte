<script context="module">
	export const prerender = true
	import { fade } from 'svelte/transition'

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

</script>

<svelte:head>
	<title>Qualität steckt im Detail</title>
</svelte:head>

<section>
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Qualität steckt im Detail</h2>
    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
		{#each portfolio as image}
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:opacity-75">
          <img src={image.src} alt={image.title} class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
	  	{/each}
    </div>
  </div>
</section>
