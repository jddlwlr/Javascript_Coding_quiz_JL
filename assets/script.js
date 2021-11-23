// // Targeting html elements
var startBtn = $('#startButton');
var timerEl = $('#timerDisp')
var score = 0;
var timeLeft = 0;
var scoreEl = $('#scoreEl')

$('#name').hide();
$('.btn').hide();

// // Question content Array
var questions = [
  {
    question: "What does a function do?",
    options: ["Addition", "subtraction", "Anything you need it to", "all of the above"],
    correct: "all of the above"
  },
  {
    question: "Is jquery better than vanilla javascript",
    options: ["yes", "no", "maybe", "depends who you ask",],
    correct: "depends who you ask"
  },
  {
    question: "The setItem takes what two inputs?",
    options: ["KeyName and KeyValue", "Null and Void", "Boolean and Null", "depends who you ask",],
    correct: "KeyName and KeyValue"
  },
]


$(startBtn).click(function () {
  next();
  $(startBtn).hide();
  startTimer();
  $('.btn').show();

});
var counter = 0;
// Starts the timer countdown 
function startTimer(){

       counter = 60;
      var interval = setInterval(function() {
          counter--;
        
          if (counter <= 0) {
              clearInterval(interval);
              $(timerEl).text("Time's Up!");
              $(startBtn).show();
              $(startBtn).text("Try Again?") 
              // endGame ();
          }
          else{
            $(timerEl).text(counter);
          }
    
      }, 1000);
      
};

//stop the timer to end the game show name form
function endGame() {
    clearInterval(counter);
    $('#name').show

}

//store the scores on local storage
function saveScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("Name",  $('#name').value);
    getScore();
}




//clears the score saved locally
function clearScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("name", $('#name').value);

    resetGame();
}

//reset the game 
function resetGame() {
    clearInterval(counter);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    counter = null;

    timerEl = timeLeft;
}
// loops through and displays questions, accepts inputs to run other functions
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }


    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
  
        $('#answer1').text(questions[currentQuestion].options[i++]);
        $('#answer2').text(questions[currentQuestion].options[i++]);
        $('#answer3').text(questions[currentQuestion].options[i++]);
        $('#answer4').text(questions[currentQuestion].options[i++]);

        $('#questionEl').text(questions[currentQuestion].question);
        
    }
};

var currentQuestion = -1;
var answer1Val = '';

// event listener q 1 
$('#answer1').click((function (event) {
  event.preventDefault();
  var el = event.target;
  if (el.matches("#answer1") === true) {

    var chosenAnswer = 0;
    
    checkAnswer();
  }

  answer1Val = questions[currentQuestion].options[chosenAnswer];
  console.log(answer1Val);
}));

// event listener q2
$('#answer2').click((function (event) {
  event.preventDefault();
  var el = event.target;
  if (el.matches("#answer2") === true) {

    var chosenAnswer = 1;
    
    checkAnswer();
  }

  answer1Val = questions[currentQuestion].options[chosenAnswer];
  console.log(answer1Val);
}));

// event listener a3
$('#answer3').click((function (event) {
  event.preventDefault();
  var el = event.target;
  if (el.matches("#answer3") === true) {

    var chosenAnswer = 2;
    
    checkAnswer();
  }

  answer1Val = questions[currentQuestion].options[chosenAnswer];
  console.log(answer1Val);
}));

//event listener a4
$('#answer4').click((function (event) {
  event.preventDefault();
  var el = event.target;
  if (el.matches("#answer4") === true) {

    var chosenAnswer = 3;
    
    checkAnswer();
  }

  answer1Val = questions[currentQuestion].options[chosenAnswer];
  console.log(answer1Val);
}));

// Answer Checker 
function checkAnswer (){
 if (answer1Val == questions[currentQuestion].correct) {
   score += 100;
   console.log('correct answser!')
 }
   else {
     timeLeft -= 5;
     console.log("incorrect answer") 
 }
 $(scoreEl).text(score);

};






function wrong() {
  timeLeft -= 15; 
  // next();
};

// adds 100 to the score if the correct answer is selected
function right() {
  score += 100;
  // next();
};
