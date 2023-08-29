function locationreload() {
    location.reload();
}

var n=Math.floor(Math.random()*6) +1;

var m=Math.random();
m=m*6;
m=Math.floor(m)+1;
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+n+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+m+".png");
// var name1=prompt("Enter Player 1");
// var name2=prompt("Enter Player 2");
// document.querySelectorAll("h3")[0].innerText=name1.toUpperCase();
// document.querySelectorAll("h3")[1].innerText=name2.toUpperCase();
if(m>n){
    document.querySelectorAll("h1")[0].innerText="  Player 2 won!🚩";
    document.querySelectorAll(".box2")[0].style.backgroundColor="green";
    document.querySelectorAll(".box1")[0].style.borderColor="rgb(165, 4, 4)";
    document.querySelectorAll(".box2")[0].style.backgroundColor.opacity="50%";
    document.querySelectorAll("h1")[0].style.color="rgb(165, 4, 4)";
}
else if(m==n){
    document.querySelectorAll("h1")[0].innerText="Its a draw!";
    document.querySelectorAll("h1")[0].style.color="grey";
    document.querySelectorAll(".box1")[0].style.borderColor="white";
    document.querySelectorAll(".box2")[0].style.borderColor="white";

    document.querySelectorAll(".titleBox")[0].style.borderColor="grey";
    document.querySelectorAll(".titleBox")[0].style.backgroundImage="linear-gradient( rgb(184, 169, 147),rgb(228, 221, 207))";
    document.querySelectorAll(".titleBox")[0].style.backgroundColor="black";


}
else{
    document.querySelectorAll(".box1")[0].style.backgroundColor="green";
    document.querySelectorAll(".box2")[0].style.borderColor="rgb(165, 4, 4)";

    document.querySelectorAll("h1")[0].innerText="🚩Player 1 won!";
    document.querySelectorAll("h1")[0].style.color="darkgreen";

}