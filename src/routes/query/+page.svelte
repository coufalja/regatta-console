<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;

	let queries = [];
</script>

<div class="flex flex-col h-full">
	<div class="flex-col grow">
		<dl class="list">
			{#each queries as query}
				<div class="list-item grow">
					<div class="card p-6">
						<p>
							<code class="code">
								{query.request.table}: {query.request.key}
							</code>
						</p>
						<p>
							{#if query.error}
								<code class="code">
									{query.error}
								</code>
							{:else}
								<code class="code">
									{#if query.response.kvs.length >= 1}
										{atob(query.response.kvs[0].value)}
									{:else}
										No values returned
									{/if}
								</code>
							{/if}
						</p>
					</div>
				</div>
			{/each}
		</dl>
	</div>
	<form class="flex flex-row p-12" method="POST" action="?/query" use:enhance={({ formElement }) => {
			const button = formElement.querySelector('button');
			button.disabled = true;
			return ({ result, update }) => {
				button.disabled = false;
				if (result.type === 'error') update();
				queries = [...queries, result.data];
			};
		}}>
		<select name="table" class="btn variant-filled-secondary w-2/12 text-center rounded-l-xl rounded-r-none">
			{#each data.tables as [name]}
				<option>{name}</option>
			{/each}
		</select>
		<div class="grow flex">
			<input name="query" class="input grow rounded-none" type="search">
			<button class="w-1/12 btn variant-filled-primary btn-sm rounded-l-none rounded-r-xl" type="submit">Send</button>
		</div>
	</form>
</div>

