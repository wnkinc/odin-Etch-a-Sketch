const bodyElement = document.querySelector('body');
const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

for(let j = 0; j < 16; j++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('column');
    containerDiv.appendChild(rowDiv);

    for(let i = 0; i < 16; i++){  
        const div = document.createElement('div');
        div.classList.add(`grid`);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        });
        rowDiv.appendChild(div);
    }
}

bodyElement.appendChild(containerDiv);