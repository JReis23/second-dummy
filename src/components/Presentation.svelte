<script>
	import { slide } from 'svelte/transition';
	import {
		backIn,
		backOut,
		elasticInOut,
		quadIn,
		quadOut,
		quintIn,
		quintOut,
		sineIn
	} from 'svelte/easing';
	import Button from '../UI/Button.svelte';

	let show = false;

	const open = () => {
		show = true;
	};

	const close = () => {
		show = false;
	};
</script>

<section class="py-20 flex justify-center ">
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
				on:click={open}
				href="/"
				classAnchor="bg-yellow-400 border-yellow-400 text-white font-bold hover:border-yellow-500 hover:bg-yellow-500 active:bg-yellow-600 py-2 px-5"
				>lire la suite</Button
			>
		</div>
	</div>
</section>

<div class="flex justify-center items-center flex-col p-10">
	{#if show}
		<div
			class="grid grid-cols-2 gap-10 max-w-screen-md p-5 "
			in:slide={{ delay: 300, duration: 4000, easing: quadOut }}
			out:slide={{ delay: 300, duration: 4000, easing: quadIn }}
		>
			<div class="col-span-1">
				<p class="text-lg text-justify">
					At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
					cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
					est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
					libero tempore, cum soluta nobis est eligendi
				</p>
			</div>
			<div>
				<p class="text-lg text-justify">
					Optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
					voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
					officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
					et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
					reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
					repellat
				</p>
			</div>
		</div>
		<div on:click={close}>
			<div
				class="border rounded-full shadow-xl bg-yellow-400 w-10 h-10 p-2 flex items-center justify-center mt-3 cursor-pointer hover:bg-yellow-500 active:bg-yellow-600"
			>
				<i class="fas fa-angle-up text-3xl text-white" />
			</div>
		</div>
	{/if}
</div>
