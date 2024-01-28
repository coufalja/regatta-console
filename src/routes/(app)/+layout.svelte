<script>
	import '../../app.postcss';
	import 'highlight.js/styles/github-dark-dimmed.css';

	import { page } from '$app/stores';
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		AppShell,
		Avatar,
		storeHighlightJs
	} from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import IconCluster from 'virtual:icons/carbon/edge-cluster';
	import IconQuery from 'virtual:icons/carbon/query';
	import IconSettings from 'virtual:icons/carbon/settings';

	// highlight.js
	import hljs from 'highlight.js/lib/core';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import json from 'highlight.js/lib/languages/json';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';
	// Register each imported language module
	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);

	storeHighlightJs.set(hljs);
</script>

<!-- App Shell -->
<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">Regatta console</strong></a>
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
				{#if $page.data.auth.user}
					<Avatar
						src={$page.data.auth.user.image || ''}
						initials={$page.data.auth.user.name || ''}
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
				<svelte:fragment slot="lead">
					<IconCluster></IconCluster>
				</svelte:fragment>
				<span>Cluster</span>
			</AppRailAnchor>
			<AppRailAnchor href="/query" selected={$page.url.pathname === '/query'}>
				<svelte:fragment slot="lead">
					<IconQuery></IconQuery>
				</svelte:fragment>
				<span>Query</span>
			</AppRailAnchor>
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
					<svelte:fragment slot="lead">
						<IconSettings></IconSettings>
					</svelte:fragment>
					<span>Settings</span>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
