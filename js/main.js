
function onBallClick() {
    const ball = document.querySelector(".ball")


    let currentSize = parseInt(window.getComputedStyle(ball).width)

    let newSize = currentSize >= 400 ? 100 : currentSize + 50

    ball.style.width = `${newSize}px`
    ball.style.height = `${newSize}px`
    ball.style.backgroundColor = getRandomColor()
    console.log(getRandomColor())

    ball.textContent = newSize;
}
