<script>
    import { fade } from 'svelte/transition'

    let services = [
        {
            name: 'Fassadengestaltung',
            text: 'Eine fachmännisch ausgeführte Fassadenrenovierung sorgt nicht nur optisch für einen echten „Hingucker“, sondern schützt vor allem auch die bestehenden Untergründe.',
            image: '/assets/images/services/fassade.webp',
            icon: '/assets/icons/004-interior-design.svg',
            current: false
        },
        {
            name: 'Wohnraumgestaltung',
            text: 'Ein positiv gestalteter Raum, mit aufeinander abgestimmten Farben und Elementen strahlt spürbar Lebenslust, Wohlbefinden und Energie aus.',
            image: '/assets/images/services/wohnraum.webp',
            icon: '/assets/icons/005-interior-design-1.svg',
            current: false
        },
        {
            name: 'Kreative Wandideen',
            text: 'Lassen Sie uns auch Ihren Wohnraum durch unsere kreativen Techniken in ein auf Sie abgestimmtes Herzstück verzaubern. Durch Metalliceffekte, Spachteltechniken und viele mehr, sind uns kaum Grenzen gesetzt.',
            image: '/assets/images/services/wandidee.webp',
            icon: '/assets/icons/006-tiles.svg',
            current: false
        },
        {
            name: 'Putzarbeiten',
            text: 'Sie wollen Ihr Heim mit Strukturputz verschönern? Wir bieten klassische, aber auch moderne Dekorputze für Innen und Außen.',
            image: '/assets/images/services/putzarbeiten.webp',
            icon: '/assets/icons/007-plastering.svg',
            current: false
        },
        {
            name: 'Lackierarbeiten',
            text: 'Egal ob Fenster, Türen, Zargen oder Decken, wir kümmern uns um Ihre neue Lackierung.',
            image: '/assets/images/services/lackieren.webp',
            icon: '/assets/icons/008-painted.svg',
            current: false
        }
    ]

    function setCurrent(service){
        services.forEach((item) => item.current = item.name === service)
        services = services
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
</script>


<div class="flex-column">
    <div class="sm:inline-block grid bg-transparent m-8 sm:p-8 p-0">
        
        {#each services as item}
        <button
            class={classNames(
            item.current ? 'bg-kurz-green text-white': 'text-kurz-green bg-transparent',
            'inline-flex border border-solid border-kruz-green hover:bg-kurz-green hover:text-white font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150')
            } type="button" on:click={() => setCurrent(item.name)}>
            <img src={item.icon} class={classNames( item.current ? 'invertwhite' : '', "h-auto w-6 mr-3 invertcolor")}/>
            {item.name}
        </button>
        {/each}
    </div>
    {#each services as item}
        <figure class={classNames(
            item.current ? 'flex-column md:flex': 'hidden',
            'bg-white rounded-xl m-8 shadow-md rounded-md overflow-hidden')
        }>
            <img class="w-full h-32 md:w-64 md:h-auto object-cover" src={item.image} alt={item.name} width="384" height="512">
            <div class="pt-6 p-8 text-center md:text-left space-y-4">
                <figcaption class="font-bold uppercase">
                    <div class="text-kurz-green">
                        {item.name}
                    </div>
                </figcaption>
                <blockquote>
                    <p class="text-md font-medium">
                        “{item.text}”
                    </p>
                </blockquote>
            </div>
        </figure>
    {/each}
</div>

<style>
    .invertcolor{
        filter: invert(37%) sepia(74%) saturate(358%) hue-rotate(62deg) brightness(99%) contrast(88%);
    }

    button:hover .invertcolor, .invertwhite {
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(200deg) brightness(115%) contrast(103%);
    }
</style>