// ENTER BUTTON

const enterBtn =
document.getElementById("enterBtn");

const introScreen =
document.getElementById("introScreen");

const mainSite =
document.getElementById("mainSite");

const music =
document.getElementById("bgMusic");

enterBtn.addEventListener("click",()=>{

introScreen.style.display="none";

mainSite.style.display="block";

// Music Start

music.currentTime = 109; // 1 min 49 sec

music.play().catch(()=>{});

// Typewriter Start

if(index===0){
typeWriter();
}

});



// TYPEWRITER

const message =

"Some people leave our lives, but never leave our hearts. Happy Birthday Titli ❤️";

let index = 0;

function typeWriter(){

if(index < message.length){

document.getElementById("typewriter")
.innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,50);

}

}



// COUNTDOWN

const birthdayDate =
new Date("June 26, 2026 00:00:00").getTime();

setInterval(()=>{

const now =
new Date().getTime();

const gap =
birthdayDate - now;

if(gap <= 0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

const days =
Math.floor(gap/(1000*60*60*24));

const hours =
Math.floor(
(gap%(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(gap%(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(gap%(1000*60))
/
1000
);

document.getElementById("days")
.innerHTML = days;

document.getElementById("hours")
.innerHTML = hours;

document.getElementById("minutes")
.innerHTML = minutes;

document.getElementById("seconds")
.innerHTML = seconds;

},1000);




// SLIDESHOW

let slideIndex = 0;

const slides =
document.querySelectorAll(".slide");

setInterval(()=>{

slides[slideIndex]
.classList.remove("active");

slideIndex++;

if(slideIndex >= slides.length){

slideIndex = 0;

}

slides[slideIndex]
.classList.add("active");

},3000);




// POPUP

const popup =
document.getElementById("popup");

document.getElementById("surpriseBtn")
.addEventListener("click",()=>{

popup.style.display="flex";

});

document.getElementById("closePopup")
.addEventListener("click",()=>{

popup.style.display="none";

});




// FLOATING HEARTS ❤️

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(Math.random()*5+5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);




// FLYING BUTTERFLIES 🦋

function createButterfly(){

const butterfly =
document.createElement("div");

butterfly.classList.add("butterfly");

butterfly.innerHTML = "🦋";

butterfly.style.left =
Math.random()*100 + "vw";

butterfly.style.bottom = "-50px";

butterfly.style.animationDuration =
(Math.random()*8+8)+"s";

document.body.appendChild(butterfly);

setTimeout(()=>{

butterfly.remove();

},15000);

}

setInterval(createButterfly,1500);




// FALLING PETALS 🌸

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML = "🌸";

petal.style.left =
Math.random()*100 + "vw";

petal.style.animationDuration =
(Math.random()*6+6)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,1000);





// BIRTHDAY CHECK

const today = new Date();

const month = today.getMonth() + 1;

const date = today.getDate();

if(month === 6 && date === 26){

document.querySelector(".countdown-section")
.innerHTML = `

<h1 style="color:#ff4d88;font-size:3rem;">
🎂 Happy Birthday Titli 🎂
</h1>

`;

}

for(let i=0;i<15;i++){

setTimeout(()=>{
createHeart();
},i*300);

}

for(let i=0;i<8;i++){

setTimeout(()=>{
createButterfly();
},i*500);

}

for(let i=0;i<10;i++){

setTimeout(()=>{
createPetal();
},i*400);

}
