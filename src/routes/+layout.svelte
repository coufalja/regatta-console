<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppShell, AppBar, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
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
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/cluster" selected={$page.url.pathname === '/cluster'}>
				<svelte:fragment slot="lead">Cluster</svelte:fragment>
			</AppRailAnchor>
			<AppRailAnchor href="/query" selected={$page.url.pathname === '/query'}>
				<svelte:fragment slot="lead">Query</svelte:fragment>
			</AppRailAnchor>
			<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
				<svelte:fragment slot="lead">Settings</svelte:fragment>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="h-full p-4 md:p10">
		<slot />
	</div>
</AppShell>
