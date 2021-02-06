// Set the date we're counting down to
let countDownDate = new Date("Feb 20, 2021 09:00:00").getTime();

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


}, 1000)