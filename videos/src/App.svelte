<script>
  import { video_player_is_active } from "./stores.js";
  import { Button, Overlay } from "svelte-materialify";
  import { videos } from "./videos.js";
  import Player from "./Player.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  let is_fullscreen = false;
</script>

<main>
  <h1 id="title">SnappyDough TV
    <img src="./Snappydough.jpg" alt="logo">
  </h1>

  

  <div class="column">
    <div class="grid">
    
    </div>

    <p class="row category">Funny</p>

    <div class="row">
      <Thumbnail video={videos[0]} />
      <Thumbnail video={videos[1]} />
      <Thumbnail video={videos[2]} />
      <Thumbnail video={videos[3]} />
      <Thumbnail video={videos[4]} />
      <Thumbnail video={videos[5]} />
    </div>

    <p class="row category">Not Funny</p>

    <div class="row">
      <Thumbnail video={videos[7]} />
      <Thumbnail video={videos[8]} />
      <Thumbnail video={videos[9]} />
      <Thumbnail video={videos[10]} />
      <Thumbnail video={videos[11]} />
      <Thumbnail video={videos[12]} />
    </div>

  
    <p class="row category">True Crime</p>

    <div class="row">
      <Thumbnail video={videos[10]} />
      <Thumbnail video={videos[3]} />
      <Thumbnail video={videos[7]} />
      <Thumbnail video={videos[6]} />
      <Thumbnail video={videos[12]} />
      <Thumbnail video={videos[1]} />
    </div>

    <p class="row category">Snappy Originals</p>

    <div class="row">
      <Thumbnail video={videos[12]} />
      <Thumbnail video={videos[11]} />
      <Thumbnail video={videos[1]} />
      <Thumbnail video={videos[5]} />
      <Thumbnail video={videos[0]} />
      <Thumbnail video={videos[4]} />
    </div>

    <p class="row category">Yes</p>

    <div class="row">
      <Thumbnail video={videos[6]} />
      <Thumbnail video={videos[9]} />
      <Thumbnail video={videos[4]} />
      <Thumbnail video={videos[3]} />
      <Thumbnail video={videos[11]} />
      <Thumbnail video={videos[5]} />
    </div>

    <p class="row category">IDK lol</p>

    <div class="row bonus">
      <Thumbnail video={videos[5]} />
      <Thumbnail video={videos[4]} />
      <Thumbnail video={videos[8]} />
      <Thumbnail video={videos[2]} />
      <Thumbnail video={videos[1]} />
      <Thumbnail video={videos[0]} />
    </div>
    
   

    

    

    

  </div>
  <Overlay
    opacity={is_fullscreen ? 1 : 0.7}
    color="black"
    active={$video_player_is_active}
    on:click={() => {
      $video_player_is_active = false;
    }}
  >
    <div
      id="video"
      class:fullscreen={is_fullscreen == true}
      on:click={(e) => {
        e.stopPropagation();
      }}
    >
      <div id="close">
        <Button
          class="error-color"
          size="small"
          on:click={() => {
            $video_player_is_active = false;
          }}
        >
          Close
        </Button>
      </div>
      <div id="fullscreen">
        <Button
          size="small"
          class="primary-color"
          on:click={() => {
            is_fullscreen = !is_fullscreen;
            
            if (document.activeElement != document.body)
              document.activeElement.blur();
          }}
        >
          {is_fullscreen ? "Small Mode" : "Big Mode"}
        </Button>
      </div>

      {#if is_fullscreen}
        <div id="Bigger_Mode">
          <Button
            size="small"
            class="secondary-color"
            on:click={() => {
            
              if (document.activeElement != document.body)
                document.activeElement.blur();

              let div = document.getElementById("vid");
              if (div.requestFullscreen) div.requestFullscreen();
              else if (div.webkitRequestFullscreen)
                div.webkitRequestFullscreen();
              else if (div.msRequestFullScreen) div.msRequestFullScreen();
            }}
          >
            {"Bigger_Mode"}
          </Button>
        </div>
      {/if}

      <Player />
    </div>
  </Overlay>

  <src />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Zen+Antique&display=swap");

  :global(:root) {
    --netflix-red: #e50914;
    --netflix-red-opacity: rgba(229, 9, 20, 0.3);
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }

  main {
    min-height: 100vh;
    width: 100vw;
    background: rgb(212, 131, 49);
    padding-left: 5%;
    padding-right: 5%;
    overflow-y: hidden;
    
    
  }

  img{
    align-self: center;
    height: 100%;
    width: 10%;
    z-index: 5;
  }

  .column {
    padding-top: 100px;
    display: grid;
    gap: 0px;
    
    grid-template-columns: 1fr;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr;
    grid-row-gap: 5px;
   
  }

  .bonus {
    margin-bottom: 20px;
  }

  #video {
    position: fixed;
    transition: all 0.3s ease-out;
    left: 15%;
    right: 15%;
    top: 15%;
    bottom: 15%;
  }

  .category {
    
    align-self: center;
    font-family: "Zen Antique";
    margin-top: 35px;
    margin-bottom: 0;
    
    
  }

  

  #video.fullscreen {
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
  }

  #video.fullscreen #Bigger_Mode {
    position: absolute;
    top: 10px; 
    left: 50%; 

    transform: translate(-50%, 0);
    z-index: 100;
  }
  #video #close {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 100;
  }

  #video #fullscreen {
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 100;
  }

  #video.fullscreen #close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
  }

  #video.fullscreen #fullscreen {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 100;
  }

  #title {
    color: white;
    font-size: 62px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 0px;
    background-color: rgb(13, 60, 230);
    height: 100px;
    padding-left: calc(5% + 5px);
    z-index: 5;
  }

  @media(max-width: 400px) {

   

   
    #title {
      font-size: 35px;
      height: 70px;
      width: 390px;
    
      align-self: center;
      padding: 0;
      
    }

    .column{
      width: 300px;
      padding-top: 80px;
    }


    img{
      width: 95px;
    }

    #video{
      bottom: 40%;
      
    }

   

  

     
  }
    


  
</style>
