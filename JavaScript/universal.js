//Donation section 

let fiveBtn = document.getElementById("£5Button");
let tenBtn = document.getElementById("£10Button");
let twoFiveBtn = document.getElementById("£25Button"); 
let donationDisplay = document.getElementById("donationDisplay");

function donateFive() {
    document.getElementById("donationDisplay").innerHTML = "£5";
}

function donateTen() {
    document.getElementById("donationDisplay").innerHTML = "£10";
}

function donateTwoFive() {
    document.getElementById("donationDisplay").innerHTML = "£25";
}

//Image Slider

let pauseBtn = document.getElementById("pause");

let isPaused = 0;

function animationPause() {
    if (isPaused === 0) {
    document.getElementById("slide1").style.animationPlayState = 'paused';
    document.getElementById("slide2").style.animationPlayState = 'paused';
    document.getElementById("slide3").style.animationPlayState = 'paused';
    isPaused = 1;
    } else if (isPaused === 1) {
        document.getElementById("slide1").style.animationPlayState = 'running';
        document.getElementById("slide2").style.animationPlayState = 'running';
        document.getElementById("slide3").style.animationPlayState = 'running';
        isPaused = 0;
    } 
} 

