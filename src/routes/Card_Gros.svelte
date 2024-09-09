

<section class="gros flex">
    <svg class="icon" width="1em" height="1em" viewBox="0 0 512 512"><path fill="var(--primary)" d="M164.188 40.375c-168.48 35.59-220.94 167.97-17 187.47c-13.147 35.014-21.172 74.948-22.22 114.218c-35.694 33.01-59.593 66.343-59.593 66.343l47.72 47.72l-39.345 26.218h113.28c-73.368-73.383-21.278-104.5 65.626-104.5c88.096 0 134.175 35.905 65.594 104.5h114.5l-40.563-26.22l47.72-47.718s-22.25-31.027-55.844-62.844c-.65-40.39-8.807-81.663-22.344-117.718c203.953-19.496 151.482-151.878-17-187.47c-40.813 30.863 6.55 79.75 43.717 44.626c36.908 54.048 8.752 99.845-71.937 65.594c-.02-.022-.042-.04-.063-.063c-9.66 28.054-33.333 48.47-61.968 48.47c-28.637 0-52.332-20.416-62-48.47l-.064.064C111.736 184.826 83.596 139.042 120.5 85c37.168 35.125 84.5-13.763 43.688-44.625zm90.28 24.063c-25.736 0-48 25.088-48 57.937c0 32.85 22.264 57.938 48 57.938c25.738 0 47.97-25.086 47.97-57.938c0-32.852-22.232-57.938-47.97-57.938z"></path></svg>
    <div>
        <h2>
            <strong class="gros">GROS</strong>
            <span class="gros">ui toolkit</span>
            <sup><svg width="0.8em" height="0.8em" viewBox="0 0 36 36"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg></sup>
        </h2>
        <h3 class="gros">Jeu de composants <span class="gros">Svelte</span> réutilisables</h3>
    </div>
</section>



<style>
    section.gros {
        --primary: #006064;
        --primary-lighten: #00bcd4;
    }
    :global([data-theme="dark"] section.gros) {
        --primary: #0892a4;
        --primary-lighten: #00bcd4;
    }
    svg.icon {
        float: left;
        width: 104px;
        height: 104px;
        margin-right: 24px;
    }
    h2 {
        font-weight: 400;
        text-align: left;
        margin: 0 0 0 0;
        font-size: 40;
    }
    h3 {
        font-weight: 300;
        color: var(--font-grey);
        text-align: left;
        font-size: 20px;
        margin: 0 0 4px 0;
    }
    strong.gros {
        font-family: Gros, sans-serif;
        font-weight: 2000;
        color: var(--primary);
    }
    span.gros {
        color: var(--primary-lighten);
    }

    h3 span.gros {
        color: #888b8e;
        font-family: monospace;
    }
    @media (max-width: 640px) {
        svg.icon {
            width: 64px;
            height: 64px;
            margin-right: 8px;
        }
        h2 {
            font-size: 1.1em;
            margin: 0 0 2px 0;
        }
        h3 {
            font-size: 0.8em;
        }
    }
</style>
