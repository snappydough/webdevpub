<script>
	import { Clock } from "./clock.js"
	
  	import {spring} from "svelte/motion";      
  	
	  

	

	let clock = new Clock(4,20)

	let minute = spring(clock.minute);


    let time 

	function tick() {
		time = clock.tick()
		time = time;
		minute.set(clock.minute + clock.hour*60); 
		console.log(clock.hour);
	}

	
	
	

	

	setInterval(tick, 1000)

	let alarm;
</script>

<div class="background">
<main > 

	

	<div class="clock-position"> 

		<div class="middle-shit"> <!--allt i den mellersta kolumnen-->
			<div class="body">

	
			
				<h1> 
					The Clocks: 
				</h1>
				

				<h2 id="names" class="kenya">
					Drip JEsus
				</h2>

				
		
				<div class="Drip" > 
					<img src="Jesus clock.png" alt="ok">
					<h2 id="clock" >
						{time}
					</h2>

						
				</div>

				<div class="buttons">
					<input type="time" bind:value = {alarm}>
				
					{#if clock.alarmIsActive == false}
					
					<button on:click={()=>{
						clock.activateAlarm()
						clock = clock;
						
						
		
						const time = alarm.split(':');
						let alarmHour = time[0];
						let alarmMinute = time[1];
		
						clock.setAlarm(alarmHour,alarmMinute);
						
		
					}}>
						set alarm
					</button>
		
					{:else  }
					
					<button on:click={()=>{
						clock.deactivateAlarm()
						clock = clock
					}}>
						Reset alarm
					</button>
		
					{/if}
		
					<button id="nice" on:click={()=>{
						tick()
					}}>
		
					+ 1 second
		
					</button>
					
				

				</div>
		
	
				
				
				
				
			</div>
		</div>

		

		<div class="left">

			<div class="body">

				<h2 id="names" class="sure">
					Bruh Clock
				</h2>

				<svg viewBox="-50 -50 100 100">
			
					<circle class="clock-face" r="48" />
		
					{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minutes}
						<line
							class="hour"
							y1="37"
							y2="45"
							transform="rotate({30 * minutes})"
						/>
		
						{#each [1, 2, 3, 4] as offset}
							<line
								class="hour"
								y1="40"
								y2="45"
								transform="rotate({6 * (minutes + offset)})"
							/>
						{/each}
					{/each}
		
					<line
						class="hour"
						y1="0"
						y2="35"
						transform="rotate({180 + 6 * $minute})"
					/>
		
					<line
						class="hour"
						y1="0"
						y2="35"
						transform="rotate({180 + (6 / 12) *  $minute})"
					/>
				</svg>

			</div>
		
		
	
	
		</div>
	
		



		<div class="right-stuff"> <!-- allt i den högra kolumnen-->

			<div class="body">


	
				<div class="Fire" >¨
					<h2 id="names" class="defender">
						DeFender of Hell
					</h2>
					
					<div id="clock2container">
						<img class="inside-border kant" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPU_aFm6gQr1tLQ0tHtJ6W26ZlyRJ2OlPeJW_JByRugvTrbDGeghBDk0lUKqazhbhWac&usqp=CAU" alt="kanske">
						<h2 id="clock2">
							{time}
						</h2>
					</div>
				
				</div>

			</div>

			
		</div>
	
	</div>

		{#if clock.alarmIsTriggered == true}
		
						<div class="centered">
							
							<div>
								<img class="ceppy" src="https://i.kym-cdn.com/entries/icons/mobile/000/028/931/Screen_Shot_2019-03-15_at_2.04.07_PM.jpg" alt="nej">
								<div class="centered">
									<p class="wakeup_message">
										Time to go to hell!
									</p>
								</div>
							</div>
							
						</div>
					{/if}

</main>
</div>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

	:global(body) {
		
		padding: 0;
		
		
		 
		
	
		
	}

	
	
	main {
		
		height: 100%;
		width: 100%;
		position: relative;
		
	}

	.background {
		background-image: url('https://www.thetrumpet.com/files/W1siZiIsIjIwMTcvMDMvMDcvODl5ZHN4ZWFpZF9maWxlIl0sWyJwIiwidGh1bWIiLCIxMDI0eCJdLFsicCIsImVuY29kZSIsImpwZyIsIi1xdWFsaXR5IDgwIl1d/d32c205e37e1c0a9/locus_11421.jpg.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		
		background-attachment: fixed;
		position: fixed;
		overflow: scroll;
 		height: 100%;
		width: 100%;
	}

	.body{
		place-items: center;
	}

	.clock-position{
		display: grid;
		gap: 0px;
		grid-template-columns: repeat(3, 1fr);

	}

	.left{
		place-items: center;
		text-align: center;
 		grid-column: 1;
		 width: 310px;
		margin-top: -400px;

	}

	.sure{
		text-align: center;
		position: center;
		
	}

	svg {
        width: 100%;
        height: 100%;
		
		
    }


  
	.clock-face {
        fill: rgb(134, 15, 84);
		background-image: url('https://i.pinimg.com/originals/9a/28/0b/9a280bee144758cb4ecf1792e33730c1.jpg');
        stroke: rgba(10, 5, 5, 0.945);
    }
  
	.hour {
        stroke: rgb(233, 229, 229);
        stroke-width: 0.8;
    }
	
	.middle-shit {
		place-items: center;
		text-align: center;

		
		grid-column: 2;
		

	}

	.buttons{
		position: relative;
		margin-top: -50px;
		z-index: 10000;
		
	}

	.right-stuff{
		place-items: center;
		text-align: center;
		
		
		margin-top: -550px;

		grid-column: 3;
		
		
	}

	.Fire {
		margin-top: 160px;
		
		

		
	}

	#clock2container{
		position: relative;
	}

	#clock2, .centered{
		
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: rgb(217, 217, 23);
		font-size: 4em;
		
	}

	.inside-border{
		border-color: rgb(9, 195, 241);
		border-style: solid;
		border-width: 5px;
		z-index: 0
		
	}
	
	.kant{
		height: 300px;
		width: 300px;
		
		border-color: orange;
		border-style: double;
		border-width: 5px;
		border-radius: 150px;
		z-index: 0;
	}

	.defender{
		z-index: 2;
		margin: 0px; 
		
		
	}

	h1 {
		font-family: 'Times New Roman';
		font-size: 6em;
		padding: 0;
		margin: 0;
		color: black;
		z-index: 1;

	}


	#names{
		margin-bottom: 0;

		font-size: 1.5em;
		font-family: 'Lobster';
		color: black;
		
		z-index: 1;
		
	}

	.kenya{
		margin-bottom: -50px !important;
		z-index: 10;
	}

	.Drip{
		position: relative;
		width: 900px;
		height: 450px;
		
		
		padding: 0;
		margin: 0;
		z-index: 0;
		max-width: 100%;
		max-height: 100%;
		place-items: center; 
		align-items: center;
		place-self: center;
		align-self: center;
		place-items: center;
		overflow: hidden;
	}

	



	#clock {
		position: absolute;
		
		left: 250px;
		top: 120px;
		font-size: 9em;
		padding: 0;
		margin: 0;
		color: rgb(107, 198, 240);
		
		
		
	}

	.Drip img {
		max-width: 100%;
		max-height: inherit;
		
		


		/*max-height: 100%*/
		
		
	}

	input{
		z-index: 0;
	}

	

	button{
		padding: 10;
		
		color: white;
		background-color: black;
		z-index: 1;
		
		
	}



	.wakeup_message{
		font-family:'Times New Roman';
		font-size: 60%;
		color: red;
	}

	@keyframes epileptic {
		
	}

	.ceppy {
		size: 10cm 20cm 10cm 20cm;

		animation: shake 0.5s;
		animation-iteration-count: infinite;
	}

	
	@keyframes shake {
		0% { transform: translate(1px, 1px) rotate(0deg); }
		10% { transform: translate(-1px, -2px) rotate(-1deg); }
		20% { transform: translate(-3px, 0px) rotate(1deg); }
		30% { transform: translate(3px, 2px) rotate(0deg); }
		40% { transform: translate(1px, -1px) rotate(1deg); }
		50% { transform: translate(-1px, 2px) rotate(-1deg); }
		60% { transform: translate(-3px, 1px) rotate(0deg); }
		70% { transform: translate(3px, 1px) rotate(-1deg); }
		80% { transform: translate(-1px, -1px) rotate(1deg); }
		90% { transform: translate(1px, 2px) rotate(0deg); }
		100% { transform: translate(1px, -2px) rotate(-1deg); }
	}

	#nice {
		font-family: "Comic Sans Ms";
		color: brown;
		background-color: pink;
		padding: 10;
	}

	@media (max-width: 800px) {
		.clock-position{
			
			display: flex;
			flex-direction: column;
		}

		.left{
			margin-top: 0px;
			margin-left: 40px;
		}

		

		.Drip{
			z-index: 0;
		}

		.Drip img{
			z-index: 0;
		}

		#clock{
			left: 90px;
			top: 50px;
			font-size: 5em;
		}

		.kenya{
			z-index: 10 !important;
			padding-bottom: 30px;
		}

		.buttons{
			margin-top: -250px;
			z-index: 1;
		}

		.ceppy{
			z-index: 0;
		}

		.wakeup_message{
			z-index: 5; 
			font-size: 0.3em;
			margin-top: -82px;
		}

		.right-stuff{
			margin-top: -130px;
		}

		


	}



	

	
	

	
	
</style>
	
