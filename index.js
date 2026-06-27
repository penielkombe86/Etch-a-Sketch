const gridContainer = document.querySelector(".grid-container")

const rows = 16
const columns = 16
const totalCells = rows * columns


// create the cells and insert them into the grid container
function createCells() {
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")

        gridContainer.appendChild(cell)
    }
}

createCells()

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "red"
    }
})
