<script lang="ts">
	import IconBrandGoogle from 'virtual:icons/logos/google-icon';
	import IconBrandOkta from 'virtual:icons/logos/okta-icon';
	import IconBrandGithub from 'virtual:icons/logos/github-icon';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="py-10 p-0 mx-auto max-w-md">
	<div class="card p-6 space-y-6 shadow-xl">
		{#if $page.data.session}
			<p class="font-semibold">You are logged in</p>
			<div class="flex justify-start flex-wrap">
				<Avatar
					class="me-4"
					src={$page.data.session?.user?.image || ''}
					initials={$page.data.session?.user?.name || ''}
				></Avatar>
				<div>
					<p class="font-light">{$page.data.session?.user?.name}</p>
					<p class="font-light">{$page.data.session?.user?.email}</p>
				</div>
			</div>
			<div class="flex justify-between flex-wrap">
				<button on:click={() => signOut()} class="btn variant-filled-primary">Logout</button>
			</div>
		{:else}
			<p class="font-semibold">Welcome, login with</p>
			{#if data.isGoogleAvailable}
				<button on:click={() => signIn('google')} class="btn variant-filled-surface w-full gap-2">
					<IconBrandGoogle />
					Google
				</button>
			{/if}
			{#if data.isOktaAvailable}
				<button on:click={() => signIn('okta')} class="btn variant-filled-surface w-full gap-2">
					<IconBrandOkta />
					Okta
				</button>
			{/if}
			{#if data.isGithubAvailable}
				<button
					on:click={() => signIn('github')}
					class="btn w-full bg-black text-white hover:opacity-70 gap-2"
				>
					<IconBrandGithub class="invert" />
					Github
				</button>
			{/if}
			{#if data.isCredentialsAvailable}
				<div class="text-center">
					<hr class="-mb-4" />
					<span class="bg-surface-100-800-token p-2 text-sm">Or continue with email</span>
				</div>
				<form class="space-y-4">
					<label class="label">
						<span>Email</span>
						<input type="email" placeholder="your-email@example.com" class="input" />
					</label>
					<label class="label">
						<span>Password</span>
						<input type="password" placeholder="Your password" class="input" />
					</label>
				</form>
				<div class="flex justify-between flex-wrap">
					<button on:click={() => signIn('credentials')} class="btn variant-filled-primary"
						>Login
					</button>
				</div>
			{/if}
		{/if}
	</div>
</div>
