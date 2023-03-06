<script>
	import Header from './components/Header.svelte';
</script>

<svelte:head>
	<title>Buku Tamu</title>
	<meta name="description" content="Guestbook" />
</svelte:head>

<div id="master" class="d-sm-none">
	<Header />
	<main class="py-4 px-3">
		<slot />
	</main>
</div>

<style>
	#master {
		overflow-x: hidden;
	}
</style>
