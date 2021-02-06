// Set the date we're counting down to
let countDownDate = new Date("Feb 20, 2021 09:00:00").getTime();
let finish = document.querySelector('.finish');

//Update countdown every one second
let x = setInterval(function() {

    //Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and countdown date
    let distance = countDownDate - now;

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
    } else if (distance < 1175503119) {
        finish.innerText = "Countdown Start";
    } else if (distance < 1057952807){
        finish.innerText = "Show me what you can do..."
    }else if (distance < 822852183){
        finish.innerText = "Don't be relaxed :)"
    } else if(distance < 783668746) {
        finish.innerText = "1/3 of Time Expired";
    } else if (distance < 587751559) {
        finish.innerText = 'You Half Your Time';
    } else if (distance < 391834373) {
        finish.innerText = "You have only 1/3 Time";
    } else if (distance < 293875779) {
        finish.innerText
    } else if (distance < 293875779) {
        finish.innerText = "Your time is tithen..."
    } else if (distance < 117550311) {
        finish.innerText = "Your time nearly up..."
    } else if (distance < 77550311) {
        finish.innerText = "Hurry up bro..."
    }


}, 1000)