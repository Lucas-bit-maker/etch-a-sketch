document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('grid-container');
    const resetButton = document.getElementById('reset-button');

    resetButton.addEventListener('click', function () {
        // Prompt user for the number of squares per side
        let gridSize = prompt('Enter the number of squares per side (up to 100):');
        
        // Validate user input and set a limit
        gridSize = parseInt(gridSize);
        gridSize = isNaN(gridSize) ? 16 : Math.min(Math.max(gridSize, 1), 100);

        // Remove existing grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Generate a new grid based on user input
        generateGrid(container, gridSize);
    });

    // Function to generate the grid based on user input
    function generateGrid(container, gridSize) {
        // Limit the gridSize to a maximum of 100
        gridSize = Math.min(gridSize, 100);

        // Calculate the total number of squares based on gridSize
        const totalSquares = gridSize * gridSize;

        // Set the width of the container to a fixed value
        const containerWidth = 700; // You can adjust this value based on your design
        container.style.width = containerWidth + 'px';

        // Calculate the size of each square based on the container width and gridSize
        const squareSize = containerWidth / gridSize;

        // Create a grid with gridSize x gridSize squares
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            
            // Set the size of each square
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';
            
            // Add a mouseover event listener to change the color
            square.addEventListener('mouseover', function () {
                square.style.backgroundColor = 'black'; // Change the color as needed
            });

            container.appendChild(square);
        }
    }

    // Generate the initial grid (16x16 squares)
    generateGrid(container, 16);
});