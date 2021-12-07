<script>
	import Portefeuilles from '../components/Portefeuilles.svelte';
	import Modal from '../UI/Modal.svelte';
	import images from './images.js';

	let showModal = false;
	let big = false;

	const closeModal = () => {
		showModal = false;
	};

	const openModal = () => {
		big = true;
	};
</script>

<section class="bg-black bg-opacity-90 flex justify-center flex-col">
	<div class="py-12 flex items-center flex-col">
		<h3 class="uppercase text-3xl font-bold text-yellow-400">portefeuille</h3>
		<h2 class="uppercase text-4xl font-bold text-white py-7">les projets récents</h2>
		<span class="border inline-block border-yellow-400 w-20 mt-2" />
	</div>
	<div class="grid grid-cols-4 gap-0">
		{#each images as image (image.id)}
			<Portefeuilles link={image.link} description={image.description} on:click={openModal} />
			<!-- {#if showModal}
				<Modal on:close={closeModal}>
					<div slot="modalOne">
						<img src={image.link} alt={image.description} />
						<h1>{image.id}</h1>
						{console.log(image.id)}
					</div>
				</Modal>
			{/if} -->
		{/each}
	</div>
</section>
