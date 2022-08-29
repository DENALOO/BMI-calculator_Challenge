//create a "Love Calculator" that randomly generates a percentage and returns the percentage in a string.



prompt("What is your name?");
prompt("What is your crushes name?");
function calcLove(){
let LovePerc = Math.floor(Math.random()*100+1);
return(LovePerc);
}

alert("You and your crush are a " + calcLove()+"%" +" match");



