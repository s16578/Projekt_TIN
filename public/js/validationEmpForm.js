function validateForm() {
    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('surname');
    const roleInput = document.getElementById('role');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorSecondName');
    const errorRole = document.getElementById('errorRole')
    const errorsSummary = document.getElementById('errorsSummary')

    resetErrors([firstNameInput, lastNameInput, roleInput], [errorFirstName, errorLastName, errorRole], errorsSummary);

    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Imię jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 30)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Imię powinno zawierać od 2 do 30 znaków";
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Nazwisko jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 30)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Nazwisko powinno zawierać od 2 do 30 znaków";
    }

    if (!checkRequired(roleInput.value)) {
        valid = false;
        roleInput.classList.add("error-input");
        errorRole.innerText = "Rola jest wymagana";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}