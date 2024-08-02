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

function incrementOpacity(div) {
    let currentOpacity = div.getAttribute('data-opacity');
    currentOpacity -= 0.1;
    div.setAttribute('data-opacity', currentOpacity);
    return getRandomColor(currentOpacity);
};

function getRandomColor(currentOpacity) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b}, ${currentOpacity})`;
}

function createGrid(userGridInput) {
    for(let j = 0; j < userGridInput; j++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('column');
        containerDiv.appendChild(rowDiv);
    
        for(let i = 0; i < userGridInput; i++){  
            const div = document.createElement('div');
            div.classList.add('grid');
            div.setAttribute('data-opacity', 1.0);
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = incrementOpacity(div);
            });
            rowDiv.appendChild(div);
        }
    }
}

bodyElement.appendChild(containerDiv);

createGrid(userGridInput);