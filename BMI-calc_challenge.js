//Create a function that calculates BMI based on the inputs given.


//Create your function below this line.

function bmiCalculator(weight,height){
 let bmiCalc = Math.floor(weight/Math.pow(height,2));
 return bmiCalc;
}







/******* HINT *******/

//If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); //bmi should equal around 20 in this case.



