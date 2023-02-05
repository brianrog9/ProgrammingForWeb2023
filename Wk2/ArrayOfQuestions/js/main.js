//Array of Questions
let quiz = [
    {question: "What's the capital of Montana?", answer:"Helena"},
    {question: "How many original Pokemon are there?", answer:"151"},
    {question: "How wide is a football field?", answer:"53.3 yards wide"},
];

//check question array
console.log ("quiz questions", quiz);

//random question prompt
const quizindex = Math.floor(Math.random() * quiz.length);
const answer = window.prompt(quiz[quizindex].question);

//user answer check
console.log("user answered", answer);

//feedback
window.alert("You answered " + answer + " The correct answer is: " + quiz[quizindex].answer);





