const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
let targetColor;

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function setRandomColor() {
    targetColor = getRandomColor();
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = targetColor;
}

function createColorButtons() {
    const colorButtonsContainer = document.getElementById('color-buttons');
    colorButtonsContainer.innerHTML = ''; // Clear existing buttons

    colors.forEach(color => {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.addEventListener('click', () => checkColor(color));
        colorButtonsContainer.appendChild(button);
    });
}

function checkColor(selectedColor) {
    const resultElement = document.getElementById('result');
    
    if (selectedColor === targetColor) {
        resultElement.textContent = 'Congratulations! You guessed the correct color.';
    } else {
        resultElement.textContent = 'Sorry, wrong color. Try again.';
    }

    setTimeout(() => {
        resultElement.textContent = '';
        setRandomColor();
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    setRandomColor();
    createColorButtons();
});
