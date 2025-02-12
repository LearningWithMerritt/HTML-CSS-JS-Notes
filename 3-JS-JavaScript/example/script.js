// External JS File

// Function to change the text of a paragraph with a specific ID
function changeText() {
    document.getElementById('dynamic-text').innerText = 'This text was changed by an external JavaScript function!';
}

// Function to display an alert when the button is clicked
function showAlert() {
    alert('Button clicked!');
}


// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Modified function to change the background color to a random color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}