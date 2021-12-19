<script context="module">
	import { fade } from 'svelte/transition'

	export const prerender = true

	const team = [
		{ 
			name: 'David Kurz',
			position: 'Malermeister und Betriebsinhaber!',
			image: '/assets/images/team/david.webp',
			text: 'Bereits bei meinem Einstieg, in meine Ausbildung zum Maler und Lackierer, habe ich mich in meinen Job regelrecht verliebt. Die Möglichkeiten, die uns geboten werden, mit Farbe, Putz & kreativen Gestaltungstechniken aus einem üblichen Wohnraum ein wahres Herzstück zu zaubern und den verschiedenen Charakteren anzupassen, sind für mich bis heute faszinierend und immer wieder mit Freude anzusehen. Im Juli 2020 habe ich nach reiflicher Überlegung und gründlicher Vorbereitung den Schritt in die Selbständigkeit gewagt. Selbst & ständig mein Handwerk nach meinen eigenen Vorstellungen zu vertreten, gibt mir unglaublich viel Motivation, um auch Ihr Projekt perfekt zu betreuen und abzuwickeln. Ich habe mir vorgenommen unseren Kunden zu zeigen, wie man mit Kreativität unser Handwerk umsetzt. Mein Ziel ist es, unter anderem, jungen Menschen wieder die Vielfalt unseres Handwerks nahe zu bringen. Dieser Beruf ist mehr als nur eine Alternative. Wir sind Maler und Lackierer! Aus Überzeugung und Leidenschaft!'
		},
		{ 
			name: 'Jürgen Seemüller',
			position: 'Maler und Lackierer mit Leib & Seele!',
			image: '/assets/images/team/juergen.webp',
			text: 'Jürgen, der seit 36 Jahren mit Leib & Seele Maler und Lackierer ist, hat mich bestärkt und motiviert den Schritt in die Selbständigkeit zu tun. Aufgrund seines umfangreichen Wissens und jahrelanger Erfahrung hat er einen ausgezeichneten Ruf bei Bauträger und Privatkunden, die seine Arbeit äußerst schätzen. Durch seine jahrelange Erfahrung, unvergleichbare Motivation und detailverliebte Arbeitsweise passt er nicht nur optimal zu uns, sondern gibt uns das gewisse Etwas.'
		},
		{ 
			name: 'Marvin Seemüller',
			position: 'Maler und Lackierer, unser Frischling in 3. Generation.',
			image: '/assets/images/team/marvin.webp',
			text: 'Marvin ist der zweite Seemüller in unseren Reihen. Er war bereits in jungen Jahren Feuer & Flamme für diesen Beruf und tritt somit in die Fußstapfen von seinem Großvater und seinem Vater. Durch sein Engagement und seine Teamfähigkeit hat er sich bereits jetzt zu einer wichtigen Stütze in unserem kleinen Betrieb entwickelt. '
		}
	]

	const partner = [
		{
			name: '',
			url: ''
		},
	]
</script>

<svelte:head>
	<title>Das sind wir!</title>
</svelte:head>

<section class="bg-kurz-white" transition:fade>
	<div class="flex flex-wrap justify-center m-8">
  		<div class="md:flex w-full shadow-md rounded-md overflow-hidden">
    		<img src="/assets/images/team/team.webp" alt="Das Malermeister Kurz Team" class="rounded w-full max-h-80 align-middle border-none m-0 object-cover" />
  		</div>
	</div>
	{#each team as member}
		<figure class="md:flex bg-white m-8 p-8 md:p-0 shadow-md rounded-md overflow-hidden">
		  <img class="w-32 h-32 md:w-64 md:h-auto md:rounded-none md:object-cover object-cover rounded-full mx-auto" src={member.image} alt={"Mitarbeiter " + member.name} width="384" height="512">
		  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
		    <blockquote>
		    	{#if member.text.length > 500}
					<p class="text-sm font-semibold">
						“{member.text}”
					</p>
		      	{:else if member.text.length > 350}
		      		<p class="text-md font-semibold">
			        	“{member.text}”
			      	</p>
		    	{:else}
			      <p class="text-lg font-semibold">
			        “{member.text}”
			      </p>
		      	{/if}
		    </blockquote>
		    <figcaption class="font-medium">
		      <div class="text-cyan-600">
		        {member.name}
		      </div>
		      <div class="text-gray-500">
		        {member.position}
		      </div>
		    </figcaption>
		  </div>
		</figure>
	{/each}
</section>