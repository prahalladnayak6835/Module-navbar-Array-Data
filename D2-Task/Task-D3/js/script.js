
import menu from './utility.js';

function displayData(category) {
    const data = document.querySelector(`#${category}Data ul`);
    data.innerHTML = '';
    const items = menu[category];

    if (items) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            data.appendChild(li);
        });
    }
}

document.getElementById('veg').addEventListener('click', () => displayData('veg'));
document.getElementById('nonveg').addEventListener('click', () => displayData('nonveg'));
document.getElementById('egg').addEventListener('click', () => displayData('egg'));
