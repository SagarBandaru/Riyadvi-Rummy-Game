let countNumber = document.querySelector("#number");
let svgCircle = document.querySelector(".svg-circle");

let number = 0;

// Function to redirect to rummy.html
function redirectToRummy() {
    window.location.href = "rummy.html";
}

// Update the progress bar and check for completion
function updateProgressBar() {
    if (number === 100) {
        clearInterval(progressInterval);
        // Add any additional actions you want to perform after the progress is complete
        // For example, you can call the function to redirect to rummy.html
        redirectToRummy();
    } else {
        number += 1;
        countNumber.innerHTML = `${number}%`;
    }
}

// Set up interval for updating progress bar
let progressInterval = setInterval(updateProgressBar, (2000 / 80));
