//Generating random dice face
var num1=Math.floor(Math.random()*6)+1;
var img_source_1="images/dice"+num1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img_source_1);
var num2=Math.floor(Math.random()*6)+1;
var img_source_2="images/dice"+num2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img_source_2);
//Displaying the winner
if(num1>num2){
    document.querySelector("h2").innerHTML="Player 1 wins 🏆"
}
else if(num2>num1){
    document.querySelector("h2").innerHTML="Player 2 wins 🏆"
}
else{
    document.querySelector("h2").innerHTML="Draw 😐"
}