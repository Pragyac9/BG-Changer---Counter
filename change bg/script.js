document.getElementById('changeColorBtn').addEventListener('click', function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorValue').textContent = "The Hex code of the color is: " + randomColor;
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
