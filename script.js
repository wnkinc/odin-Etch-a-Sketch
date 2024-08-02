const bodyElement = document.querySelector('body');
const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

let userGridInput = 16;

function promptMessage() {
    return Number(prompt('Set grid size - minimum 16, maximum 100.'));
};

const button = document.createElement('button');
    button.textContent = 'New grid';
    button.addEventListener('click', () => {
        userGridInput = promptMessage();
        while(userGridInput < 16 || userGridInput > 100 || isNaN(userGridInput)){
            alert('Invalid entry, try again');
            userGridInput = promptMessage();
        }
        const divColumns = document.querySelectorAll('.column');
        divColumns.forEach(column => column.remove());
        createGrid(userGridInput);
    });
    bodyElement.appendChild(button);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let alpha = 1.0;
    return `rgb(${r}, ${g}, ${b}, ${alpha})`;
}

function createGrid(userGridInput) {
    for(let j = 0; j < userGridInput; j++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('column');
        containerDiv.appendChild(rowDiv);
    
        for(let i = 0; i < userGridInput; i++){  
            const div = document.createElement('div');
            div.classList.add(`grid${j}${i}`);
            div.style.flex = '1';
            div.style.margin = '0';
            div.style.padding = '1';
            div.style.backgroundColor = 'lightblue';
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = getRandomColor();
            });
            rowDiv.appendChild(div);
        }
    }
}

bodyElement.appendChild(containerDiv);

createGrid(userGridInput);