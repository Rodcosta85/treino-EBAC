document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcular-btn');
    const minutosSpan = document.getElementById('minutos');
    const resultadoP = document.getElementById('resultado');

    const valoresMin = {
        1:30,
        1.75:60,
        3:120
    }


    const calculateTimeAndChange = (e) => {
        e.preventDefault();

        const inputValue = parseFloat(document.getElementById('valor-input').value);
        let timeLeft = 0;

        if (inputValue < 1) {
           resultadoP.textContent = 'Valor insuficiente';
        } else if (inputValue === 1) {
            minutosSpan.textContent = 30;
        } else if (inputValue === 1.75) {
            minutosSpan.textContent = 60;
        } else if (inputValue === 3) {
            minutosSpan.textContent = 120;
        } else if (inputValue !== Object.keys(valoresMin) && 1 < inputValue < 1.75) {
            timeLeft = 30 + (60-30) * (inputValue - 1)/(1.75 - 1);
            console.log(timeLeft);
            minutosSpan.textContent = timeLeft;
        } else if (inputValue !== Object.keys(valoresMin) && 1.75 < inputValue < 3) {
            timeLeft = 60 + (120 - 60) * (inputValue - 1.75)/(3 - 1.75);
            minutosSpan.textContent = timeLeft;
        }
    }

    calcularBtn.addEventListener('click', calculateTimeAndChange);

})


