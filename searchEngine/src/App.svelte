
   
<script>
    import Spinner from "./Spinner.svelte";
    import Results from "./Results.svelte";
    import Search from "./Search.svelte";
    import { searchResponseStore } from "./stores.js";
    let searched = false;
    searchResponseStore.subscribe((pending_search)=>{
        if(pending_search!=undefined){
            pending_search.then((_)=>{
                searched = true;
            })
        }
    })
</script>



<main class:searched>

    <div class="logo">
        <img src="Scoop dogg.jpg" class:searched alt="nice">
        
        <Search/>
    </div>

    {#await $searchResponseStore}
        <Spinner />
    {:then result}
      <Results json={result} />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }
    main {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(
            -45deg,
            #d40c0ce8,
            #a410c1,
            #089d0aa2,
            #4c12ebb1
        
           
        );
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        transition: all 0.3s;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        padding-top: 15%;
       
        
    
    }

    main.searched{
        justify-content: start;
        padding-top: 0;
        background-image: url("https://i.pinimg.com/736x/8c/37/7f/8c377f4eb09c060abe06139e0bffa639.jpg");
        
         background-size: 100% 100%;


    }

    img{
        
        z-index: 1;
        width: 50%;
        height: default;
         
        
        
    }

    img.searched{
        width: 25%;
        height: default;

    }

    .logo{
        width:max-content;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        
        flex-direction: column;
        gap: 10px;
        transition: all 0.3s;
    }
    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        30% {
            background-position: 0% -100%;
        }
        60% {
            background-position: -100% -100%;
        }
        80% {
            background-position: -100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    @media (max-width: 600px){
        img {
            margin-top: 200px;
        }

        img.searched {
            margin-top: 0;
        }

        img{
            width: 30%;
        }


    }
        

    
</style>