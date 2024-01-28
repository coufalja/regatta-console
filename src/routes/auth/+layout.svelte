<script>
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">Regatta console</strong></a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
