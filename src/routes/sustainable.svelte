<script context="module">
	import { fade } from 'svelte/transition'

	let elements = [
        {
            title: 'Unsere Farben',
            text: 'Bei der Auswahl unserer Farben achten wir darauf, dass wir nach Möglichkeit mineralische Produkte verwenden. Das heißt, bei der Herstellung dieser Farben werden natürliche Bindemittel verwendet, was die Langlebigkeit dieser unterstreicht.Sollten Alternativen verlangt werden setzten wir größtenteils auf emissionsminimierte, weichmacher-und lösemittelfreie Produkte, die aus nachwachsenden Rohstoffen hergestellt werden.',
            image: '/assets/images/sustainability/farben-480w.webp'
        },
		{
			title: 'Reinigung unsere Arbeitsmittel',
			text: 'Pinsel, Walzen und andere Streichwerkzeuge werden in unserer eigenen Spaltanlage gereinigt. Diese trennt Wasser und Feststoffe – für eine umweltschonende Abwasser-Aufbereitung.',
			image: '/assets/images/sustainability/spaltanlage-480w.webp'
		},
		{
			title: 'Die Pinsel',
			text: 'Wir legen großen Wertauf die Herkunft unserer Lieblinge – den Pinseln. Sie bestehen zum Großteil aus nachwachsenden Rohstoffen und werden ausschließlich von ausgewählten Firmen bezogen. Allgemein gehenwir verantwortungsbewusst, gewissenhaft und schonend, jedoch in einem realisierbaren Maße, mit den uns zur Verfügung stehenden begrenzten Ressourcen um -für die Zukunft',
			image: '/assets/images/sustainability/pinsel-480w.webp'
		},
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
</script>

<svelte:head>
	<title>Nachhaltigkeit</title>
</svelte:head>


<section class="w-full my-12">
    {#each elements as element, i}
        <div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto p-4">
            <div class={classNames(i%2 === 0 ? 'md:col-start-1 md:col-end-8': 'md:col-start-6 md:col-end-13', 'col-span-12 md:col-span-auto md:row-start-1 md:row-end-1')}>
                <picture class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg" style="padding-top: 75%;">
                    <img class="absolute inset-0 w-full h-full object-cover" src={element.image} alt={element.title}>
                </picture>
            </div>
            <div class={classNames(i%2 === 0 ? 'md:col-start-6 md:col-end-13': 'md:col-start-1 md:col-end-8', 'col-span-12 md:col-span-auto md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0')}>
                <div class="p-4 md:p-8 bg-white shadow-lg rounded-md">
                        <h2 class="text-lg font-semibold leading-tight text-gray-800">{element.title}</h2>
                        <p class="leading-normal pt-2">{element.text}</p>
                </div>
            </div>
        </div>
    {/each}

<!--     <div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto p-4">
        <div class="col-span-12 md:col-span-auto md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-1 bg-red-500">
            <a class="" href="#" title="Image Link">
                <picture class="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg" style="padding-top: 75%;">
                    <img class="absolute inset-0 w-full h-full object-cover" src="/assets/images/sustainability/pinsel-480w.webp" alt="A random image from Unsplash">
                </picture>
            </a>
        </div>
        <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
            <div class="p-4 md:p-8 bg-white shadow-lg">
                    <h2 class="text-lg font-semibold leading-tight text-gray-800">Überschrift</h2>
                    <p class="leading-normal pt-2">oidha sdoas hdi oas dhiasi dasod ishadou asdioashdio asodassd pasd asdsd f sdf sdf sdf sd f sdf f dsfdsf df sdf</p>
            </div>
        </div>
    </div>
 -->

<!--     <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div class="bg-white w-full shadow-md rounded-xl rounded-md p-8" transition:fade>
            <h1 class="md:text-3xl text-2xl font-bold uppercase text-kurz-green">Wir investieren in eine saubere Zukunft!</h1>
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
    </div> -->
</section>
