//Main Page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var totalPoints = 0;
var end = false;

//Adds 10 points, also tells user how many points they have
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
};

//Function for timer
var timer = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            timerEl.textContent = " ";
            clearInterval(timeInterval);
        }
    }, 1000);
    console.log("Timer Running");
    if (end === true){
        timerEl.textContent = timeLeft;
    };
};

//HighScores Page
var highScores = function() {
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl.appendChild(highScoreContainer);

    //Page Title
    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);

    //Displays High Scores
    var initals = localStorage.getItem("initals");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + initals + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);

    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);

    //Go Back To Home Page Btn
    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Go Back";
    leaderboard.appendChild(goBack);
    goBack.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 75;
        highScoreContainer.remove();
        start();
    });

    //Clear High Score Btn
    var clearHighScore = document.createElement("button");
    clearHighScore.className = "clear-highScore";
    clearHighScore.textContent = "Clear High Scores";
    //Removes initials and score form leaderboard
    clearHighScore.addEventListener("click", event => {
        localStorage.removeItem("initals")
        localStorage.removeItem("score")
        leaderboardScore.remove();
    });
    leaderboard.appendChild(clearHighScore);
};

//Displays score, asks user for initials and stores it
var enterScore = function() {
    var doneContainer = document.createElement("div");
    doneContainer.className = "done-container";
    mainEl.appendChild(doneContainer);
    //Title
    var done = document.createElement("h1");
    done.textContent = "All Done!";
    done.className = "done-title";
    doneContainer.appendChild(done);
    //Displays FInal Score
    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalPoints;
    score.className = "score";
    doneContainer.appendChild(score); 

    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);

    //User Initials and setting of said Initials
    var label = document.createElement("label");
    label.textContent = "Enter Initials:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);

    var initalInput = document.createElement("Input");
    initalInput.className = "score-input";
    initalInput.setAttribute("id", "input")
    initalInput.setAttribute("name", "input");
    initalInput.setAttribute("type", "text");
    inputContainer.appendChild(initalInput);

    //Submit button
    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {
        var initals = document.getElementById("input").value;
        localStorage.setItem("initals", initals);
        localStorage.setItem("score", totalPoints);
        doneContainer.remove();
        //Moves to High Score page
        highScores();
    });
    inputContainer.appendChild(submit);
};

//Question One
var questionOne = function() {
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionTwo();
        console.log("The answer you picked was wrong");
    };

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Commonly Used data types DO NOT Include:";
    questionContainer.appendChild(question);

    //Answers for Question One
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

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
        questionContainer.remove();
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

//Question Two
var questionTwo = function() {

    var removeWrong = function() {
        questionThree();
        questionContainer.remove();
        timeLeft = timeLeft - 10;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "The condition in an if / else statement is enclosed with ________.";
    questionContainer.appendChild(question);

    //Answers for question two
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. quotes";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. curly brackets";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. parenthesis";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("You picked the right answer");
        points();
    });

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. square brackets";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
};

//Question Three
var questionThree = function() {
        var removeWrong = function() {
            timeLeft = timeLeft - 10;
            questionContainer.remove();
            questionFour();
            console.log("The answer you picked was wrong!");
        };

        var questionContainer = document.createElement("div");
        questionContainer.className = "question-container";
        mainEl.appendChild(questionContainer);

        var question = document.createElement("h1");
        question.className = "question";
        question.textContent = "Arrays in JavaScript can be used to store __________.";
        questionContainer.appendChild(question);

        // question Three Answers
        var answerContainer = document.createElement("div");
        answerContainer.className = "answer-container";
        questionContainer.appendChild(answerContainer);

        var answerOne = document.createElement("button");
        answerOne.className = "answer-One";
        answerOne.textContent = "1. numbers & strings";
        answerContainer.appendChild(answerOne);
        answerOne.addEventListener("click", event => {
            removeWrong();
        });

        var answerTwo = document.createElement("button");
        answerTwo.className = "answer-Two";
        answerTwo.textContent = "2. Other Arrays";
        answerContainer.appendChild(answerTwo);
        answerTwo.addEventListener("click", event => {
            removeWrong();
        });

        var answerThree = document.createElement("button");
        answerThree.className = "answer-Three";
        answerThree.textContent = "3. Booleans";
        answerContainer.appendChild(answerThree);
        answerThree.addEventListener("click", event => {
            removeWrong();
        });

        var answerFour = document.createElement("button");
        answerFour.className = "answer-Four";
        answerFour.textContent = "4. All of the above";
        answerContainer.appendChild(answerFour);
        answerFour.addEventListener("click", event => {
            questionContainer.remove();
            questionFour();
            console.log("You picked the right answer");
            points();
        });
};

//Question Four
var questionFour = function() {
        var removeWrong = function() {
            timeLeft = timeLeft - 10;
            questionContainer.remove();
            questionFive();
            console.log("The answer you picked was wrong");
        }

        var questionContainer = document.createElement("div");
        questionContainer.className = "question-container";
        mainEl.appendChild(questionContainer);

        var question = document.createElement("h1");
        question.className = "question";
        question.textContent = "What does assigning a variable null do:";
        questionContainer.appendChild(question);
    
        //Question Four Answers
        var answerContainer = document.createElement("div");
        answerContainer.className = "answer-container";
        questionContainer.appendChild(answerContainer);

        var answerOne = document.createElement("button");
        answerOne.className = "answer-One";
        answerOne.textContent = "1. number";
        answerContainer.appendChild(answerOne);
        answerOne.addEventListener("click", event => {
            removeWrong();
        })

        var answerTwo = document.createElement("button");
        answerTwo.className = "answer-Two";
        answerTwo.textContent = "2. String";
        answerContainer.appendChild(answerTwo);
        answerTwo.addEventListener("click", event => {
            removeWrong();
        })

        var answerThree = document.createElement("button");
        answerThree.className = "answer-Three";
        answerThree.textContent = "3. Undefined";
        answerContainer.appendChild(answerThree);
        answerThree.addEventListener("click", event => {
            removeWrong();
        })

        var answerFour = document.createElement("button");
        answerFour.className = "answer-Four";
        answerFour.textContent = "4. Nothing";
        answerContainer.appendChild(answerFour);
        answerFour.addEventListener("click", event => {
            questionContainer.remove();
            questionFive();
            console.log("You picked the right answer");
            points();
        })
};

//Question Five
var questionFive = function() {
    var removeWrong = function() {;
        questionContainer.remove();
        enterScore();
        console.log("The answer you picked was wrong");
        end = true;
    };

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "What's another word for case sensitive";
    questionContainer.appendChild(question);

    // question Five Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. CamelCasing";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        points();
        questionContainer.remove();
        enterScore();
        console.log("You picked the right answer");
        end = true;
    });

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Uppercase";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Case Sensitive";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    });

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. No Clue";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
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