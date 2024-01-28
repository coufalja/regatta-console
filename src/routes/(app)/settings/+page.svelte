<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex py-10 p-4 mx-auto h-full">
	<CodeBlock class="w-full" language="JSON" code={JSON.stringify(data.settings, null, 2)} />
</div>
