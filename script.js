const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer, attemptsLeft = 5, correctAttempts = 0,noofattempts=0,accuracy=0;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        noofattempts++;
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    if(attemptsLeft <= 0) {
        if(correctAttempts >= 3) 
        {
            accuracy=Math.round((correctAttempts/noofattempts)*100)

            const allGames =  JSON.parse(localStorage.getItem("allGames")) || [];

            const newGame = {
                gameName: "Word Game",
                accuracy: accuracy,
                date: new Date().toLocaleDateString()
            }

            allGames.push(newGame);
            localStorage.setItem("allGames", JSON.stringify(allGames));

            console.log(accuracy);
            alert("Congratulations! You passed the first game!");
            window.location.href = "pic.html";
        } else {
            alert("Sorry! You failed the first game. Please try again.");
            attemptsLeft = 5;
            correctAttempts = 0;
            initGame();
        }
    } else {
        initTimer(30);
        let randomObj = words[Math.floor(Math.random() * words.length)];
        let wordArray = randomObj.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        wordText.innerText = wordArray.join("");
        hintText.innerText = randomObj.hint;
        correctWord = randomObj.word.toLowerCase();;
        inputField.value = "";
        inputField.setAttribute("maxlength", correctWord.length);
        attemptsLeft--;
    }
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctWord) 
    {
        noofattempts++;
        let accuracyPercentage =  Math.round((correctAttempts/noofattempts)*100);
        document.getElementById("accuracyBox").innerText = `Accuracy: ${accuracyPercentage} %`;
        alert(`Oops! ${userWord} is not a correct word`);
    } else {
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        correctAttempts++;
        noofattempts++;
        let accuracyPercentage =  Math.round((correctAttempts/noofattempts)*100);
        document.getElementById("accuracyBox").innerText = `Accuracy: ${accuracyPercentage} %`;

    }
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
initGame();