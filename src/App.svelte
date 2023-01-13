<script>
</script>

<main>
    <h1>Bonjour / Hello</h1>
    <article>
        <a href="https://vincjo.fr/datatables">
            <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path fill="#b71540" d="M462.009,20.359H49.99C22.382,20.359,0,42.739,0,70.348v371.304c0,27.609,22.382,49.989,49.99,49.989
                    h412.019c27.609,0,49.991-22.382,49.991-49.989V70.348C512,42.739,489.618,20.359,462.009,20.359z"/>
                <path style="fill:#fff;" d="M66.354,168.954c-5.137,0-9.316-4.178-9.316-9.315V73.06c0-5.136,4.178-9.314,9.316-9.314h387.59
                    c5.136,0,9.315,4.177,9.315,9.314v86.579c0,5.136-4.178,9.315-9.315,9.315H66.354z"/>
                <g>
                    <rect x="57.038" y="215.793" style="fill:#fff;" width="170.928" height="80.41"/>
                    <rect x="57.038" y="352.186" style="fill:#fff;" width="170.928" height="80.41"/>
                    <rect x="283.01" y="215.793" style="fill:#fff;" width="170.928" height="80.41"/>
                    <rect x="283.01" y="352.186" style="fill:#fff;" width="170.928" height="80.41"/>
                </g>
                <path style="opacity:0.1;enable-background:new;" d="M104.338,441.652V70.348c0-27.609,22.382-49.989,49.99-49.989H49.99
                    C22.382,20.359,0,42.739,0,70.348v371.304c0,27.608,22.382,49.989,49.99,49.989h104.338
                    C126.719,491.641,104.338,469.26,104.338,441.652z"/>
                </svg>
            <div>
                <h2 style:color={'#b71540'}>svelte simple datatables</h2>
                <h3>A toolkit for creating datatable components with Svelte</h3>
            </div>
        </a>
    </article>

    <article>
        <a href="https://vincjo.fr/gros">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#006064" d="M164.188 40.375c-168.48 35.59-220.94 167.97-17 187.47c-13.147 35.014-21.172 74.948-22.22 114.218c-35.694 33.01-59.593 66.343-59.593 66.343l47.72 47.72l-39.345 26.218h113.28c-73.368-73.383-21.278-104.5 65.626-104.5c88.096 0 134.175 35.905 65.594 104.5h114.5l-40.563-26.22l47.72-47.718s-22.25-31.027-55.844-62.844c-.65-40.39-8.807-81.663-22.344-117.718c203.953-19.496 151.482-151.878-17-187.47c-40.813 30.863 6.55 79.75 43.717 44.626c36.908 54.048 8.752 99.845-71.937 65.594c-.02-.022-.042-.04-.063-.063c-9.66 28.054-33.333 48.47-61.968 48.47c-28.637 0-52.332-20.416-62-48.47l-.064.064C111.736 184.826 83.596 139.042 120.5 85c37.168 35.125 84.5-13.763 43.688-44.625zm90.28 24.063c-25.736 0-48 25.088-48 57.937c0 32.85 22.264 57.938 48 57.938c25.738 0 47.97-25.086 47.97-57.938c0-32.852-22.232-57.938-47.97-57.938z"></path></svg>
            <div>
                <h2>
                    <strong class="gros">GROS</strong> 
                    <span class="gros">ui toolkit</span>
                    <sup><svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 36 36"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg></sup>
                </h2>
                <h3 class="gros">Jeu de composants <span class="gros">Svelte</span> réutilisables</h3>
            </div>
        </a>
    </article>

</main>

<style>
    main {text-align: center;padding: 1em;margin: 0 auto;background:#fdfdfd;}
    h1 {color: #333;text-transform: uppercase;font-size: 4em;font-weight: 100;}
    /* p{color:#757575;font-size:1em;} */
    article{width:100%;max-width:512px;margin:24px auto 32px auto;border:1px solid #eee;background:#fff;border-radius:8px;position:relative;}
    a{text-decoration:none;display:flex;padding:16px;}
    a svg.icon{float:left;width:104px;height:104px;margin-right:24px;}
    h2{font-weight:400;text-align:left;margin:0 0 0 0;font-size:2rem;}
    h3{font-weight:300;color:#455a64;text-align:left;margin:0 0 4px 0}
    @media (max-width: 640px) {
        main {padding:0.3em 0.2em;}
        article{max-width:90%;margin:16px auto;border-radius:4px;}
        h1{font-size:1.8em;}
        /* p{font-size:.9em;padding:4% 0;} */
        a svg.icon{width:64px;height:64px;margin-right:8px;}
        a{padding:8px}
        h2{font-size:1.1em;margin:0 0 2px 0}
        h3{font-size:0.8em;}
    }
    article{transition:all,0.2s;-webkit-box-shadow: 0 2px 2px 0 rgba(189,189,189, 0.14), 0 3px 1px -2px rgba(189,189,189, 0.12), 0 1px 5px 0 rgba(189,189,189, 0.2);box-shadow: 0 2px 2px 0 rgba(189,189,189, 0.14), 0 3px 1px -2px rgba(189,189,189, 0.12), 0 1px 5px 0 rgba(189,189,189, 0.2);}
    article:hover{-webkit-box-shadow: 0 16px 24px 2px rgba(189,189,189, 0.14), 0 6px 30px 5px rgba(189,189,189, 0.12), 0 8px 10px -7px rgba(189,189,189, 0.2);box-shadow: 0 16px 24px 2px rgba(189,189,189, 0.14), 0 6px 30px 5px rgba(189,189,189, 0.12), 0 8px 10px -7px rgba(189,189,189, 0.2);}

    strong.gros{font-family:Gros, sans-serif;font-weight:2000;color:#006064;}
    span.gros{color:#00bcd4;}
    
    h3 span.gros{color:#757575;font-family:monospace;}
</style>