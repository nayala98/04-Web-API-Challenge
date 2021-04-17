//Main Page
var mainEl = document.querySelector("#main");

//Function that creates question 1 and its answers
var questionOne = function() {
    var questionOneContainer = document.createElement("div");
    questionOneContainer.className = "question-one-container";
    mainEl.appendChild(questionOneContainer);

    //question 1
    var questionOne = document.createElement("h1");
    questionOne.textContent = "Commonly Used data types DO NOT Include:";
    questionOneContainer.appendChild(questionOne);

    //Answers for question 1
    var answerOne = document.createElement("button");
    answerOne.textContent = "strings";
    questionOneContainer.appendChild(answerOne);

    var answerTwo = document.createElement("button");
    answerTwo.textContent = "booleans";
    questionOneContainer.appendChild(answerTwo);

    var answerThree = document.createElement("button");
    answerThree.textContent = "alerts";
    questionOneContainer.appendChild(answerThree);

    var answerFour = document.createElement("button");
    answerFour.textContent = "numbers";
    questionOneContainer.appendChild(answerFour);


    console.log("Question One");
}
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
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        questionOne();
    });
}

start(); 