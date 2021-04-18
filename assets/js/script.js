//Main Page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var totalPoints = 0;

//Adds 10 points, also tells user how many points they have
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
}


//Function for timer
var timer = function() {
    var timeInterval = setInterval(() => {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft --;
        } else {
            timerEl.textContent = "Time is Up";
            clearInterval(timeInterval);
        }
    }, 1000);
    console.log("Timer Running");
};

var questionTwo = function() {

};

//Function that creates question 1 and its answers
var questionOne = function() {
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionOneContainer.remove();
        questionTwo();
        console.log("The answer you picked was wrong");
    };
    var questionOneContainer = document.createElement("div");
    questionOneContainer.className = "question-one-container";
    mainEl.appendChild(questionOneContainer);

    //question 1
    var questionOne = document.createElement("h1");
    questionOne.className = "question-one";
    questionOne.textContent = "Commonly Used data types DO NOT Include:";
    questionOneContainer.appendChild(questionOne);

    //Answers for question 1
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionOneContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. strings";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. booleans";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. alerts";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionOneContainer.remove();
        questionTwo();
        console.log("You picked the right answer");
        points();
    });

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. numbers";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });

    console.log("Question One");
};
//Creating aspects of the Start Page| container, title, main paragraph, and quiz button
var start = function() {
    var container = document.createElement("div");
    container.className = "home-container"
    mainEl.appendChild(container);

    var homeHeader = document.createElement("h1");
    homeHeader.className = "home-title";
    homeHeader.textContent = "Coding Quiz Challenge";
    container.appendChild(homeHeader);

    var homeParagraph = document.createElement("p");
    homeParagraph.className = "home-text-p";
    homeParagraph.textContent = "Try to answer the following code-related" +
    " questions within the time limit. Keep in mind that incorrect answer will" +
    " penalize your score/time by ten seconds!"
    container.appendChild(homeParagraph);

    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Start Quiz";
    container.appendChild(startQuizBtn);

    //Start Button CLick Event
    startQuizBtn.addEventListener("click", event => {
        timer();
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });
};

start(); 