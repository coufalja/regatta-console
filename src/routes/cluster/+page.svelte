<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h2>Regatta cluster</h2>
<div class="container grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each data.status ?? [] as node}
		<div class="card">
			<header class="card-header">Node: {node.name}</header>
			<section class="p-4">
				<p>Id: {node.id}</p>
				<p>Peer: {node.peerURLs}</p>
				<p>ClientURL: {node.clientURLs}</p>
			</section>
			<footer class="card-footer">Version: {node.status.version}</footer>
		</div>
	{/each}
</div>
