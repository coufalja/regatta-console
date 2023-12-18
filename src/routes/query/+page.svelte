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
						{JSON.stringify(query)}
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
						queries = [...queries, result.data.response];
					};
		}}>
		<select name="table" class="select w-1/12 text-center rounded-s-lg">
			{#each data.tables as [name]}
				<option>{name}</option>
			{/each}
		</select>
		<div class="grow flex">
			<input name="query" class="input grow" type="search">
			<button class="w-1/12 btn variant-filled-primary btn-sm" type="submit">Send</button>
		</div>
	</form>
</div>

