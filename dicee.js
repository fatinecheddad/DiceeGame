var randomNumber1=Math.trunc(Math.random()*6)+1;
var randomNumber2=Math.trunc(Math.random()*6)+1;
var s1="images/dice"+randomNumber1+".png";
var s2="images/dice"+randomNumber2+".png";

document.querySelector(".img1 ").setAttribute("src",s1);
document.querySelector(".img2 ").setAttribute("src",s2);

if(randomNumber1>randomNumber2){
  document.querySelector(".container .title").textContent="Player 1 wins 🚩";


}
else if (randomNumber1<randomNumber2) {
  document.querySelector(".container .title").textContent="Player 2 wins 🚩";



}
else  {
  document.querySelector(".container .title").textContent="Draw 🚩";


}
