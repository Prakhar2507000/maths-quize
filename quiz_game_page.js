function send()
{
    number1 = document.getElementById("number1").Value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number + " X "+ number2 +"</h4>"
input_box = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

// class 999999999

question_turn = "player1";
answer_turn = "player2";

}

function check()
{

get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
    if(answer_turn == "player1")
    {
        player1_score = +1;
        document.getElementById("player1_score").innerHTML = player1_score;

    }
    else
    {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }

}

if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
}
else
{
    question_turn = " ";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;

}

if(answer_turn == player2)
{
    answer_turn = "player2";
    document.getElementById.innerHTML = "answer turn - " + player2_name ;
}
else
{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ; 
}

}