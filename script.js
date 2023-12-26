document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');

    // Create a 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
});
