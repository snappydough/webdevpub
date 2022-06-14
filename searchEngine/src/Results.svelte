<script>
    export let json;
    import { fly, fade, slide, draw } from "svelte/transition";
</script>


    {#if json && "data" in json && "items" in json.data && json.data.items.length > 0}
    <div id = "item-holder">
        {#each json.data.items as item}
            <div id = "item">
                
                <p in:fade id="name">{item.name}</p>
                <a in:fade id="url" href={item.url} target="blank">{item.url}</a>
                <p in:fade id="time">{item.published_at}</p>
                <p in:fade id="type">{item.type}</p>
            </div>
            
        {/each}
    </div>
    {:else if json}
    <div class="resultBar">
        <p in:fade>{JSON.stringify(json)}</p>
    </div>
{/if}    

        

    
<style>

    

    #item-holder {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
        max-width: 100%;
        margin-top: 0;
        
        row-gap: 20px;
        margin-left: 0;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    #item {
        border-radius: 25px;
        background-color: rgba(245, 245, 245, 0.141);
        border: 2px solid rgba(245, 245, 245, 0.141);
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        word-wrap: break-word;
    }

    #name{
        font-size: 200%;
        font-weight: bolder;
        margin-bottom: 0;
    }

    #url{
        color:rgba(13, 165, 241, 0.532)
    }

    #time{
        font-size: 75%;
    }

    #type{
        font-size: 75%;
    }

    

    .resultBar{
        background-color: white;
        margin: 0px;
        border: 2px solid black;
        align-items: center;
        align-self: center;
        
    }

    

    /** https://onaircode.com/html-css-custom-scrollbar-examples/ */
    ::-webkit-scrollbar {
        width: 15px;
        height: 15px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: rgba(219, 184, 184, 0);
        opacity: 0;
    }
    ::-webkit-scrollbar-thumb {
        background-image: linear-gradient(45deg, #2e3b52, #434232);
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    }
</style>