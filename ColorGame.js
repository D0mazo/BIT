const smallerSquare = document.getElementById('smallerSquare');
const startButton = document.getElementById('btn');
const resultElement = document.getElementById('result');
const congratulationsElement = document.getElementById('congratulations');
const loserElement = document.getElementById('loser');
let isMoving = false;
let points = 0;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

smallerSquare.addEventListener('click', function () {
    if (isMoving) {
        points++;
        resultElement.textContent = `Your result: ${points}`;
    }
});

startButton.addEventListener('click', function () {
    isMoving = true; 
    resultElement.textContent = 'Your result: 0';
    congratulationsElement.style.display = 'none';
    loserElement.style.display = 'none';

    function moveSmallerSquareRandomly() {
        if (isMoving) {
            const maxX = 280; 
            const maxY = 280; 
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            smallerSquare.style.backgroundColor = getRandomColor(); 
            smallerSquare.style.left = randomX + 'px';
            smallerSquare.style.top = randomY + 'px';
        }
    }

    moveSmallerSquareRandomly(); 

   
    const intervalId = setInterval(moveSmallerSquareRandomly, 1000);

    
    setTimeout(function () {
        isMoving = false; 
        clearInterval(intervalId);

      
        if (points > 9) {
            congratulationsElement.style.display = 'block';
        } else {
            loserElement.style.display = 'block';
        }
    }, 10000);
});