function enter_one(){
    var answers = 1;
    var correct_ans = 0;
    var question = document.querySelector('input[name=q1]:checked');
    if(question && question.value == 'r'+ answers){
        correct_ans++;
        document.getElementById('q1_r1').parentNode.style.color = "green";
        document.getElementById('q1_r1').parentNode.style.fontWeight = 'bold';
        document.getElementById('img1').src = "/images/walk.png";
        document.getElementById('q1_r1').parentNode.textContent = "Bruce Nauman is correct!"
        document.getElementById('q1_r2').parentNode.textContent = "He created this piece in 1989";
        document.getElementById('q1_r4').parentNode.textContent = "Also is called the 'stairs to nowhere'";
        document.getElementById('q1_r3').parentNode.textContent = "Title is Stadium Piece";
    }
}
function enter_two(){
    var answers = 3;
    var question = document.querySelector('input[name=q2]:checked');
    if(question && question.value == 'r'+ answers){
        document.getElementById('q2_r1').parentNode.style.color = "green";
        document.getElementById('q2_r1').parentNode.style.fontWeight = 'bold';
        document.getElementById('img2').src = "/images/walk.png";
        document.getElementById('q2_r1').parentNode.textContent = "Tom Otterness is correct!"
        document.getElementById('q2_r2').parentNode.textContent = "He created this piece in 1999";
        document.getElementById('q2_r4').parentNode.textContent = "He placed each figuring where he once sat";
        document.getElementById('q2_r3').parentNode.textContent = "Title is Feats of Strength";
    }
}
function enter_three(){
    var answers = 2;
    var question = document.querySelector('input[name=q3]:checked');
    if(question && question.value == 'r'+ answers){
        document.getElementById('q3_r1').parentNode.style.color = "green";
        document.getElementById('q3_r1').parentNode.style.fontWeight = 'bold';
        document.getElementById('img3').src = "/images/walk.png";
        document.getElementById('q3_r1').parentNode.textContent = "Richard Serra is correct!"
        document.getElementById('q3_r2').parentNode.textContent = "He created this piece in 1979-80";
        document.getElementById('q3_r4').parentNode.textContent = "Based on the confluence of college pedestrian traffic at the base of Red Square";
        document.getElementById('q3_r3').parentNode.textContent = "The Title is Wrights Triangle";
    }
}