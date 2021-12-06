<script>
	import Button from '../UI/Button.svelte';
</script>

<section class="py-20 flex justify-center">
	<div class="max-w-screen-xl flex">
		<div class="w-1/2 px-10">
			<h2 class="text-yellow-400 text-4xl uppercase font-black">BIENVENUE A</h2>
			<h1 class="uppercase text-6xl py-4 font-black">CONSTRUCTION CHARENTE</h1>
			<span class="border-2 rounded-full border-yellow-400 inline-block w-20" />
			<p class="text-2xl italic pt-8">
				Nous sommes le leader avec 25 ans d'expérience sur le marché de la construction!
			</p>
		</div>
		<div class="w-1/2">
			<p class="pb-8 text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend.
				Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim
				elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus
				ut cursus sem. Vestibulum feugiat eros lorem, vitae faucibus arcu aliquam ac. Sed tempor,
				arcu non sodales gravida, sapien dui iaculis felis, vel luctus sapien nisi non orci. Ut
				laoreet ante tellus, vel hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit ac
				rutrum. Donec porttitor turpis eu mi tempus facilisis. Maecenas id ullamcorper elit, quis
				tempus enim. In dignissim dolor in accumsan tincidunt. Donec vel diam vitae risus elementum
				congue. Cras varius, enim vitae condimentum mattis, erat laus.
			</p>
			<Button
				href="/"
				classAnchor="bg-yellow-400 border-yellow-400 text-white font-bold hover:border-yellow-500 hover:bg-yellow-500 active:bg-yellow-600 py-2 px-5"
				>lire la suite</Button
			>
		</div>
	</div>
</section>
