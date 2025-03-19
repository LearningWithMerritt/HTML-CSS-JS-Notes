/*
   JavaScript (JS) is a high-level, interpreted programming language.
   It is designed to make web pages interactive and dynamic.
   JavaScript can be used for client-side scripting to create
   dynamic content, handle events, and interact with the user.
*/


function showAlert(){
    alert("This is an alert message, you can find the code for me script.js")
}

function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}