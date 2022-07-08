<script>
    export let video;
    import { chosen_video, video_player_is_active } from "./stores.js";
</script>

<div
class="grid-item zoom"
style="background-image: url({video.poster});"
on:click={() => {
  $chosen_video = video;
  $video_player_is_active = true;
}}
/>

<style>

.grid-item {
    cursor: pointer;
    background-color: var(--netflix-red-opacity);
    border: 1px solid var(black);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    height: 110px;
    width: 200px;
    background-size: cover; 
  }

.zoom {
transition: transform .2s; 

}

.zoom:hover {
  transform: scale(1.3); 
}

@media(width: 400px) {
  .grid-item{
    height: 83px;
    width: 150px;
  }
}

</style>