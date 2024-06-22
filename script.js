function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomShape() {
    const shapes = ['circle', 'square', 'triangle'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

function showLoading() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'block';
    setTimeout(() => {
        loadingContainer.style.opacity = '1';
    }, 10); // Small delay to trigger the CSS transition
}

function hideLoading() {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.opacity = '0';
    setTimeout(() => {
        loadingContainer.style.display = 'none';
    }, 2000); // Match this duration to the CSS animation duration
}

function generateArt() {
    showLoading();
    const artContainer = document.getElementById('art-container');
    artContainer.innerHTML = ''; // Clear existing art
    setTimeout(() => {
        const shapesCount = 20;
        const maxSize = 100;

        for (let i = 0; i < shapesCount; i++) {
            const shape = getRandomShape();
            const block = document.createElement('div');
            block.className = 'art-block';
            const size = Math.floor(Math.random() * maxSize) + 20;
            block.style.width = `${size}px`;
            block.style.height = `${size}px`;
            block.style.top = `${Math.floor(Math.random() * (artContainer.offsetHeight - size))}px`;
            block.style.left = `${Math.floor(Math.random() * (artContainer.offsetWidth - size))}px`;
            block.style.backgroundColor = getRandomColor();

            if (shape === 'circle') {
                block.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                block.style.width = '0';
                block.style.height = '0';
                block.style.borderLeft = `${size / 2}px solid transparent`;
                block.style.borderRight = `${size / 2}px solid transparent`;
                block.style.borderBottom = `${size}px solid ${getRandomColor()}`;
                block.style.backgroundColor = 'transparent';
            }

            artContainer.appendChild(block);
        }
        
        hideLoading();
    }, 2000); // Simulate loading time
}

// Generate initial art
generateArt();
