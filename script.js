let random = Math.floor(Math.random() * 100) + 1;
let chances = 5;
let score = 50;

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", getUserInput);


   
function getUserInput() {
    let userInput = document.getElementById("userInput").value;
    if (userInput === "") {
        alert("Please enter a number before clicking the button.");
        return; // Exit the function if input is empty
    }
    if (chances > 0 ){
        if (userInput > random){     
            score -= 10;
            alert("Try Smaller");
        }
        else if (userInput<random){  
            score -= 10;
            alert("Try Bigger");
        }
        else{
            alert("You Gussed it right . your score : "+ score)
            myButton.disabled = true;
            myButton.textContent = "Game Over"
            document.getElementById("message").innerHTML = "Game over , You Won !"
        }
        
        chances --;
        
    }
    else {
        document.getElementById("message").innerHTML = "Game over , You loose !"
        myButton.disabled = true;
        myButton.textContent = "Game over";
    }
    document.getElementById("entered").innerHTML = "You entered: " + userInput;
    document.getElementById("score").innerHTML = "Your Score: " + score;
    document.getElementById("chances").innerHTML = "Chances Left: " + chances;
}



