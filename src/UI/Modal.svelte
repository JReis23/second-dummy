<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const closeModal = () => {
		dispatch('close');
	};

	const openModal = () => {
		dispatch('open');
	};

	export let content;
</script>

<div class="backdrop">
	<div class="fixed top-28 left-28 w-2/3 bg-white rounded-lg shadow-2xl overflow-scroll modal">
		{content}
	</div>
</div>

<style>
	.modal {
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
