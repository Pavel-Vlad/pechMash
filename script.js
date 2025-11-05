window.onload = () => {
    let mainString = document.getElementById('main');
    let str1 = 'Тестовая строка1';

    mainString.innerText = str1;

    for (let i = 0; i < 5; i = i + 1) {
        console.log(str1[i])
    }
    console.log(i)


}