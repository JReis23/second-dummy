<script>
	import Button from '../UI/Button.svelte';
</script>

<footer class="bg-yellow-500 flex py-10 flex-col justify-center">
	<div class="flex justify-center w-full flex-col md:flex-row">
		<div class="px-4 w-full md:w-1/2 justify-center flex-col flex ">
			<h2 class="uppercase text-white font-semibold text-4xl text-right">construction charente</h2>
			<p class="text-white text-right text-lg">Sample text. Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="w-full mt-10 md:mt-0 md:w-1/2 flex justify-center items-center">
			<div>
				<Button
					href="/"
					classAnchor="bg-yellow-400 border-2 border-white text-white text-lg font-semibold hover:text-yellow-400 hover:border-yellow-500 hover:bg-white active:bg-gray-100 py-3 px-7"
					>demade de projet</Button
				>
			</div>
		</div>
	</div>
	<div class="flex justify-center mt-10 shadow-lg lg:w-1/5 self-center" />
</footer>
