let sketchBoard = document.querySelector('.board');
sketchBoard.style.gridTemplateColumns = "repeat(16, 1fr)";
sketchBoard.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let boxes = document.createElement("div");
    boxes.style.backgroundColor = 'blue';
    sketchBoard.insertAdjacentElement("beforeend", boxes);
}