window.onload = () => {
    let square = document.querySelector('.square');
    let input = document.getElementById('input');
    let input2 = document.getElementById('input2');

    document.addEventListener('keydown', function (event) {
        let speed = +input.value;
        if (event.key === "ArrowUp") {
            console.log("Нажата стрелка Вверх!");
        } else if (event.key === "ArrowDown") {
            console.log("Нажата стрелка Вниз!");
        } else if (event.key === "ArrowLeft") {
            let l = square.offsetLeft - speed;
            square.style.left = l + 'px';
        } else if (event.key === "ArrowRight") {
            let l = square.offsetLeft + speed;
            square.style.left = l + 'px';
        }
    });

}

function randomHexColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
        randomColor = "0" + randomColor;
    }
    return "#" + randomColor;
}