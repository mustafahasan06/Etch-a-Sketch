const container = document.getElementById("container");
const createBtn = document.getElementById("createBtn");
const containerSize = '500';
let userValue = 10;

    createGrids(16);
createBtn.addEventListener('click', (e) => {
    size = prompt("Enter a grid number:",10);
    size = parseInt(userValue);
    if (size > 0 && size <= 100) {
        createGrids(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
})
function createGrids(squaresPerSide) {
    container.innerHTML='';
    const squareSize = containerSize / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const divGrid = document.createElement("div");    
        divGrid.style.width= `${squareSize}px`;
        divGrid.style.height= `${squareSize}px`;

        divGrid.classList.add("grid-item");
        divGrid.addEventListener("mouseover", () =>{
            divGrid.style.background="black";
        });
        
        container.appendChild(divGrid);
    }
    
       
}
