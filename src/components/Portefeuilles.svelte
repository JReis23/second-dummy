<script>
	import Hoverable from '../UI/Hoverable.svelte';
	import { fade } from 'svelte/transition';

	export let link;
	export let description;
</script>

<Hoverable let:hovering={zoom}>
	{#if zoom}
		<div
			transition:fade={{ duration: 800 }}
			class="fixed w-3/5 z-50 bg-white rounded-lg shadow-2xl overflow-hidden modalOne"
		>
			<div class="w-full h-full">
				<img src={link} alt={description} />
			</div>
		</div>
	{:else}
		<div class="col-span-1 " on:click>
			<div class="portefeuillesImages">
				<img src={link} alt={description} />
			</div>
		</div>
	{/if}
</Hoverable>

<style>
	.portefeuillesImages {
		max-height: 16vw;
		height: 100%;
	}

	.zoom {
		scale: 2;
	}

	.modalOne {
		top: 15vh;
		left: 20vw;
	}
</style>
