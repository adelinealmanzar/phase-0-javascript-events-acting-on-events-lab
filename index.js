const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left - 1 > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10); //might need to change to right?

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
};

document.addEventListener('keydown', function(e) {
    if (e.key ==="ArrowRight") {
        moveDodgerRight();
    }
});