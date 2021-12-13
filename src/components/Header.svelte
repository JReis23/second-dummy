<script>
	import Button from '../UI/Button.svelte';
</script>

<header class="bg-cover bg-no-repeat bg-center flex flex-col justify-between">
	<div>
		<slot name="navBar" />
	</div>
	<div class="w-auto md:w-2/3 lg:w-1/2 mb-20 mt-24 md:">
		<div class="flex justify-center py-4 rounded-xl bg-black bg-opacity-50 md:mx-10">
			<div class="px-2 ">
				<h2 class="text-yellow-400 text-2xl md:text-4xl uppercase font-black">
					Nous sommes des constructeurs
				</h2>
				<h1 class="uppercase text-white text-3xl md:text-6xl py-4 font-black">
					nous construirons votre rêve
				</h1>
				<span class="border-2 rounded-full border-yellow-400 inline-block w-20" />
				<p class="text-white py-8 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis
					suscipit ultrces.
				</p>
				<div class="flex flex-col md:flex-row">
					<div class="m-3">
						<Button
							href="/"
							classAnchor="bg-yellow-400 border-yellow-400 text-white font-bold hover:border-yellow-500 hover:bg-yellow-500 active:bg-yellow-600 py-2 px-5"
							>à propos de nous</Button
						>
					</div>
					<div class="m-3">
						<Button
							href="/"
							classAnchor="text-white font-bold hover:text-gray-700 hover:bg-white py-2 px-5 md:ml-5"
							>Nos réalisations</Button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		background-image: url('/images/building-1510561_1920(1).jpeg');
		height: auto;
	}
</style>
