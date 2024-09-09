function changeColor(color) {
    document.body.style.backgroundColor = color;

}

function addColors() {
    const input = document.querySelector('.input').value.toLowerCase();


    if (input) {
        const button = document.createElement('button');
        button.setAttribute('class', 'btns');
        button.innerHTML = input;
        button.style.backgroundColor = input;


        button.addEventListener('click', function () {
            changeColor(input);
        });

        document.querySelector('.main-container').appendChild(button);
        document.querySelector('.input').value = '';
    } else {
        alert("Please enter a valid color!");
    }
}
