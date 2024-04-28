let timer = false // variable to ke track of wheather the timer is currently running or not

//initializing milisecond,second,minute, and hour to 0 
let misec = 0
let sec = 0
let min = 0
let hr = 0

//functoin will invoke on click of start button to start the timer
const start = () =>{
    timer = true;
    setTimer()
}

//functoin will invoke on click of stop button to pause the timer
const stop = () =>{
    timer = false
    setTimer()
}

//functoin will invoke on click of reset button to reset
const reset = () =>{
    location.reload();
}

//function to start milisecond,second,minute, and hour
const setTimer = () =>{
    if(timer){
        misec += 1
        if(misec == 100){
            sec += 1
            misec = 0
        }
        if(sec==60){
            min += 1
            sec = 0
        }
        if(min == 60){
            hr += 1
            min = 0
        }

        //add extra zero to make timer more prettier
        let newMisec = misec;
        let newSec = sec;
        let newMin = min;
        let newHr = hr;
        if(misec<10){
            newMisec = "00"+misec
        }
        if(misec<100 && misec>9){
            newMisec = "0"+misec
        }
        if(sec<10){
            newSec = "0"+sec
        }
        if(min<10){
            newMin = "0"+min
        }
        if(hr<10){
            newHr = "0"+hr
        }

        //creating a loop to continiously run the timer after 10 milisecond delay
        setTimeout("setTimer()",10)
        
        //updating the html elements to display timer value 
        document.getElementById("misec").innerHTML=newMisec;
        document.getElementById("sec").innerHTML=newSec;
        document.getElementById("min").innerHTML=newMin;
        document.getElementById("hr").innerHTML=newHr;
    }
}