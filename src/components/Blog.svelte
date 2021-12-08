<script>
	import Button from '../UI/Button.svelte';

	let about = 'text-md italic border-b-2 font-semibold uppercase align-end';

	var today = new Date();
	var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
</script>

<section class="flex justify-center items-center py-20 flex-col">
	<div class="flex flex-col">
		<div class="flex flex-col pb-16 items-center">
			<h3 class="uppercase text-xl md:text-3xl text-yellow-400 font-semibold">le blog</h3>
			<h2 class="uppercase font-bold my-6 text-2xl md:text-4xl">dernières nouvelles</h2>
			<span class="border-2 w-20 border-yellow-400 mt-4" />
		</div>
	</div>
	<div class="flex flex-col lg:flex-row max-w-screen-xl justify-center items-center px-4">
		<div class="mx-8">
			<div>
				<img src="../static/images/b(1).jpg" alt="" />
			</div>
			<div class="pt-4">
				<h3 class="uppercase text-3xl font-medium ">GRANDS PROJETS</h3>
				<p class="py-2 italic">{date}</p>
				<p class="py-2">
					Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
					sagittis suscipit ultrices.
				</p>
				<Button classButton={about}>savoir plus</Button>
			</div>
		</div>
		<div class="mx-8">
			<div>
				<img src="../static/images/b(2).jpg" alt="" />
			</div>
			<div class="pt-4">
				<h3 class="uppercase text-3xl font-medium">GRANDS PROJETS</h3>
				<p class="py-2 italic">{date}</p>
				<p class="py-2">
					Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
					sagittis suscipit ultrices.
				</p>
				<Button classButton={about}>savoir plus</Button>
			</div>
		</div>
		<div class="mx-8">
			<div>
				<img src="../static/images/b(3).jpg" alt="" />
			</div>
			<div class="pt-4">
				<h3 class="uppercase text-3xl font-medium">GRANDS PROJETS</h3>
				<p class="py-2 italic">{date}</p>
				<p class="py-2">
					Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
					sagittis suscipit ultrices.
				</p>
				<Button classButton={about}>savoir plus</Button>
			</div>
		</div>
	</div>
</section>
