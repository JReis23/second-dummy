<script>
	import Header from '../components/Header.svelte';
	import Nav from '../UI/Nav.svelte';
	import Button from '../UI/Button.svelte';
	import Presentation from '../components/Presentation.svelte';
	import Services from '../components/Services.svelte';
	import Specialites from '../components/Specialites.svelte';
	import Portefeuilles from '../components/Portefeuilles.svelte';
	import Mapsection from '../components/Mapsection.svelte';
	import Projets from '../components/Projets.svelte';
	import Pasapas from '../components/Pasapas.svelte';
	import Temoignages from '../components/Temoignages.svelte';
	import Blog from '../components/Blog.svelte';
	import Footer from '../components/Footer.svelte';
	import Modal from '../UI/Modal.svelte';
</script>

<svelte:head />

<Nav />
<Presentation />
<Services />
<Specialites />
<Portefeuilles />
<Mapsection />
<Projets />
<Pasapas />
<Temoignages />
<Blog />
<Footer />
<Modal content="hello" />
