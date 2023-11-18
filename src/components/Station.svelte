<div class="flex-initial w-64 border border-indigo-600 rounded px-2 py-4">
	<h2 class="text-2xl font-bold">Station: {station.uuid}</h2>

	<h3 class="text-xl font-bold">
		Tags
	</h3>

	<ul>
		{#each Object.entries(station.tags) as [uuid, tag]}
			<li class="mb-4">
				<p><span>UUID</span>: {uuid}</p>
				<p>Last scanned at {new Date(tag.last_seen * 1000).toLocaleString()}</p>
			</li>
		{/each}
	</ul>
</div>