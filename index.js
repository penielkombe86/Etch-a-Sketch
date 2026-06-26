const gridContainer = document.querySelector(".grid-container")

const rows = 16
const columns = 16
const totalCells = rows * columns

// create the cells and insert them into the grid container
for (let i = 0; i < totalCells; i++) {
    let cell = document.createElement("div")
    cell.classList.add("cell")

    gridContainer.appendChild(cell)
}