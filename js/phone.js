// Get the call icon and dial pad
const callIcon = document.getElementById("call");
const dialPad = document.getElementById("dial-pad");
const dialDisplay = document.getElementById("dial-display");
const screenDisplay = document.getElementById("screen");
const onCall = document.getElementById("onCall");

callIcon.addEventListener("click", function() {
    screenDisplay.style.display = "none"; 
    dialPad.style.display = "flex"; 
});



const dialButtons = document.querySelectorAll(".dial-btn");
dialButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const number = this.getAttribute("data-number");
        if(dialDisplay.textContent.length < 10) {
            dialDisplay.textContent += number;
        }
    });
});
const deleteButton = document.getElementById("delete-btn");
deleteButton.addEventListener("click", function() {
    // Remove the last character from the display
    dialDisplay.textContent = "";
});

// Handle the call button
document.getElementById("call-now").addEventListener("click", function() {
    onCall.style.display = "block"; 
    dialPad.style.display = "none"; 
});
document.getElementById("closeCall").addEventListener("click", function() {
    screenDisplay.style.display = "grid"; 
    dialPad.style.display = "none"; 
    onCall.style.display = "none"; 
});
document.getElementById("closeCallDial").addEventListener("click", function() {
    screenDisplay.style.display = "grid"; 
    dialPad.style.display = "none"; 
    onCall.style.display = "none"; 
});


