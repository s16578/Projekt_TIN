function validateForm() {
    const modelInput = document.getElementById('model');
    const employeeInput = document.getElementById('employee');

    const errorModel = document.getElementById('errorModel');
    const errorEmployee = document.getElementById('errorEmployee');
    const errorsSummary = document.getElementById('errorsSummary')

    resetErrors([modelInput, employeeInput], [errorModel, errorEmployee], errorsSummary);

    let valid = true;


    if (!checkRequired(modelInput.value)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "Model jest wymagany";
    }

    if (!checkRequired(employeeInput.value)) {
        valid = false;
        employeeInput.classList.add("error-input");
        errorEmployee.innerText = "Serwisant wymagany";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}