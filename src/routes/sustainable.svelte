<script context="module">
	import { fade } from 'svelte/transition'

	let elements = [
        {
            title: 'Unsere Farben',
            text: 'Bei der Auswahl unserer Farben achten wir darauf, dass wir nach Möglichkeit mineralische Produkte verwenden. Das heißt, bei der Herstellung dieser Farben werden natürliche Bindemittel verwendet, was die Langlebigkeit dieser unterstreicht.Sollten Alternativen verlangt werden setzten wir größtenteils auf emissionsminimierte, weichmacher-und lösemittelfreie Produkte, die aus nachwachsenden Rohstoffen hergestellt werden.',
            image: '/assets/images/sustainable/colors.webp'
        },
		{
			title: 'Reinigung unsere Arbeitsmittel',
			text: 'Pinsel, Walzen und andere Streichwerkzeuge werden in unserer eigenen Spaltanlage gereinigt. Diese trennt Wasser und Feststoffe – für eine umweltschonende Abwasser-Aufbereitung.',
			image: '/assets/images/sustainable/cleaner.webp'
		},
		{
			title: 'Die Pinsel',
			text: 'Wir legen großen Wertauf die Herkunft unserer Lieblinge – den Pinseln. Sie bestehen zum Großteil aus nachwachsenden Rohstoffen und werden ausschließlich von ausgewählten Firmen bezogen. Allgemein gehenwir verantwortungsbewusst, gewissenhaft und schonend, jedoch in einem realisierbaren Maße, mit den uns zur Verfügung stehenden begrenzten Ressourcen um -für die Zukunft',
			image: '/assets/images/sustainable/brush.webp'
		},
    ]
</script>

<svelte:head>
	<title>Nachhaltigkeit</title>
</svelte:head>

<section class="w-full my-12">
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div class="bg-white w-full shadow-md rounded-xl rounded-md p-8" transition:fade>
            <h1 class="md:text-3xl text-2xl font-bold text-gray-800">Wir investieren in eine saubere Zukunft!</h1>
            <div class="grid grid-cols-1 gap-8 mt-6">
				{#each elements as element}
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-6/12 rounded overflow-hidden">
                        <img class="object w-full h-auto" src={element.image} alt={element.title}>
                    </div>
                    <div class="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                        <h2 class="text-lg font-semibold leading-tight text-gray-800">{element.title}</h2>
                        <p class="leading-normal pt-2">{element.text}</p>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
