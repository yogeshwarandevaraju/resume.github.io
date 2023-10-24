//selecting input box
var guessnumber=document.getElementById("guessnumber")
//Selecting result
var result=document.getElementById("result")
//selecting score 
var score =document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10+1)
var totalscore = 10
function check()
{
    var enterednumber = guessnumber.value
    if(randomnumber==enterednumber){
        console.log("Right")
        result.textContent="You Are Right"
        alert("You Won")
    }
    else{
        totalscore=totalscore-1
        score.textContent="Score : "+totalscore
        result.textContent=" You Are Wrong"
    }

}