// Set the date we're counting down to
let countDownDate = new Date("Feb 27, 2021 09:00:00").getTime();
let finish = document.querySelector('.finish');


//Update countdown every one second
let x = setInterval(function() {

    //Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and countdown date
    let distance = countDownDate - now;
    console.log(distance)

    // Time calculation for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    let daysDis = document.querySelector('#days');
    daysDis.innerText = days;
    let hoursDis = document.querySelector('#hours');
    hoursDis.innerText = hours;
    let minDis = document.querySelector('#mins');
    minDis.innerText = minutes;
    let secDis = document.querySelector('#seconds');
    secDis.innerText = seconds;

    if(distance < 0) {
        clearInterval(x)
        finish.innerText = "Let's Start NodeJs & React";
    } else if (distance < 1779146250 && distance > 1523172088) {
        finish.innerText = "Countdown Start!";
    } else if (distance < 1523172088 && distance > 1379146250){
        finish.innerText = "Show me what you can do..."
    } else if (distance < 1379146250 && distance > 1186097500){
        finish.innerText = "Don't be relaxed :)"
    } else if(distance < 1186097500 && distance > 889573125) {
        finish.innerText = "1/3 of Time Expired";
    } else if (distance < 889573125 && distance > 593048750) {
        finish.innerText = 'You Half Your Time';
    } else if (distance < 593048750 && distance > 493048750) {
        finish.innerText = "You have only 1/3 Time";
    } else if (distance < 493048750 && distance > 393875779) {
        finish.innerText = "Time time time..."
    } else if (distance < 393875779 && distance > 217550311) {
        finish.innerText = "Your time is tithen..."
    } else if (distance < 217550311 && distance > 77550311) {
        finish.innerText = "Your time nearly up..."
    } else if (distance < 77550311 && distance > 27550311) {
        finish.innerText = "Hurry up!"
    } else if (distance < 27550311) {
        finish.innerText = "Are you ready..."
    }


}, 1000)