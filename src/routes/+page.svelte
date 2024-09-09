<script lang="ts">
    import { theme }    from 'gros/theme'
    import Theme        from './Theme.svelte'
    import Card         from './Card.svelte'
    import Datatables   from './Card_Datatables.svelte'
    import Gros         from './Card_Gros.svelte'
    theme.init()
</script>

<main>
    <Theme/>

    <h1>Bonjour / Hello</h1>

    <Card link="https://vincjo.fr/datatables">
        <Datatables/>
    </Card>

    <Card link="https://vincjo.fr/gros">
        <Gros/>
    </Card>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
    h1 {
        color: var(--font);
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
        margin-top: 32px;
        margin-bottom: 48px;
    }
    @media (max-width: 640px) {
        main {
            padding: 0.3em 0.2em;
        }
        h1 {
            font-size: 1.8em;
            margin-top: 56px;
        }
    }
</style>
