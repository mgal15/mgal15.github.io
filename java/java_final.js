let points = parseInt(localStorage.getItem('points')) || 0;
let flag = 0;
document.getElementById('points').innerHTML = points;

function enter_one(){
    var answers = "Viking Union";
    var question = document.getElementById('q1');
    if(answers == question.value){
        document.getElementById('q1').style.fontWeight = "bold";
        document.getElementById('q1').style.color = "green";
        document.getElementById('q1').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head inside the building";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q1').style.fontWeight = "bold";
        document.getElementById('q1').style.color = "red";
        document.getElementById('q1').style.border = "1px red solid";
        hint1();
    }
}
function enter_two(){
    var answers = "Red Square";
    var question = document.getElementById('q2');
    if(answers == question.value){
        document.getElementById('q2').style.fontWeight = "bold";
        document.getElementById('q2').style.color = "green";
        document.getElementById('q2').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head there now!";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q2').style.fontWeight = "bold";
        document.getElementById('q2').style.color = "red";
        document.getElementById('q2').style.border = "1px red solid";
        hint1();
    }
}
function enter_three(){
    var answers = "Carver Gym";
    var question = document.getElementById('q3');
    if(answers == question.value){
        document.getElementById('q3').style.fontWeight = "bold";
        document.getElementById('q3').style.color = "green";
        document.getElementById('q3').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Stand Outside the gym!";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q3').style.fontWeight = "bold";
        document.getElementById('q3').style.color = "red";
        document.getElementById('q3').style.border = "1px red solid";
        hint1();
    }
    
}

function enter_four(){
    var answers = "Track Field";
    var question = document.getElementById('q4');
    if(answers == question.value){
        document.getElementById('q4').style.fontWeight = "bold";
        document.getElementById('q4').style.color = "green";
        document.getElementById('q4').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head over there!";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q4').style.fontWeight = "bold";
        document.getElementById('q4').style.color = "red";
        document.getElementById('q4').style.border = "1px red solid";
        hint1();
    }
}

function hint1(){
    if(flag != 1){
        points -= 1;
        flag = 1;
    updatepoints();
    }
}
function hint2(){
    if(flag != 2){
        points -= 3;
        flag = 2;
        updatepoints();
    }
}
function hint3(){
    if(flag != 3){
        points -= 5;
        flag = 3;
        updatepoints();
    }
}
function correctAns(){
    if(flag != 4){
        points += 10;
        flag = 4;
        updatepoints();
    }
}
function updatepoints(){
    document.getElementById('points').innerHTML = points;
    localStorage.setItem('points', points);
}
function resetpoints(){
    points = 0;
    localStorage.setItem('points',points);
    updatepoints();
}
document.getElementById('hintbutton1').addEventListener('click', function(){
    this.disabled = true;
});
document.getElementById('hintbutton2').addEventListener('click', function(){
    this.disabled = true;
});
document.getElementById('hintbutton3').addEventListener('click', function(){
    this.disabled = true;
});
