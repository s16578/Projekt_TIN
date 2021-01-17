function validateForm() {
    const modelInput = document.getElementById('model');
    const ramInput = document.getElementById('RAM');
    const discInput = document.getElementById('Disc');
    const noteInput = document.getElementById('customer_note')

    const errorModel = document.getElementById('errorModel');
    const errorRam = document.getElementById('errorRam');
    const errorDisc = document.getElementById('errorDisc');
    const errorNote = document.getElementById('errorNote');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([modelInput, ramInput, discInput, noteInput], [errorModel, errorRam, errorDisc, errorNote], errorsSummary);

    let valid = true;

    console.log(modelInput.value)

    if (!checkRequired(modelInput.value)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "Nazwa modelu jest wymagana";
    } else if (!checkTextLengthRange(modelInput.value, 5, 30)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "Nazwa modelu powinno zawierać od 5 do 30 znaków";
    }

    if (!checkRequired(ramInput.value)) {
        valid = false;
        ramInput.classList.add("error-input");
        errorRam.innerText = "Ilość pamięci RAM jest wymagana";
    } else if (!checkInt(ramInput.value)) {
        valid = false;
        ramInput.classList.add("error-input");
        errorRam.innerText = "Ilość RAM powinna być liczbą całkowitą";
    } else if (!checkPositiveNumber(ramInput.value)) {
        valid = false;
        ramInput.classList.add("error-input");
        errorRam.innerText = "Ilość RAM powinna być liczbą dodatnią";
    }


    if (!checkRequired(discInput.value)) {
        valid = false;
        discInput.classList.add("error-input");
        errorDisc.innerText = "Pojemność dysku jest wymagana";
    } else if (!checkInt(discInput.value)) {
        valid = false;
        discInput.classList.add("error-input");
        errorDisc.innerText = "Pojemność dysku powinna być liczbą całkowitą";
    } else if (!checkPositiveNumber(discInput.value)) {
        valid = false;
        discInput.classList.add("error-input");
        errorDisc.innerText = "Pojemność dysku powinna być liczbą dodatnią";
    }

    if (!checkRequired(noteInput.value)) {
        valid = false;
        noteInput.classList.add("error-input");
        errorNote.innerText = "Notatka jest wymagana";
    } else if (!checkTextLengthRange(noteInput.value, 10, 200)) {
        valid = false;
        noteInput.classList.add("error-input");
        errorNote.innerText = "Notatka powinna zawierać od 10 do 200 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}