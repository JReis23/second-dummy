<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';

	// export let id;

	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};
</script>

<div class="backdrop" on:click={close} />
<div class="fixed top-28 left-28 w-2/3 bg-white rounded-lg shadow-2xl overflow-hidden modalOne">
	<div class="w-full h-full">
		<slot name="modalOne" />
	</div>
</div>

<style>
	.modalOne {
		max-height: 80vh;
		z-index: 100;
	}

	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}
</style>
