<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h3 class="h3">ClusterNodes</h3>
<div class="container grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each data.members ?? [] as member}
		<div class="card">
			<header class="card-header">
				<div class="text-xs opacity-50">Node: {member.name}</div>
			</header>
			<section class="p-4">
				<p class="text-xs">Id: {member.id}</p>
				<p class="text-xs">Peer: {member.peerURLs}</p>
				<p class="text-xs">ClientURL: {member.clientURLs}</p>
			</section>
			<footer class="card-footer">
				<p class="text-xs">Version: {data.statuses.get(member.id).version}</p>
			</footer>
		</div>
	{/each}
</div>
