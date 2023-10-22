import menu from './utility.js';

function displayMenu(category) {
    const menuDiv = document.querySelector('.menu');
    menuDiv.innerHTML = ''; // Clear previous menu items

    const items = menu[category];
    if (items) {
        const ul = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        menuDiv.appendChild(ul);
    }
}

// Add click event listeners to the category links
document.getElementById('veg').addEventListener('click', () => displayMenu('veg'));
document.getElementById('nonveg').addEventListener('click', () => displayMenu('nonveg'));
document.getElementById('egg').addEventListener('click', () => displayMenu('egg'));