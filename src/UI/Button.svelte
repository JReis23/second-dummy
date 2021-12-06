<script>
	export let href = null;
	export let type = 'button';
	export let classAnchor = null;
	export let classButton = null;
</script>

{#if href}
	<a {href} class="rounded-lg border-2 py-1 px-4 uppercase {classAnchor}"><slot /></a>
{:else}
	<button class={classButton} {type} on:click><slot /></button>
{/if}
