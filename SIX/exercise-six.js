document.addEventListener('DOMContentLoaded', function () {
    const chutarBtn = document.getElementById('chutar');
    const tentativasP = document.getElementById('tentativas');
    const returnedNum = Math.floor(Math.random() * 100) + 1; // 1 to 100
    console.log(returnedNum);

    let count = 0; // Move count outside the function to persist between calls
    const numMaxTentativas = 10;

    const generatorCheckerCounter = () => {
        const palpite = parseFloat(document.getElementById('palpite').value);
        const dicas = document.getElementById('dicas'); // Make sure this element exists

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            dicas.textContent = 'Seu número precisa estar entre 1 e 100';
            return;
        } else if (palpite === returnedNum) {
            dicas.textContent = 'Você acertou!';
            tentativasP.innerHTML = '';
            chutarBtn.disabled = true; // Disable button after win
            return;
        } else if (palpite < returnedNum) {
            dicas.innerHTML = 'O número secreto é <span class="tag">maior</span>';
        } else if (palpite > returnedNum) {
            dicas.innerHTML = 'O número secreto é <span class="tag">menor</span>';
        }

        count++;
        let restantes = numMaxTentativas - count;

        if (restantes > 0) {
            tentativasP.innerHTML = `Você ainda tem <span class="tag">${restantes}</span> tentativas, tente novamente`;
        } else {
            tentativasP.innerHTML = `<span id="game-over">Você perdeu!</span> O número secreto era <span class="tag">${returnedNum}</span>`;
            chutarBtn.disabled = true; // block further clicks
        }
    }


    chutarBtn.addEventListener('click', generatorCheckerCounter);

})



