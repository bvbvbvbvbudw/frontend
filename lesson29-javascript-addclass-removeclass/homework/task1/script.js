container = document.getElementById('container');

function randomBlock() {
    randomBlockDiv = document.createElement('div');
    randomBlockDiv.style.backgroundColor = getRandomColor();
    randomBlockDiv.style.width = '30px';
    randomBlockDiv.style.height = '30px';
    container.style.display = 'flex';
    container.style.gap = '10px';
    container.appendChild(randomBlockDiv);

    randomBlockDiv.addEventListener('click', function () {
        this.style.display = 'none';
    })
}

function getRandomColor() {
    var red = Math.floor(Math.random() * 256); 
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return color;
}
