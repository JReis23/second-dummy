<script>
	import Header from '../components/Header.svelte';
</script>

<Header>
	<nav class="navbar mb-2 shadow-lg text-neutral-content rounded-box" slot="navBar">
		<div class="px-2 mx-2 navbar-start">
			<span class="text-lg font-bold"> Logo </span>
		</div>
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<div class="flex items-stretch">
				<a href="/" class="btn btn-ghost btn-sm rounded-btn"> Accueill </a>
				<a href="/" class="btn btn-ghost btn-sm rounded-btn"> Nos réalisations </a>
				<a href="/" class="btn btn-ghost btn-sm rounded-btn"> à propos </a>
				<a href="/" class="btn btn-ghost btn-sm rounded-btn"> Contact </a>
			</div>
		</div>
		<div class="navbar-end">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</div>
		<div class="flex-none visible lg:invisible">
			<button class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</nav>
</Header>
