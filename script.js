const container = document.getElementById("container");
const createBtn = document.getElementById("create");
const sizeInput = document.getElementById("grid-size");
const blackBtn = document.getElementById("blackBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

const containerSize = '500';
let currentMode = 'black';

createGrids(16);

function updateGrid(){
    let size = parseInt(sizeInput.value);
    if (size > 0 && size <= 100) {
        createGrids(size);
    } else {
        alert("Please enter a number between 1 and 100.");
        sizeInput.value = 16;
    }
}

createBtn.addEventListener('click', updateGrid);

sizeInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        updateGrid();
    }
});

blackBtn.addEventListener('click', () => {
    currentMode= 'black';
    blackBtn.classList.add('active');
    rainbowBtn.classList.remove('active');
});

rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
    rainbowBtn.classList.add('active');
    blackBtn.classList.remove('active');
});


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
            if(currentMode==='black') divGrid.style.background="black";
            else if(currentMode === 'rainbow'){
                const r = Math.floor(Math.random() *256);
                const g = Math.floor(Math.random() *256);
                const b = Math.floor(Math.random() *256);
                divGrid.style.background=`rgb(${r}, ${g} ,${b})`;
            }
        });
        
        container.appendChild(divGrid);
    }      
}

