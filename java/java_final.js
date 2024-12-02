let points = parseInt(localStorage.getItem('points')) || 0;
let flag = 0;
document.getElementById('points').innerHTML = points;

function enter_one(){
    var answers = "Viking Union";
    var ans1 = "viking union";
    var asn2 = "Viking union";
    var asn3 = "viking Union"
    var question = document.getElementById('q1');
    if(answers == question.value|| ans1 == question.value|| ans2== question.value|| ans3 == question.value){
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
function enter_onept1(){
    if(document.getElementById('Radio2').checked){
        document.getElementById('Radio2').style.fontWeight = "bold";
        document.getElementById('Radio2').style.color = "green";
        document.getElementById('Radio2').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Stay here to find the next place";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_onept2(){
    if(document.getElementById('Radio3').checked){
        document.getElementById('Radio3').style.fontWeight = "bold";
        document.getElementById('Radio3').style.color = "green";
        document.getElementById('Radio3').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Go on for the next resource";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_onept3(){
    if(document.getElementById('Radio4').checked){
        document.getElementById('Radio4').style.fontWeight = "bold";
        document.getElementById('Radio4').style.color = "green";
        document.getElementById('Radio4').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head back to the 6th floor (main) for the next clue";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_onept4(){
    if(document.getElementById('Radio4').checked){
        document.getElementById('Radio4').style.fontWeight = "bold";
        document.getElementById('Radio4').style.color = "green";
        document.getElementById('Radio4').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head outside for the next place to discover";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_two(){
    var answers = "Wilson Library";
    var answer1 = "wilson library";
    var answer2 = "wilson Library";
    var answer3 = 'Wilson library'
    var question = document.getElementById('secondQ');
    if(answers == question.value || answer1==question.value||answer2==question.value||answer3==question.value){
        document.getElementById('secondQ').style.fontWeight = "bold";
        document.getElementById('secondQ').style.color = "green";
        document.getElementById('secondQ').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head there now!";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('secondQ').style.fontWeight = "bold";
        document.getElementById('secondQ').style.color = "red";
        document.getElementById('secondQ').style.border = "1px red solid";
        points-=1;
        updatepoints();
    }
}
function enter_twopt1(){
    if(document.getElementById('Radio1').checked){
        document.getElementById('Radio1').style.fontWeight = "bold";
        document.getElementById('Radio1').style.color = "green";
        document.getElementById('Radio1').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head up the stairs towards Haggard Hall";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_twopt2(){
    if(document.getElementById('Radio2').checked){
        document.getElementById('Radio2').style.fontWeight = "bold";
        document.getElementById('Radio2').style.color = "green";
        document.getElementById('Radio2').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head outside for the next clue";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_three(){
    var answers = "Red Square";
    var ans1 = "red square";
    var ans2 = "red Square"
    var ans3 = "Red square";
    var question = document.getElementById('q3');
    if(answers == question.value|| ans1 == question.value|| ans2 == question.value||ans3 == question.value){
        document.getElementById('q3').style.fontWeight = "bold";
        document.getElementById('q3').style.color = "green";
        document.getElementById('q3').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Stand by the Fountain!";
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
function enter_threept1(){
    if(document.getElementById('Radio3').checked){
        document.getElementById('Radio3').style.fontWeight = "bold";
        document.getElementById('Radio3').style.color = "green";
        document.getElementById('Radio3').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head outside for the next clue";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}
function enter_four(){
    var answers = "Carver Gym";
    var ans1 = "carver gym";
    var ans2 = "carver Gym";
    var ans3 = "Carver gym";
    var question = document.getElementById('q4');
    if(answers == question.value || ans1 == question.value|| ans2 == question.value|| ans3 == question.value){
        document.getElementById('q4').style.fontWeight = "bold";
        document.getElementById('q4').style.color = "green";
        document.getElementById('q4').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Stand Outside the gym!";
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
function enter_fourpt1(){
    if(document.getElementById('Radio2').checked){
        document.getElementById('Radio2').style.fontWeight = "bold";
        document.getElementById('Radio2').style.color = "green";
        document.getElementById('Radio2').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head outside for the next clue";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
    }
}

function enter_six(){
    var answers = "Wade King";
    var ans1 = "wade King";
    var ans2 = "Wade king";
    var ans3 = "wade king";
    var question = document.getElementById('q6');
    if(answers == question.value|| ans1 == question.value|| ans2== question.value||ans3==question.value){
        document.getElementById('q6').style.fontWeight = "bold";
        document.getElementById('q6').style.color = "green";
        document.getElementById('q6').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! You've Finished!";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q6').style.fontWeight = "bold";
        document.getElementById('q6').style.color = "red";
        document.getElementById('q6').style.border = "1px red solid";
        hint1();
    }
}
function enter_five(){
    var answers = "Environmental Science";
    var ans1 = "environmental science";
    var ans2 = "environmental Science";
    var ans3 = "Environmental science";
    var question = document.getElementById('q5');
    if(answers == question.value || ans1 == question.value|| ans2 == question.value|| ans3== question.value){
        document.getElementById('q5').style.fontWeight = "bold";
        document.getElementById('q5').style.color = "green";
        document.getElementById('q5').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head over there!";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q5').style.fontWeight = "bold";
        document.getElementById('q5').style.color = "red";
        document.getElementById('q5').style.border = "1px red solid";
        hint1();
    }
}
function enter_fivept1(){
    if(document.getElementById('Radio3').checked){
        document.getElementById('Radio3').style.fontWeight = "bold";
        document.getElementById('Radio3').style.color = "green";
        document.getElementById('Radio3').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Head outside for the next clue";
        correctAns();
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        points-= 1;
        updatepoints();
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
