
<section class="datatables flex">
    <svg viewBox="0 0 512 512">
        <path
            fill="var(--primary)"
            d="M462.009,20.359H49.99C22.382,20.359,0,42.739,0,70.348v371.304c0,27.609,22.382,49.989,49.99,49.989
            h412.019c27.609,0,49.991-22.382,49.991-49.989V70.348C512,42.739,489.618,20.359,462.009,20.359z" />
        <path
            style="fill:var(--bg-darken);"
            d="M66.354,168.954c-5.137,0-9.316-4.178-9.316-9.315V73.06c0-5.136,4.178-9.314,9.316-9.314h387.59
            c5.136,0,9.315,4.177,9.315,9.314v86.579c0,5.136-4.178,9.315-9.315,9.315H66.354z" />
        <g>
            <rect x="57.038" y="215.793" style="fill:var(--bg-darken);" width="170.928" height="80.41" />
            <rect x="57.038" y="352.186" style="fill:var(--bg-darken);" width="170.928" height="80.41" />
            <rect x="283.01" y="215.793" style="fill:var(--bg-darken);" width="170.928" height="80.41" />
            <rect x="283.01" y="352.186" style="fill:var(--bg-darken);" width="170.928" height="80.41" />
        </g>
        <path
            style="opacity:0.1;enable-background:new;"
            d="M104.338,441.652V70.348c0-27.609,22.382-49.989,49.99-49.989H49.99
            C22.382,20.359,0,42.739,0,70.348v371.304c0,27.608,22.382,49.989,49.99,49.989h104.338
            C126.719,491.641,104.338,469.26,104.338,441.652z" />
    </svg>
    <div>
        <h2 class="alt-font">svelte simple datatables</h2>
        <h3>A powerful toolkit for building datatable components.</h3>
    </div>
</section>



<style>
    section.datatables {
        align-items: flex-start;
        --primary: #c2185b;
    }
    :global([data-theme="dark"] section.datatables) {
        --primary: #ef5492;
    }
    svg {
        float: left;
        width: 104px;
        height: 104px;
        margin-right: 24px;
    }
    h2 {
        font-weight: 400;
        text-align: left;
        margin: 0 0 0 0;
        color: var(--primary);
        font-size: 32px;
        letter-spacing: -1px;
    }
    h3 {
        font-weight: 300;
        color: var(--font-grey);
        text-align: left;
        font-size: 20px;
        margin: 0px 0 4px 0;
    }
    @media (max-width: 640px) {
        svg {
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
