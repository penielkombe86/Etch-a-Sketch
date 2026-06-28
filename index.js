// references to the DOM
const gridContainer = document.querySelector(".grid-container")
const dialog = document.getElementById("input-dialog")
const popupForm = document.getElementById("popup-form")
const rows = document.getElementById("rows")
const columns = document.getElementById("columns")
const cancelBtn = document.getElementById("cancel-btn")
const editGridBtn = document.getElementById("edit-grid")

const initialRows = 64
const  initialColumns = 64
const totalCells = initialRows * initialColumns


// create the initial cells and insert them into the grid container
function createInitialCells() {
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")

        // width and height of cells  is (full length / number rows or number or columns )
        cell.style.width = 'calc(100% / 64)'
        cell.style.height = 'calc(100% / 64)'

        gridContainer.appendChild(cell)
    }
}

createInitialCells()
 
function editGrid(event) {
    // convert the row and column numbers to integers
    let rowNumber = parseInt(rows.value, 10)
    let columnNumber = parseInt(columns.value, 10)

    // clear the gridContainer
    gridContainer.replaceChildren()

    // create new cells and inserts them into the grid container
    for (let i = 0; i < rowNumber * columnNumber; i++) {
        let newCell = document.createElement("div")
        newCell.classList.add("newCell")

        // set the width of the new cells to be (full length / column number)
        newCell.style.width = `calc(100% / ${columnNumber})`

        // set the height of the new cells to be (full length / row number)
        newCell.style.height = `calc(100% / ${rowNumber})`

        gridContainer.appendChild(newCell)
    }
}


gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = "red"
    }

    if (event.target.classList.contains("newCell")) {
        event.target.style.backgroundColor = "orange"
    }
})


editGridBtn.addEventListener("click", (event) => {
    dialog.showModal()
})

popupForm.addEventListener("submit", () => {
    if (rows.value.trim() === "" || columns.value.trim() === "") {
        gridContainer.replaceChildren()
        createInitialCells()
    }
    else {
        editGrid()
    }
})

cancelBtn.addEventListener("click", () => {
        if (rows.value.trim() === "" || columns.value.trim() === "") {
        gridContainer.replaceChildren()
        createInitialCells()
        }
})
