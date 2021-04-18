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
}


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
        timeLeft = timeLeft -10;
        questionContainer.remove();
        questionThree();
        console.log("The answer you picked was wrong");
    };

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "The condition in an if / else statement if enclosed with ________.";
    questionContainer.appendChild(question);

    //Answers for Question Two
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);

    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Quotes";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });

    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Curly Brackets";
    answerContainer.appendChild(answerTwo);
    nswerOne.addEventListener("click", event => {
        removeWrong();
    });

    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Paranthesis";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("You picked the right answer");
        points();
    });

    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. Square Brackets";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("You picked the right answer");
        points();
    })
};

//Question Three
var questionThree = function() {
        var removeWrong = function() {
            timeLeft = timeLeft - 10;
            questionContainer.remove();
            questionFour();
            console.log("The answer you picked was wrong");
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