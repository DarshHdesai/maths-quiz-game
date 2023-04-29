player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");

p1_score =   0;
p2_score =   0;

document.getElementById("p1_name").innerHTML = player1_name + ":";
document.getElementById("p2_name").innerHTML = player2_name + ":";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score; 

document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
     player1 = document.getElementById("player1").value;
     player2 = document.getElementById("player2").value;
     actual_answer = parseInt(number1) * parseInt(number2);



     question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='check()>Check</button>'";
row = question_number + input_box + check_button ;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

}
