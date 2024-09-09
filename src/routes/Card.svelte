<script lang="ts">
    import type { Snippet } from 'svelte'

    type Props = {
        link: string,
        children: Snippet,

    }
    let { link, children }: Props = $props()
    let depth = $state(1)
</script>

<a href="{link}" rel="external" class="z-depth-{depth}" onmouseenter={() => depth = 3} onmouseleave={() => depth = 2}>
    {@render children()}
</a>


<style>
    a {
        width: 100%;
        max-width: 512px;
        margin: 24px auto 32px auto;
        border: 1px solid var(--grey-lighten-2);
        background: var(--bg-darken);
        border-radius: 8px;
        position: relative;

        text-decoration: none;
        display: flex;
        padding: 16px;
        transition: all, 0.2s;
    }

    @media (max-width: 640px) {
        a {
            max-width: 90%;
            margin: 16px auto;
            border-radius: 4px;
            padding: 8px;
        }
    }
</style>
