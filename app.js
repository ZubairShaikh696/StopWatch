var min=0;
var sec=0;
var msec=1;
var interval;
var minHeading =document.getElementById("min");
var secHeading =document.getElementById("sec");
var msecHeading =document.getElementById("msec");

var startt=document.getElementById("start")
var pausee=document.getElementById("pause")


function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=5){
        min++;
        sec=0;
        minHeading.innerHTML=min
    }
}


function start(){
    interval = setInterval(timer,10)
    startt.disabled=true;
    pausee.disabled=false
    
}
function pause(){
    clearInterval(interval)
    startt.disabled=false;
    pausee.disabled=true
}   
function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    pause();
    startt.disabled=false;
    pausee.disabled=false;
}

