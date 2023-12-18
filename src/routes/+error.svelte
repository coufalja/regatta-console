<script>
	import { page } from '$app/stores';
</script>

<div class="text-center space-y-8">
	<div class="text-9xl font-extrabold opacity-30">{$page.status}</div>
	{#if $page.status === 404}
		<div class="text-4xl font-bold">You have found a secret place</div>
		<p>
			Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
			been moved to another URL.
		</p>
	{:else}
		<div class="text-4xl font-bold">Oh this is embarrassing</div>
		<p>
			It seems that the console has failed with: <code>{$page.error?.message}</code>
		</p>
	{/if}
	<div>
		<a href="/">Take me back to home page</a>
	</div>
</div>
