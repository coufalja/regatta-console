<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h3 class="h3">ClusterNodes</h3>
<div class="container grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each data.status ?? [] as node}
		<div class="card">
			<header class="card-header">
				<div class="text-xs opacity-50">Node: {node.name}</div>
			</header>
			<section class="p-4">
				<p class="text-xs">Id: {node.id}</p>
				<p class="text-xs">Peer: {node.peerURLs}</p>
				<p class="text-xs">ClientURL: {node.clientURLs}</p>
			</section>
			<footer class="card-footer">
				<p class="text-xs">Version: {node.status.version}</p>
			</footer>
		</div>
	{/each}
</div>
