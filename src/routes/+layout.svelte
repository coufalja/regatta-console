<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppBar, AppRail, AppRailAnchor, AppShell, Avatar } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import IconCluster from 'virtual:icons/carbon/edge-cluster';
	import IconQuery from 'virtual:icons/carbon/query';
	import IconSettings from 'virtual:icons/carbon/settings';
</script>

{#if $page.data.session}
	<!-- App Shell -->
	<AppShell scrollbarGutter="auto">
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="lead">
					<strong class="text-xl uppercase">Regatta console</strong>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://github.com/jamf/regatta"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					{#if $page.data.session.user}
						<Avatar
							src={$page.data.session.user.image || ''}
							initials={$page.data.session.user.name || ''}
							cursor="cursor-pointer"
							width="w-10"
							href="/settings"
							on:click={() => goto('/auth')}
						></Avatar>
					{/if}
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<AppRail>
				<AppRailAnchor href="/cluster" selected={$page.url.pathname === '/cluster'}>
					<svelte:fragment slot="lead"><IconCluster></IconCluster></svelte:fragment>
					<span>Cluster</span>
				</AppRailAnchor>
				<AppRailAnchor href="/query" selected={$page.url.pathname === '/query'}>
					<svelte:fragment slot="lead"><IconQuery></IconQuery></svelte:fragment>
					<span>Query</span>
				</AppRailAnchor>
				<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
					<svelte:fragment slot="lead"><IconSettings></IconSettings></svelte:fragment>
					<span>Settings</span>
				</AppRailAnchor>
			</AppRail>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
{:else}
	<slot />
{/if}
