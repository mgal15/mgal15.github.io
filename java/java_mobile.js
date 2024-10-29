function enter_one(){
    var answers = "bruce nauman";
    var question = document.getElementById('q1');
    if(answers == question.value){
        document.getElementById('q1').style.fontWeight = "bold";
        document.getElementById('q1').style.color = "green";
        document.getElementById('q1').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Great Job";
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q1').style.fontWeight = "bold";
        document.getElementById('q1').style.color = "red";
        document.getElementById('q1').style.border = "1px red solid";
    }
}
function enter_two(){
    var answers = "tom otterness";
    var question = document.getElementById('q2');
    if(answers == question.value){
        document.getElementById('q2').style.fontWeight = "bold";
        document.getElementById('q2').style.color = "green";
        document.getElementById('q2').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Great Job";
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q2').style.fontWeight = "bold";
        document.getElementById('q2').style.color = "red";
        document.getElementById('q2').style.border = "1px red solid";
    }
}
function enter_three(){
    var answers = "richard serra";
    var question = document.getElementById('q3');
    if(answers == question.value){
        document.getElementById('q3').style.fontWeight = "bold";
        document.getElementById('q3').style.color = "green";
        document.getElementById('q3').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Great Job";
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q3').style.fontWeight = "bold";
        document.getElementById('q3').style.color = "red";
        document.getElementById('q3').style.border = "1px red solid";
    }
    
}

function enter_four(){
    var answers = "lloyd hamrol";
    var question = document.getElementById('q4');
    if(answers == question.value){
        document.getElementById('q4').style.fontWeight = "bold";
        document.getElementById('q4').style.color = "green";
        document.getElementById('q4').style.border = "1px green solid";
        document.getElementById('next_button').style.display = "block";
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Correct! Great Job";
    } else {
        document.getElementById('message').style.display = "inline";
        document.getElementById('message').style.color = "red";
        document.getElementById('message').textContent = "Wrong, try again";
        document.getElementById('q4').style.fontWeight = "bold";
        document.getElementById('q4').style.color = "red";
        document.getElementById('q4').style.border = "1px red solid";
    }
    
}