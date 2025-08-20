document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcular-btn');
    const minutosSpan = document.getElementById('minutos');
    const resultadoP = document.getElementById('resultado');


    const calculateTimeAndChange = (e) => {
    e.preventDefault();

    const inputValue = parseFloat(document.getElementById('valor-input').value);
    let timeLeft = 0;

    if (inputValue < 1) {
        resultadoP.textContent = 'Valor insuficiente';
        minutosSpan.textContent = 0;

    } else if (inputValue === 1) {
        minutosSpan.textContent = 30;

    } else if (inputValue === 1.75) {
        minutosSpan.textContent = 60;

    } else if (inputValue === 3) {
        minutosSpan.textContent = 120;

    } else if (inputValue > 1 && inputValue < 1.75) {
        timeLeft = 30 + (60 - 30) * (inputValue - 1) / (1.75 - 1);
        minutosSpan.textContent = Math.round(timeLeft);

    } else if (inputValue > 1.75 && inputValue < 3) {
        timeLeft = 60 + (120 - 60) * (inputValue - 1.75) / (3 - 1.75);
        minutosSpan.textContent = Math.round(timeLeft);

    } else if (inputValue > 3) {
        minutosSpan.textContent = 120;
        resultadoP.textContent = 'Valor máximo é $3';
    }
}

    calcularBtn.addEventListener('click', calculateTimeAndChange);

})


