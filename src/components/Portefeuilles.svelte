<script>
	export let link;
	export let description;
</script>

<div class="col-span-1" on:click>
	<div class="portefeuillesImages">
		<img src={link} alt={description} />
	</div>
</div>

<style>
	.portefeuillesImages {
		max-height: 16vw;
		height: 100%;
	}
</style>
