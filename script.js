var container = document.querySelector(".container")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(sideLength) {
    removeAllChildNodes(container)
    var numberOfSquares = sideLength * sideLength;
    var viewportHeight = window.innerHeight
    console.log(viewportHeight)
    for (let i = 0; i < numberOfSquares; i++) {
        var square = document.createElement('div');
        square.classList.add('cell')
        square.addEventListener('mouseover', event => {
            event.target.classList.add('hovered')
        })
        square.style.width = 1 / sideLength * 100 + "%"
        square.style.height = (viewportHeight / sideLength) * .8 + "px"
        container.appendChild(square)
    }
    updateResolution(sideLength)
}

function updateResolution(sideLength) {
    var res = document.querySelector('#resolution')
    res.textContent = sideLength
}

function promptNewBoard() {
    var input = parseInt(prompt("Please enter a length for a new oard (less than or equal to 100):", 4))
    while (input > 100) {
        input = parseInt(prompt("Value too high. Please enter a value less than or equal to 100:", 4))
    }
    createGrid(input)
}

createGrid(4)