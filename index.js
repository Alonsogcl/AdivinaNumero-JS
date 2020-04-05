let triesNumber = 0;

const randomNumber = Math.floor(Math.random() * 100) + 1;
//Usar input
const userNum = document.getElementById("userNum");
const guessBtn = document.getElementById("guessButton");

const cluesContainer = document.getElementById("clues");
const congratsContainer = document.getElementById("congrats");

const tries = document.getElementById("tries");
const clue = document.getElementById("clue");

// Casi siempre que das enter esperas que el botón debajo del input se presione, buena práctica al 100
userNum.addEventListener(
    "keyup",
    event => event.keyCode === 13 && guessBtn.click()
);

guessBtn.addEventListener(
    "click",
    () => {
        //console.log("Hola desde click"); Para ver que se está ejecutando esta función
        const num = userNum.value;
        console.log(randomNumber);

        if (num == randomNumber) {
            congratsContainer.style.display = "flex";
            cluesContainer.style.display = "none";
            guessBtn.style.display = "none";
            userNum.disabled = true;
            return; //va a terminar de manera explicita la ejecución de la función ()
            //Para que ya no siga ejecutando lo de abajo
        }
        triesNumber = triesNumber + 1;

        cluesContainer.style.display = "flex";
        tries.innerHTML = triesNumber;
        clue.innerHTML = num > randomNumber ? "⬇️" : "⬆️";
    }, false);