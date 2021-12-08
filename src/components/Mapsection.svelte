<script>
	import Button from '../UI/Button.svelte';
</script>

<section class="flex justify-center py-20">
	<div class="flex flex-col lg:flex-row max-w-screen-lg ">
		<div class="img py-10 flex justify-center w-full">
			<img
				src="../static/images/Blank_Map_of_Charente_Department,_France,_with_Communes.svg"
				alt=""
			/>
		</div>
		<div class="flex flex-col px-10 justify-between">
			<div>
				<h3 class="uppercase text-yellow-400 text-xl md:text-3xl font-semibold">
					construction charente
				</h3>
				<h2 class="uppercase text-2xl md:text-4xl font-bold py-4">
					la meilleure équipe de la charente
				</h2>
				<span class="inline-block border-2 border-yellow-400 rounded-full w-20" />
			</div>
			<p class="text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend.
				Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim
				elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus
				ut cursus sem.
			</p>
			<div class="self-end">
				<Button
					href="/"
					classAnchor="bg-yellow-400 border-yellow-400 text-white font-bold hover:border-yellow-400 hover:bg-yellow-400 active:bg-yellow-600 py-2 px-5"
					>lire la suite</Button
				>
			</div>
		</div>
	</div>
</section>

<style>
	.img {
		width: 100%;
	}

	@media (max-width: 1023px) {
		.img {
			width: 60%;
		}
	}
</style>
