document.addEventListener('DOMContentLoaded', function () {
    const name = document.getElementById('name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const cepInput = document.getElementById('cep');
    const street = document.getElementById('street');
    const neighborhood = document.getElementById('neighborhood');
    const form = document.getElementById('my-form')

    const saved = JSON.parse(localStorage.getItem("someInfo"));
    if (saved) {
        name.value = saved.name || '';
        lastName.value = saved.lastName || '';
        email.value = saved.email || '';
        cepInput.value = saved.cep || '';
        street.value = saved.street || '';
        neighborhood.value = saved.neighborhood || '';

        // Auto-fetch CEP if present
        if (cepInput.value) {
            fetchCEP(cepInput.value);
        }
    }

    cepInput.addEventListener('blur', async () => {

        const cep = document.getElementById("cep").value.replace(/\D/g, ""); // remove non-digits

        if (cep.length !== 8) {
            console.warn("CEP inválido");
            return;
        }

        let data; // Declare data here to make it accessible outside the try block

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
            data = await response.json();
            console.log(data);
        } catch (error) {
            console.log('the error is the following:', error);
        }

        street.value = data.logradouro;
        neighborhood.value = data.bairro;
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const someInfo = {
            name: name.value,
            lastName: lastName.value,
            email: email.value,
            cep: cepInput.value,
            street: street.value,
            neighborhood: neighborhood.value
        }

        localStorage.setItem("someInfo", JSON.stringify(someInfo));
        alert("Info saved in the localStorage!");
    });

})