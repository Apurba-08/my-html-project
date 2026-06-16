// =======================
// COUNTDOWN
// =======================

const targetDate = new Date("June 26, 2026 00:00:00").getTime();

const countdownScreen = document.getElementById("countdown-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const mainWebsite = document.getElementById("mainWebsite");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const finalCount = document.getElementById("finalCount");
const enterBtn = document.getElementById("enterBtn");

let countdownFinished = false;

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0 && !countdownFinished) {

        countdownFinished = true;
        clearInterval(timer);

        countdownScreen.style.display = "none";
        birthdayScreen.style.display = "flex";

        let count = 5;

        finalCount.innerText = count;

        const miniTimer = setInterval(() => {

            count--;

            if (count > 0) {
                finalCount.innerText = count;
            } else {

                clearInterval(miniTimer);

                document.getElementById("mini-countdown").style.display = "none";

                enterBtn.style.display = "inline-block";
            }

        }, 1000);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60))
        / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;

}, 1000);


// =======================
// ENTER BUTTON
// =======================

enterBtn.addEventListener("click", () => {

    birthdayScreen.style.display = "none";
    mainWebsite.style.display = "block";

    const music = document.getElementById("bgMusic");

    music.currentTime = 19;

    music.play().catch(() => {
        console.log("Music autoplay blocked");
    });

});


// =======================
// TYPEWRITER
// =======================

const text = `

Happy Birthday Titli ❤️

Some people leave,
but the memories never do.

Today is your special day.

I hope life gives you
every happiness you deserve.

Stay happy.
Stay blessed.

Forever wishing the best for you.

- Subho

`;

let index = 0;

function typeWriter() {

    const target = document.getElementById("typewriter");

    if (!target) return;

    if (index < text.length) {

        target.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 50);

    }

}


// =======================
// START TYPEWRITER
// =======================

enterBtn.addEventListener("click", () => {

    setTimeout(() => {

        document.getElementById("typewriter").innerHTML = "";

        index = 0;

        typeWriter();

    }, 500);

});


// =====================
// PREMIUM CAROUSEL
// =====================

const photos =
document.querySelectorAll(".carousel-img");

let current = 0;

function updateCarousel(){

photos.forEach(photo=>{

photo.className =
"carousel-img hidden";

});

photos[current].className =
"carousel-img active";

photos[
(current - 1 + photos.length)
% photos.length
].className =
"carousel-img left";

photos[
(current + 1)
% photos.length
].className =
"carousel-img right";

createPetalBurst();

}

for(let i=0;i<8;i++){

const petal =
document.createElement("div");

petal.classList.add("burst-petal");

petal.innerHTML="🌸";

petal.style.left="50%";
petal.style.top="50%";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},2000);

}

updateCarousel();

setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

updateCarousel();

},3500);


// =======================
// HEARTS
// =======================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    document
        .getElementById("heart-container")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}

setInterval(createHeart, 900);


// =======================
// FLOWERS
// =======================

function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    document
        .getElementById("flower-container")
        .appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 15000);

}

setInterval(createFlower, 1400);


// =======================
// BUTTERFLIES
// =======================

function createButterfly() {

    const butterfly = document.createElement("div");

    butterfly.classList.add("butterfly");

    butterfly.innerHTML = "🦋";

    butterfly.style.left = Math.random() * 100 + "vw";

    butterfly.style.animationDuration =
        (10 + Math.random() * 6) + "s";

    document
        .getElementById("butterfly-container")
        .appendChild(butterfly);

    setTimeout(() => {

        butterfly.remove();

    }, 16000);

}

setInterval(createButterfly, 1800);


// =======================
// POPUP
// =======================

// const surpriseBtn =
//     document.getElementById("surpriseBtn");

// const popup =
//     document.getElementById("popup");

// const closePopup =
//     document.getElementById("closePopup");

// surpriseBtn.addEventListener("click", () => {

//     popup.style.display = "flex";

// });

surpriseBtn.addEventListener("click",()=>{

popup.style.display="flex";

document
.querySelector(".popup-content")
.classList.add("pop-zoom");

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});


// =======================
// AUTO OPEN IF DATE PASSED
// =======================

if (new Date().getTime() > targetDate) {

    countdownScreen.style.display = "none";
    birthdayScreen.style.display = "flex";

}

function createSparkle(){

const sparkle =
document.createElement("div");

sparkle.classList.add("sparkle");

sparkle.innerHTML = "✨";

sparkle.style.left =
Math.random()*100 + "vw";

sparkle.style.animationDuration =
(5 + Math.random()*5) + "s";

document
.getElementById("sparkle-container")
.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},10000);

}

setInterval(createSparkle,1200);

// =========================
// PETAL BURST EFFECT
// =========================

function createPetalBurst(){

for(let i=0;i<10;i++){

const petal =
document.createElement("div");

petal.innerHTML = "🌸";

petal.classList.add("burst-petal");

const x =
(Math.random()*400)-200;

const y =
(Math.random()*400)-200;

petal.style.setProperty(
"--x",
`${x}px`
);

petal.style.setProperty(
"--y",
`${y}px`
);

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},2000);

}

}
