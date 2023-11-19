<script>
	/** @type {import('./$types').PageData} */
	import { onMount, onDestroy } from 'svelte';
	import { stations, stationIDs, tags } from '../stores.js'
	import { PUBLIC_API_ENDPOINT } from '$env/static/public'

	const API_ENDPOINT = PUBLIC_API_ENDPOINT;

	// Poll for updates every 2 seconds 
	const ticker = setInterval(async () => {
		const fetchOptions = { mode: 'cors' };

		try {
			const response = await fetch(`${API_ENDPOINT}/stations`, fetchOptions);
				if (response.ok) {
					const data = await response.json();
					stations.set(data);
				} 
		} catch (error) {
			console.error(`Failed to fetch data for stations: ${error.message}`);
		}
	}, 2 * 1000);

	onDestroy(() => {
		clearInterval(ticker) ; 
	});	
</script>


<div class="grid grid grid-rows-[auto_1fr_auto] h-full">
	<header class="px-4 py-2 mb-6 border-b-2 bg-white">
		<h1 class="text-3xl font-bold">RFID Dashboard</h1>
	</header>
	
	<main class="flex justify-center items-start gap-8 px-8">
		{#each Object.values($stations).sort((a, b) => a.station_uuid.localeCompare(b.station_uuid)) as station }			
			<div class="flex-initial w-70 border border-indigo-600 rounded px-2 py-4 bg-white">
				<h2 class="text-2xl font-bold">Station: {station.name}</h2>
				<p class="text-sm">{station.station_uuid}</p>
		
				<h3 class="text-xl font-bold mt-4 mb-2">Tags</h3>
	
				<ul>
					{#each Object.entries(station.tags) as [uuid, tag]}
						<li class="mb-2 border border-slate-200	rounded p-2">
							<p class="font-bold">{uuid}</p>
							<p><span>⌚</span> {new Date(tag.last_seen * 1000).toLocaleString()}</p>
							<p><span>👁️</span> {tag.previously_seen}</p>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</main>
	
	<footer class="px-4 py-2 mt-4 bg-white border-t-2">
		<div>
			<p class="font-bold">Known Tags</p>
			<ul class="flex gap-4">
				{#each $tags.sort((a, b) => a.tag_uuid.localeCompare(b.tag_uuid)) as tag}
					<li class="border border-slate-200 rounded px-2">{tag.tag_uuid}</li>
				{/each}
			</ul>
		</div>
	</footer>
</div>


<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.50);
		color: theme(colors.gray.950);
		box-sizing: border-box; 
	}
</style>