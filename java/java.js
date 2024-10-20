
// $(document).ready(function(){

//     $('button').click(function () {
//         $('#name1').css('color', '#GGG');
//     });


// });
document.getElementById("image").onclick = function() {func()};
//document.getElementById("image").onclick = function() {func1()};

function func(){
    const name = document.getElementById("name1");
    if (name.innerHTML == "Daytime"){
        name.innerHTML = "Nighttime"
        name.style.color = "white";
        document.querySelector("header").style.backgroundColor = "black";
         document.querySelector("header").style.backgroundImage = "linear-gradient(rgba(106,13,131,.7), rgba(238,93,108, .4)), url(moon1.png)";
        document.querySelector("main").style.backgroundColor = "black";
        document.querySelector("main").style.backgroundImage = "linear-gradient(rgba(238,93,108, .4), rgba(0,0,0,.4))";
        document.querySelector("header").querySelector("p").textContent = "Animals that come out during the night are called nocturnal animals. They sleep during the day and are active during the night. Check out some animals by clicking on their pictures. To switch back to day time, hit the switch on the right.";
        document.getElementById("logo1").style.color = "white";
        document.getElementById("deer").src = "racoon.png"
        document.getElementById("")
    } else {
        name.textContent = "Daytime"
        //document.body.style.backgroundColor = "rgb(238, 234, 151)";
        name.style.color = "rgb(185, 185, 23)";
        document.querySelector("header").style.backgroundColor = "lightyellow";
        document.querySelector("header").style.backgroundImage = "linear-gradient(rgba(241, 93, 144, 0.24), rgba(232, 207, 47, 0.9)), url(sun1.png)";
        document.querySelector("main").style.backgroundImage = "linear-gradient(rgba(232, 207, 47, 0.9), rgba(232, 165, 182, 0.3))";
        document.querySelector("main").style.backgroundColor = "lightgreen";
        document.querySelector("header").querySelector("p").textContent = "Animals that come out during the day are called diurnal animals. They sleep during the night and are active in the morning. Check out some by clicking on the image of the animal to learn more about. Then when you want to switch to night time, click the switch to the right.";
        document.getElementById("logo1").style.color = "rgb(185, 185, 23)";
    } 

    
}
// function func1(){
//     const head = document.header;
//     if (head.style.backgroundColor == "lightyellow"){
//         head.style.backgroundColor = 'blue';
//         //name.style.color = "white";
//     } else {
//         head.style.backgroundColor = "lightyellow";

//     } 
// }





