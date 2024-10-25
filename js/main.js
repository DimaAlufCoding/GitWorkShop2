
function onBallClick() {
    const ball = document.querySelector(".ball");


    let currentSize = parseInt(window.getComputedStyle(ball).width);

    let newSize = currentSize + 50;

    ball.style.width = `${newSize}px`;
    ball.style.height = `${newSize}px`;

    ball.textContent = newSize;
}
