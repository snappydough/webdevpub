<script>
    import { searchResponseStore } from "./stores.js";

    

    let question;
    async function search() {
        const res = await fetch(
            `https://demo.dataverse.org/api/search?q=` + question
        );
        const json = await res.json();

         if (res.ok) {
             console.log(json);
            return json;
        } else {
            throw new Error(json);
        } 
    }
</script>

<div class:searched={$searchResponseStore!=undefined}>
    <form
        on:submit|preventDefault={() => {
            $searchResponseStore = search();
        }}
    >
        <input class="size" bind:value={question} />
    </form>
</div>

<style>
    div {
        display: flex;
        width: 100%;
        justify-self: center;  
        align-items: center;
        transition: all 0.3s;
        position: relative;
    }

    .size{
        width: 50%;
        margin: 0;
        align-items: center;
        align-self: center;
        margin-left: 250px;
    }



    form,
    form input {
        width: 100%;
       
    }

    @media(max-width: 500px) {
        form,
        form input {
            width: 60%;
            margin-left: 100px;
            
        }
    }

    
</style>