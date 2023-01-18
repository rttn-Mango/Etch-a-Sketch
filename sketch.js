let btnColor = 'black';
let isBtnClicked = false;

function populateBoard(size) {
    let sketchBoard = document.querySelector('.board');
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const boardSize = size * size;

    for (let i = 0; i < boardSize; i++) {
        let boxes = document.createElement("div");
        boxes.className = "boardPixel";
        boxes.addEventListener("mousemove", () => {
            if (isBtnClicked) {
                if (btnColor === "random")
                    boxes.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`

                boxes.style.backgroundColor = btnColor;
            }

        });

        boxes.style.backgroundColor = 'blue';
        sketchBoard.insertAdjacentElement("beforeend", boxes);
    }
}

function getButtonColor(color) {
    btnColor = color;
}

function changeSize(size) {
    populateBoard(size);
}

function resetBoard() {
    let sketchBoard = document.querySelector('.board');
    let boxes = document.querySelectorAll('.boardPixel');
    boxes.forEach((div) => div.style.backgroundColor = 'blue');
}

document.querySelector('body').addEventListener('click', () => {
    isBtnClicked = !isBtnClicked;
    if (isBtnClicked)
        document.querySelector('.sketchToggle').textContent = 'Sketch Mode: On';
    else
        document.querySelector('.sketchToggle').textContent = 'Sketch Mode: Off';
});
populateBoard(16);