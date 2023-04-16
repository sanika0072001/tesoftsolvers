const differences = ["house", "kite", "dog","3 baby bird", "girl", "fish"];
let correctAnswers = 0;

// when the form is submitted
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  
  // get the user's answers
  const userAnswers = [
    document.querySelector("#box1").value,
    document.querySelector("#box2").value,
    document.querySelector("#box3").value,
    document.querySelector("#box4").value,
    document.querySelector("#box5").value
  ];
  
  // check if the user's answers match the correct answers
  let numCorrect = 0;
  userAnswers.forEach(answer => {
    if (differences.includes(answer)) {
      numCorrect++;
    }
  });
  
  // calculate the user's percentage score
  // const percentage = numCorrect / differences.length * 100;
  // correctAnswers = numCorrect; 

  const percentage = Math.round((numCorrect/differences.length)*100);
  // store the number of correct answers for later use
  
  // show the result message
  document.querySelector("#result-header").innerHTML = `You got ${numCorrect} out of ${differences.length} correct!`;
  document.querySelector("#result-message").innerHTML = `Your eyes for detection are ${percentage}% accurate.`;
  document.querySelector("#result-container").style.display = "block";
  
  // update the percentage bar
  const percentageBar = document.querySelector("#percentage-bar");
  percentageBar.style.width = `${percentage}%`;
  if (percentage < 25) {
    percentageBar.style.backgroundColor = "red";
  } else if (percentage < 50) {
    percentageBar.style.backgroundColor = "orange";
  } else if (percentage < 75) {
    percentageBar.style.backgroundColor = "yellow";
  } else {
    percentageBar.style.backgroundColor = "green";
  }
  
  // redirect to 2048.html if user gets more than 3 correct
  if (numCorrect >= 3) {
    const accuracy = percentage;
    const allGames =  JSON.parse(localStorage.getItem("allGames")) || [];

            const newGame = {
                gameName: "Eye Game",
                accuracy: accuracy,
                date: new Date().toLocaleDateString()
            }

            allGames.push(newGame);
            localStorage.setItem("allGames", JSON.stringify(allGames));
    window.location.href = "2048.html";
  }
});

// when the play again button is clicked
document.querySelector("#play-again-button").addEventListener("click", () => {
  // reset the form
  document.querySelector("form").reset();
  
  // hide the result container
  document.querySelector("#result-container").style.display = "none";
  
  // reset the percentage bar
  const percentageBar = document.querySelector("#percentage-bar");
  percentageBar.style.width = "0%";
  percentageBar.style.backgroundColor = "grey";
});