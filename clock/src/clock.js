 
export class Clock {

    hour;
    minute;
    alarmIsActive;
    alarmIsTriggered;

    constructor(hour, minute){
        if (hour < 24 && hour >= 0){
            this.hour = hour
        }
        else{
            console.log("Error: hour value must be >= 0 and < 24")
        }
       
        if (minute < 60 && minute >= 0){
            this.minute = minute
        }
        else{
            console.log("Error: minute value must be >= 0 and < 60")
        }
 
        this.alarmIsActive = false;
        this.alarmIsTriggered = false;
        this.alarmMinute;
        this.alarmHour;
        
    }
 
    tick(){
        this.minute++
 
        if (this.minute >= 60){
            this.hour++
            this.minute = 0
        }
        if (this.hour >= 24){
            this.hour = 0
        }
 
       
        if (this.alarmIsActive && ((this.minute == this.alarmMinute && this.hour == this.alarmHour))){
           this.alarmIsTriggered = true; 
        }
       
        if (this.hour >= 0 && this.hour < 10 && this.minute >= 0 && this.minute < 10){
            return ("0" + this.hour + ":" + "0" + this.minute)
        }
        else if (this.hour >= 0 && this.hour < 10){
            return("0" + this.hour + ":" + this.minute)
        }
        else if (this.minute >= 0 && this.minute < 10){
            return(this.hour + ":" + "0" + this.minute)
        }            
        else {
            return(this.hour + ":" + this.minute)
        }

        
 
        
    }
 
    setAlarm(hour, minute){
        this.alarmIsActive = true;
        this.alarmHour = hour;
        this.alarmMinute = minute;
        this.alarmIsTriggered = false;
    }


    activateAlarm(){
        this.alarmIsActive = true;
    }
    
    deactivateAlarm(){
        this.alarmIsActive = false;
        this.alarmIsTriggered = false;
    }
 
    get alarmIsActive(){
        return this.alarmIsActive;
    }

    get alarmIsTriggered(){
        return this.alarmIsTriggered;
    }

    






    






    
}
