var speed = 90;
if (speed > 80) {
  console.log("Warning: You are driving above 80 mph");
} else {
  console.log("You are driving within the speed limit");
}

function getValidName() {

  var userName = prompt("what's your name?");
  while (userName === '' || userName === null ) {
    userName = prompt("Try again: what's your name?");
  }
return userName;
}

var validName = getValidName();

function getValidAge() {
 
 var userAge = prompt("how old are you?");
  while (userAge === '' || userAge === null ) {
    userAge = prompt("Try again: how old are you?");
  }
return userAge;
}


var validAge = getValidAge();


var message = alert('Hello my Name\'s ' + validName + ' And I\'m ' + validAge + ' years old');


function getNumberOfCats() {
var cats;
cats = prompt("how many cats do you have");
for ( var i = 0; i < cats; i++ ){
       document.write('<img  width=200px height=100px src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png">'+i+'<br>');

}
}
getNumberOfCats();