# TriviaGame
homework 5 trivia

Couldn't get userAnswers to collect the values from the radios that the user selected. At first I had it inside the displayQuiz, inside the outer for loop and after the second for loop but realized that that wouldn't work because displayQuiz is only running once to add text to the DOM and it wouldn't capture the radio that the user selected. I then tried to make a function outside the displayQuiz function and calling that function elsewhere, but userAnswers would still be a blank array. It's either an error on how I have the function getUserAnswers written, or where I call getUserAnswers. 