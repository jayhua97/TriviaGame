var quiz = [{
    question: "the sky is",
    answers: ["red","blue","green","magenta"],
    correctAnswer: 1 
  },

  {
    question: "apple is a ",
    answers: ["fruit","vegetable","animal","president"],
    correctAnswer: 0
  },

  {
    question: "red means stop",
    answers: ["no","sometimes","yes","banana"],
    correctAnswer: 2
  },

  {
    question: "two plus two equals",
    answers: ["one","four","seven","eight"],
    correctAnswer: 1
  },

  {
    question: "ayyyyy",
    answers: ["?","potato","two","lmao"],
    correctAnswer: 3
  },
];

var intervalId; 

$(document).ready(function() {
  $(".showResults").hide();
  var correct = 0;
  var wrong = 0;
  var timeRemaining = 15;
  var userAnswers = [];

  var isQuizRunning = false;

  function startTimer() {
      intervalId = setInterval(countdown, 1000); 
  }

  function stop() {
      //stop the user from guessing
      clearInterval(intervalId);
  }

  function countdown() {
      timeRemaining--;
      $(".showTimer").html("<h2>Time Remaining: " + timeRemaining + " Seconds</h2>");
      if (timeRemaining === 0) {
          stop();
          getUserAnswers();
          alert("Times Up!");
          $(".showQuiz").hide();
          $(".showTimer").hide();
          showResults();
          $(".showResults").show();
      }
  }

  function displayQuiz() {
    for (var i = 0; i < quiz.length; i++) {
      var radioAnswers = [];
      $(".showQuiz").append("<h4>" + quiz[i].question + "</h4><br>")
      for (var j = 0; j < 4; j++) {
        radioAnswers.push (
          "<input type='radio' class='answerSelector' name='quizAnswer" + i + "'value=" + j + ">" + quiz[i].answers[j],
        )
        $(".showQuiz").append("<h6>" + radioAnswers[j] + "</h6>");
      }
      $(".showQuiz").append("<br>");
    }
  }

  function getUserAnswers() {
    if ($('input').checked === true) {
      userAnswers.push($('input').attr("value"));
    }
  }
  
  function checkAnswers() {
    for (var k = 0; k < userAnswers.length; k++) {
      if (userAnswers[k] === quiz[k].correctAnswer) {
        correct++;
      }
      else {
        wrong++;
      }
    }
  }
  
  function showResults() {
    checkAnswers();
    $("#showCorrect").html("<h2>Correct Answers: " + correct + "</h2>");
    $("#showWrong").html("<h2>Wrong Answers: " + wrong + "</h2>")
    console.log(userAnswers);
  }

  $("#startQuiz").on("click", function() {
    $(this).hide();
    startTimer();
    displayQuiz();
  });



})
