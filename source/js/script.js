let $ = document;
let hourElement = $.getElementById('hour');
let minuteElement = $.getElementById('minute');
let secondsElement = $.getElementById('seconds');

setInterval(function(){

    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    
    // if(hour < 10){
    //     hour = "0" + hour;
    // }
    
    // if(minutes < 10){
    //     minutes = "0" + minutes;
    // }
    
    // if(seconds < 10){
    //     seconds = "0" + seconds;
    // }
    //====================================
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}, 1000)