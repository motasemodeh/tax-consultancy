// alert('Hello Dear welcom to my humble website');


// var greeting;
// var time = prompt('what time is?');
// if ( time < 12 ){
//     document.write('it is '+time+' good morning');
// } else if ( time < 18 ){
//     document.write('it is '+time+' good after noon');
// } else if ( time < 24 ){
//     document.write('it is '+time+' good evning');
// } else {
//     document.write('There Are 24 Hours In A Day');
// }


function greetUser() {
  var yesorno;

  yesorno = prompt("enter yes or no");
  while (yesorno !== "yes" && yesorno !== "no") {
    yesorno = prompt("Try again: enter yes or no");
  }
}

greetUser();

cats = prompt("how many cats do you have");
for ( var i = 0; i < cats; i++ ){
       document.write('<img  width=200px height=100px src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png">'+i+'<br>');
}



// function myFunction() {

//     var person = prompt("Please enter your favourite color", person);
//     if (person == "red") {
//       document.getElementById("demo").innerHTML =
//       "<p style='background-color:red; width:100%; height:200px'></p>";
//     } else if (person == "green"){
//       document.getElementById("demo").innerHTML =
//       "<p style='background-color:green; width:100%; height:200px'></p>";
//     }
//     else if (person == "black"){
//       document.getElementById("demo").innerHTML =
//       "<p style='background-color:black; width:100%; height:200px'></p>";
//     }
//     else if (person == "white"){
//       document.getElementById("demo").innerHTML =
//       "<p style='background-color:white; width:100%; height:200px'></p>";
//     }
//     else if (person == "black"){
//       document.getElementById("demo").innerHTML =
//       "<p style='background-color:black; width:100%; height:200px'></p>";
//     }
//     else if (person == "yellow"){
//       document.getElementById("demo").innerHTML =
//       "<p style='background-color:yellow; width:100%; height:200px'></p>";
//     }
//     else {
//       document.getElementById("demo").innerHTML =
//       "not available";
//     }
//   }
