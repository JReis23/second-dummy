<script>
	import Nav from '../UI/Nav.svelte';
	import Presentation from '../components/Presentation.svelte';
	import Services from '../components/Services.svelte';
	import Specialites from '../components/Specialites.svelte';
	import Mapsection from '../components/Mapsection.svelte';
	import Projets from '../components/Projets.svelte';
	import Pasapas from '../components/Pasapas.svelte';
	import Temoignages from '../components/Temoignages.svelte';
	import Blog from '../components/Blog.svelte';
	import Footer from '../components/Footer.svelte';
	import Images from '../data/Images.svelte';
</script>

<svelte:head>
	<title>Home page</title>
</svelte:head>

<Nav />
<Presentation />
<Services />
<Specialites />
<Images />
<Mapsection />
<Projets />
<Pasapas />
<Temoignages />
<Blog />
<Footer />
