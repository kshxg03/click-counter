const button = document.getElementById("only-btn");
const counter = document.getElementById("only-counter");

let currentCount = 0;

button.addEventListener('click', function() {
    currentCount += 1;
    counter.innerHTML = currentCount;
})