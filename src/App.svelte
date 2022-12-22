<script>
</script>

<main>
    <h1>Bonjour / Hello</h1>
    <article>
        <a href="https://vincjo.fr/datatables">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                <h3>A toolkit to build some datatable components with Svelte</h3>
            </div>
        </a>
    </article>

</main>

<style>
    main {text-align: center;padding: 1em;margin: 0 auto;background:#fdfdfd;}
    h1 {color: #333;text-transform: uppercase;font-size: 4em;font-weight: 100;}
    /* p{color:#757575;font-size:1em;} */
    article{width:100%;max-width:512px;margin:24px auto;border:1px solid #eee;background:#fff;border-radius:8px;}
    a{text-decoration:none;display:flex;padding:16px;}
    svg{float:left;width:104px;height:104px;margin-right:24px;}
    h2{font-weight:400;text-align:left;margin:0 0 0 0;font-size:2rem;}
    h3{font-weight:300;color:#455a64;text-align:left;margin:0 0 4px 0}
    @media (max-width: 640px) {
        main {padding:0.3em 0.2em;}
        article{max-width:90%;margin:16px auto;}
        h1{font-size:1.8em;}
        /* p{font-size:.9em;padding:4% 0;} */
        svg{width:64px;height:64px;margin-right:16px;}
        a{padding:8px}
        h2{font-size:1.1em;margin:0 0 4px 0}
        h3{font-size:1em;}
    }

    article{transition:all,0.2s;-webkit-box-shadow: 0 2px 2px 0 rgba(189,189,189, 0.14), 0 3px 1px -2px rgba(189,189,189, 0.12), 0 1px 5px 0 rgba(189,189,189, 0.2);box-shadow: 0 2px 2px 0 rgba(189,189,189, 0.14), 0 3px 1px -2px rgba(189,189,189, 0.12), 0 1px 5px 0 rgba(189,189,189, 0.2);}
    article:hover{-webkit-box-shadow: 0 16px 24px 2px rgba(189,189,189, 0.14), 0 6px 30px 5px rgba(189,189,189, 0.12), 0 8px 10px -7px rgba(189,189,189, 0.2);box-shadow: 0 16px 24px 2px rgba(189,189,189, 0.14), 0 6px 30px 5px rgba(189,189,189, 0.12), 0 8px 10px -7px rgba(189,189,189, 0.2);}
</style>