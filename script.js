window.onload = () => {
    let mainString = document.getElementById('main');
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    let otvet = document.querySelector('#otvet');

    button.addEventListener('click', () => {
        let str1 = input.value;
        for (let i = 0; i < str1.length; i = i + 1) {
            console.log(str1[i]);

        }
        otvet.innerText = otvet.innerText + str1;
    })



}