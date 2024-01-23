const element = document.getElementById('counter');
let count = 0;
function increment() {
    count++
    element.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--
        element.textContent = count;
    }
}
function plustwo() {
    count += 2
    element.textContent = count;
}