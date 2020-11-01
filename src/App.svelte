<script>

	const myapps = [
		{ 
			name: `Boucle d'Air`, 
			title: 'Envie de Sortir ?',
			href: 'https://boucledair.fr/', 
			logo: 'boucledair.fr.svg', 
			color: '#079992', 
			language: 'french' 
		},
		// { 
		// 	name: `Geoflux`, 
		// 	title: '???',
		// 	href: 'https:/geoflux.io/', 
		// 	logo: 'geoflux.io.svg', 
		// 	color: '#079992', 
		// 	language: 'french' 
		// },
		{ 
			name: `svelte-simple-datatables`, 
			title: 'A Datatable component for Svelte',
			href: 'https://vincjo.fr/svelte-simple-datatables/', 
			logo: 'svelte-simple-datatables.svg',
			color: '#ff3e00', 
			language: 'english' 
		},
	]
</script>

<main>
	<h1>Hello / Bonjour !</h1>
	<p>Below is the list of my sites and applications :</p>
	{#each myapps as app}
	<article>
		<a href={app.href}>
			<img alt="{app.name} logo" src="{app.logo}"/>
			<div>
				<h2 style="color:{app.color}">{app.name}</h2>
				<h3>{app.title}</h3>
			</div>
		</a>
	</article>	
	{/each}
</main>

<style>
	main {text-align: center;padding: 1em;margin: 0 auto;background:#fdfdfd;}
	h1 {color: #1c313a;text-transform: uppercase;font-size: 4em;font-weight: 100;}
	p{color:#616161;font-size:1em;}
	article{width:100%;max-width:512px;margin:24px auto;border:1px solid #eee;padding:16px;background:#fff;border-radius:8px;}
	a{display:flex;text-decoration:none;}
	img{float:left;width:112px;margin-right:24px;}
	h2{font-weight:400;text-align:left;margin:0 0 24px 0;font-size:2rem;}
	h3{font-weight:300;color:#455a64;text-align:left;margin:0 0 4px 0}
	@media (max-width: 640px) {
		main {max-width: 240px;padding:0.5em}
		h1{font-size:1.5em;}
		p{font-size:.9em;}
		img{width:64px;margin-right:16px;}
		article{padding:8px}
		h2{font-size:1em;margin:0 0 4px 0}
		h3{font-size:0.9em;}
	}

	article{transition:all,0.2s;-webkit-box-shadow: 0 2px 2px 0 rgba(189,189,189, 0.14), 0 3px 1px -2px rgba(189,189,189, 0.12), 0 1px 5px 0 rgba(189,189,189, 0.2);box-shadow: 0 2px 2px 0 rgba(189,189,189, 0.14), 0 3px 1px -2px rgba(189,189,189, 0.12), 0 1px 5px 0 rgba(189,189,189, 0.2);}
	article:hover{-webkit-box-shadow: 0 16px 24px 2px rgba(189,189,189, 0.14), 0 6px 30px 5px rgba(189,189,189, 0.12), 0 8px 10px -7px rgba(189,189,189, 0.2);box-shadow: 0 16px 24px 2px rgba(189,189,189, 0.14), 0 6px 30px 5px rgba(189,189,189, 0.12), 0 8px 10px -7px rgba(189,189,189, 0.2);}
</style>