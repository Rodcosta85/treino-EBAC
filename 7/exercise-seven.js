document.addEventListener('DOMContentLoaded', () => {
    class ParkingCalculator {
        constructor(calcularBtnId, resultadoPId, inputId, trocoPId) {
            this.calcularBtn = document.getElementById(calcularBtnId);
            this.resultadoP = document.getElementById(resultadoPId);
            this.input = document.getElementById(inputId);
            this.trocoP = document.getElementById(trocoPId);

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
                return;
            }

            if (inputValue < 1) {
                this.resultadoP.textContent = 'Valor insuficiente, você não pode estacionar';
                this.trocoP.textContent = '';

            } else if (inputValue === 1) {
                this.resultadoP.textContent = 'Você tem 30 minutos de estacionamento'
                this.trocoP.textContent = '';

            } else if (inputValue === 1.75) {
                this.resultadoP.textContent = 'Você tem 60 minutos de estacionamento'
                this.trocoP.textContent = '';

            } else if (inputValue === 3) {
                this.resultadoP.textContent = 'Você tem 120 minutos de estacionamento'
                this.trocoP.textContent = '';

            } else if (inputValue > 1 && inputValue < 1.75) {
                timeLeft = 30 + (60 - 30) * (inputValue - 1) / (1.75 - 1);
                const troco = (inputValue - 1).toFixed(2);
                this.resultadoP.textContent = 'Você tem 30 minutos de estacionamento'
                this.trocoP.textContent = `Seu troco: $${troco}`;

            } else if (inputValue > 1.75 && inputValue < 3) {
                timeLeft = 60 + (120 - 60) * (inputValue - 1.75) / (3 - 1.75);
                const troco = (inputValue - 1.75).toFixed(2);
                this.resultadoP.textContent = 'Você tem 60 minutos de estacionamento'
                this.trocoP.textContent = `Seu troco: $${troco}`;

            } else if (inputValue > 3) {
                const troco = (inputValue - 3).toFixed(2);
                this.resultadoP.textContent = 'Você tem 120 minutos de estacionamento'
                this.trocoP.textContent = `Seu troco: $${troco}`;
            }
        }
    }

    // instantiate
    new ParkingCalculator('calcular-btn', 'resultado', 'valor-input', 'troco-p');
});


