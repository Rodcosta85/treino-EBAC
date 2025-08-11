document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate');
    const bmiResult = document.getElementById('bmi-result');
    const bmiQualification = document.getElementById('bmi-qualification');

    if (!calculateBtn || !bmiResult || !bmiQualification) {
        console.log("some of the elements don't exist");
    }

    const calculateMyBMI = () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (!weight || !height) {
            alert('please insert the correct values in the respective fields');
        }

        let bmi = weight / (height * height);
        console.log(bmi);

        bmiResult.innerHTML = `Your BMI is: <span style="font-weight:bold">${bmi.toFixed(2)}</span>`;

        if (bmi < 18.5) {
            bmiQualification.textContent = `Underweight`
            bmiQualification.style.color = 'lightgreen'
        } else if (bmi < 25) {
            bmiQualification.textContent = `Normal weight`;
            bmiQualification.style.color = 'green'
        } else if (bmi < 30) {
            bmiQualification.textContent = `Overweight`;
            bmiQualification.style.color = 'orange'
            bmiQualification.style.fontWeight = 'semibold'
        } else {
           bmiQualification.textContent = `Obesity`;
           bmiQualification.style.color = 'red'
           bmiQualification.style.fontWeight = 'bold'
        }
    }

    calculateBtn.addEventListener('click', calculateMyBMI);

   


})