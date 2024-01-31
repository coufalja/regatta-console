<script lang="ts">
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { Tab, TabGroup, Table } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { type Writable, writable } from 'svelte/store';

	export let data: PageData;

	const tabSet: Writable<number> = writable(0);
	const tableSource: TableSource = {
		head: ['Name', 'Value'],
		body: Object.entries(data.config)
			.map(([k, v]) => [k, `<code class="code">${JSON.stringify(v)}</code>`])
			.sort(([a], [b]) => a.localeCompare(b)),
		foot: ['Total', `<code class="code">${Object.entries(data.config).length}</code>`]
	};
</script>

<div class="flex py-10 p-4 mx-auto flex-col h-full">
	<TabGroup justify="justify-center" class="bg-surface-100-800-token w-full">
		<Tab bind:group={$tabSet} name="nodes" value={0}>
			<span>Nodes</span>
		</Tab>
		<Tab bind:group={$tabSet} name="config" value={1}>
			<span>Config</span>
		</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if $tabSet === 0}
				<div class="flex justify-evenly py-10 p-4 mx-auto h-full gap-4">
					{#each data.members ?? [] as member}
						<div class="card p-6 space-y-6 shadow-xl">
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
			{:else if $tabSet === 1}
				<Table source={tableSource}></Table>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
