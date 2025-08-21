document.addEventListener('DOMContentLoaded', () => {
    class ParkingCalculator {
        constructor(calcularBtnId, minutosSpanId, resultadoPId, inputId) {
            this.calcularBtn = document.getElementById(calcularBtnId);
            this.minutosSpan = document.getElementById(minutosSpanId);
            this.resultadoP = document.getElementById(resultadoPId);
            this.input = document.getElementById(inputId);

            this.init();
        }

        init() {
            this.calcularBtn.addEventListener('click', (e) => this.calculateTimeAndChange(e));
        }

        calculateTimeAndChange(e) {
            e.preventDefault();

            const inputValue = parseFloat(this.input.value);
            let timeLeft = 0;

            this.resultadoP.textContent = ''; // reset

            if (isNaN(inputValue)) {
                this.resultadoP.textContent = 'Digite um valor válido';
                this.minutosSpan.textContent = 0;
                return;
            }

            if (inputValue < 1) {
                this.resultadoP.textContent = 'Valor insuficiente';
                this.minutosSpan.textContent = 0;

            } else if (inputValue === 1) {
                this.minutosSpan.textContent = 30;

            } else if (inputValue === 1.75) {
                this.minutosSpan.textContent = 60;

            } else if (inputValue === 3) {
                this.minutosSpan.textContent = 120;

            } else if (inputValue > 1 && inputValue < 1.75) {
                timeLeft = 30 + (60 - 30) * (inputValue - 1) / (1.75 - 1);
                this.minutosSpan.textContent = Math.round(timeLeft);
                const troco = (inputValue - 1).toFixed(2);
                this.resultadoP.textContent = `Seu troco: $${troco}`;

            } else if (inputValue > 1.75 && inputValue < 3) {
                timeLeft = 60 + (120 - 60) * (inputValue - 1.75) / (3 - 1.75);
                this.minutosSpan.textContent = Math.round(timeLeft);
                const troco = (inputValue - 1.75).toFixed(2);
                this.resultadoP.textContent = `Seu troco: $${troco}`;

            } else if (inputValue > 3) {
                this.minutosSpan.textContent = 120;
                const troco = (inputValue - 3).toFixed(2);
                this.resultadoP.textContent = `Valor máximo é $3. Seu troco: $${troco}`;
            }
        }
    }

    // instantiate
    new ParkingCalculator('calcular-btn', 'minutos', 'resultado', 'valor-input');
});


