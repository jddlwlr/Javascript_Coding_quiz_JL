// // Targeting html elements
var startBtn = $('#startButton');
var timerEl = $('#timerDisp')

var timeLeft = 0;
$('#name').hide();
$('.btn').hide();

// // Question content Array
var questions = [
  {
    question: "What does a function do?",
    choices: ["Addition", "subtraction", "Anything you need it to", "all of the above"],
    correct: "all of the above"
  },
  {
    question: "Is jquery better than vanilla javascript",
    choices: ["yes", "no", "maybe", "depends who you ask",],
    correct: "A vegetable"
  },
  {
    question: "The setItem takes what two inputs?",
    choices: ["KeyName and KeyValue", "Null and Void", "Boolean and Null", "depends who you ask",],
    correct: "A vegetable"
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


    for (var choices = 0; choices < questions[currentQuestion].choices.length; choices++) {
  
        $('#answer1').text(questions[currentQuestion].choices[choices++]);
        $('#answer2').text(questions[currentQuestion].choices[choices++]);
        $('#answer3').text(questions[currentQuestion].choices[choices++]);
        $('#answer4').text(questions[currentQuestion].choices[choices++]);

        $(timerEl).text(questions[currentQuestion].question);
        
        var selection = $('.btn').on('click', function(){
          return $('.btn').value
          console.log(selection())
        })

        if (questions[currentQuestion].choices[choices] == questions[currentQuestion].correct[choices]) {
            right ();
        } else {
            wrong ();
        }
  
    }
}

function wrong() {
  timeLeft -= 15; 
  next();
}

// adds 100 to the score if the correct answer is selected
function right() {
  score += 100;
  next();
}
var currentQuestion = -1;

