<script>
	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:click={enter} on:mouseleave={leave}>
	<slot {hovering} />
</div>
