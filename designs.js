// Select color input and set color
let color = "#000";
const setColor = document.getElementById("color-picker");

setColor.addEventListener("change", function() {
    color = this.value;
});

// Select size input and set height and width
const setHeight = document.getElementById("input-height");
let height = setHeight.value;

setHeight.addEventListener("change", function() {
    height = this.value;
});

const setWidth = document.getElementById("input-weight");
let width = setWidth.value;

setWidth.addEventListener("change", function() {
    width = this.value;
});

// Select table
const table = document.getElementById("pixel-canvas");

// When size is submitted by the user, clear the previous grid and
// build the new grid.
document.getElementById("size-picker")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            clearGrid();
            makeGrid();
        });

/**
 * Given a width and a height, builds a grid of those dimensions.
 * When a cell of the grid is clicked, changes the color to the
 * set color.
 */
function makeGrid() {

    for (let i = 1; i <= height; i++) {
        const tr = document.createElement("tr");

        table.appendChild(tr);

        for (let j = 1; j <= width; j++) {
            const td = document.createElement("td");

            tr.appendChild(td);
        }
    }

    table.addEventListener("click", function(event) {
        event.target.closest("td").style.backgroundColor = color;
    });

}

/**
 * Clears the grid.
 */
function clearGrid() {

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
