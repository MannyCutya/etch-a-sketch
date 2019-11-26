// Main container and nav
const container = document.getElementById("container");
const clearButton = document.getElementById("clearButton");

// Grid container
const gridContainer = document.createElement('div');
gridContainer.classList.add("grid-container");
gridContainer.style.display = 'grid';
document.body.appendChild(gridContainer);

function makeGrid(size) {
    // Remove all divs from container div
    while ( gridContainer.firstChild ) gridContainer.removeChild( gridContainer.firstChild );

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++) {
        // cell needs to be let instead of var due to scoping
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = '#000000bf';
        });

        gridContainer.appendChild(cell);
    }
    container.appendChild(gridContainer);
}

clearButton.addEventListener('click', function() {
    var newGridSize = prompt("Enter size of new grid: ", 64);
    makeGrid(newGridSize);
})

makeGrid(64);