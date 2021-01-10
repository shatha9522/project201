var score = 0;
var userName = prompt('What is your name?');
alert(' Hello ' + userName + ' Welcome to my page ');
alert('Please Answer these Qustions to see how much do you know me');
var favmovie = prompt('shawshak redumbtion Is My Favourite Movie ?');
console.log(favmovie);
if (favmovie.toLowerCase() === 'yes' || favmovie === 'y') {
  alert('correct! shawshak redumbtion is my favorite movie!');
  score++;
} else {
  alert('unfortunately your answer is not correct');
}

var favdish = prompt('Do I like Dounate ?');
console.log(favdish);
if (favdish.toLowerCase() === 'yes' || favdish === 'y') {
  alert('correct!');
  score++;
} else {
  alert('unfortunately, I like Dounate');
}

var favcolor = prompt('Do I Like purple ?');
console.log(favcolor);
if (favcolor.toLowerCase() === 'yes' || favcolor === 'y') {
  alert('correct! purple is my favorite Color!');
  score++;
}

else {
  alert('Your answer is not correct!');
}
var favtime = prompt('Do I like Day time');
console.log(favtime);
if (favtime.toLowerCase() === 'yes' || favtime === 'y') {
  alert('correct! Im a Day person');
  score++;
}
else {
  alert('oops! Im not a Night person');
}
var favflower = prompt('Do I like Jasmin ?');
console.log(favflower);
var myfavflower = 'jasmin';
if (favflower.toLowerCase() === 'yes' || favflower === 'y') {
  alert('Yup! I love jasmin');
  score++;
}

else {
  alert('Your answer is not correct!');

}


var age = 25;
for (var i = 0; i < 4; i++) {
  var num1 = prompt('How old am I?');
  console.log(num1);

  if (num1 == age) {

    alert('correct');
    score++;
    break;
  }
  else if (num1 > age) {
    alert('too High');
  }
  else {
    alert('too low');
  }
}
alert('correct answer is 25');

for (var i = 0; i < 4; i++) {
  var num2 = prompt('gusse my hight');
  console.log(num2)
  var hight = 160;
  if (num2 == hight) {
    alert('correct');
    break;
  }
  else if (num2 > hight) {
    alert('too High');
  }
  else {
    alert('too low')
  }
}
alert('correct answer is 160');


var favplace = ['amman', 'istanbul', 'maldives', 'jerusalem'];
var correctAnswer = false;
var answer1 = prompt('what is my favorit place?');
var j = 0
while (j <= 5 && !correctAnswer) {
  var answer1 = prompt('what is my favorit place ?');
  for (var i = 0; i < favplace.length; i++) {
    if (favplace[i] === answer1.toLowerCase()) {
      alert('correct answer!');
      correctAnswer = true;
      score++;
      break;
    }
  }
  j++;
}
alert('Your score is ' + score);










