const inputDivs = document.querySelectorAll('.input');
const inputElems = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');


inputDivs.forEach((inputDiv, inputDivIndex) => {
    
    inputElems.forEach((input, index) => {
        inputDiv.addEventListener('click', () => {
            inputDivs.forEach((otherInputDiv, otherInputDivIndex) => {
                if(!input.value.length > 0){
                    labels[otherInputDivIndex].classList.remove('toggle');
                }
            })
            console.log(inputDivIndex);
            labels[inputDivIndex].classList.add('toggle');

    });
    })
});
