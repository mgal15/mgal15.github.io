document.getElementById("name").onclick = function() {nameFunction()};
document.getElementById("gif1").onclick = function() {gif1Function()};
document.getElementById("gif2").onclick = function() {gif2Function()};
document.getElementById("fav1").onclick = function() {fav1Function()};
document.getElementById("fav2").onclick = function() {fav2Function()};
document.getElementById("fav3").onclick = function() {fav3Function()};

function nameFunction(){
    document.getElementById("name").textContent = "Angry";
    document.querySelector("h1").style.color = "#EC1625";
    document.getElementById("name").style.fontFamily="Metal mania"
}

function gif1Function(){
    document.getElementById("gif1").src = "fire.webp"
    document.getElementById("gif2").src = "fire.webp"
    document.body.style.backgroundColor = "black"
    document.querySelector("h3").textContent = "Things that make me Angry";
    document.querySelector("h3").style.color="#EC1625";
    document.querySelector("h3").style.fontFamily = "IM Fell DW Pica SC";
    document.getElementById("music").src = "angry_music.mp3";
    document.querySelector("footer").querySelector("p").style.color = "#EC1625"
}

function gif2Function(){
    document.getElementById("gif2").src = "fire.webp"
    document.getElementById("gif1").src = "fire.webp"
    document.body.style.backgroundColor = "black"
    document.querySelector("h3").textContent = "Things that make me Angry";
    document.querySelector("h3").style.color="#EC1625";
    document.querySelector("h3").style.fontFamily = "IM Fell DW Pica SC";
    document.getElementById("music").src = "angry_music.mp3";
    document.querySelector("footer").querySelector("p").style.color = "#EC1625"
}

function fav1Function(){
    document.getElementById("img1").src = "slow-driver.jpg";
    document.getElementById("one").style.backgroundColor = "#E31C12";
    document.getElementById("fav1").textContent = "Bad Drivers";
    document.getElementById("fav1").style.color= "black";
    document.getElementById("fav1").style.fontFamily = "IM Fell DW Pica SC";
    document.getElementById("fav1").style.fontWeight = "900";
}

function fav2Function(){
    document.getElementById("img2").src = "rude customers.jpg";
    document.getElementById("two").style.backgroundColor = "#E31C12";
    document.getElementById("fav2").textContent = "Rude Customers";
    document.getElementById("fav2").style.color= "black";
    document.getElementById("fav2").style.fontFamily = "IM Fell DW Pica SC";
    document.getElementById("fav2").style.fontWeight = "900";
    document.getElementById("img25").style.display = "none";
    document.getElementsById("twoimages").style.display.gap = "none";
}

function fav3Function(){
    document.getElementById("img3").src = "loud-chewing.png";
    document.getElementById("three").style.backgroundColor = "#E31C12";
    document.getElementById("fav3").textContent = "Loud Chewing";
    document.getElementById("fav3").style.color= "black";
    document.getElementById("fav3").style.fontFamily = "IM Fell DW Pica SC";
    document.getElementById("fav3").style.fontWeight = "900";
}
