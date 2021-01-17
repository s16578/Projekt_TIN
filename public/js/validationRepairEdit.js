function validateForm() {
    const statusInput = document.getElementById('status');
    const dateEndInput = document.getElementById('date_end');
    const dateStartInput = document.getElementById('date_start');
    const noteInput = document.getElementById('note');
    const costInput = document.getElementById('cost');

    const errorStatus = document.getElementById('errorStatus');
    const errorDateEnd = document.getElementById('errorDateEnd');
    const errorNote = document.getElementById('errorNote');
    const errorCost = document.getElementById('errorCost');
    const errorsSummary = document.getElementById('errorsSummary');

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');



    resetErrors([statusInput, dateEndInput, noteInput, costInput], [errorStatus, errorDateEnd, errorDateEnd, errorCost], errorsSummary);

    let valid = true;



    if (!checkRequired(statusInput.value)) {
        valid = false;
        statusInput.classList.add("error-input");
        errorStatus.innerText = "Status jest wymagany";
    } else if (!checkTextLengthRange(statusInput.value, 2, 30)) {
        valid = false;
        statusInput.classList.add("error-input");
        errorStatus.innerText = "Status powinien zawierać od 2 do 30 znaków";
    }

    if (!checkRequired(noteInput.value)) {
        valid = false;
        noteInput.classList.add("error-input");
        errorNote.innerText = "Notatka jest wymagana";
    } else if (!checkTextLengthRange(noteInput.value, 2, 30)) {
        valid = false;
        noteInput.classList.add("error-input");
        errorNote.innerText = "Status powinien zawierać od 2 do 30 znaków";
    }

    if (!checkRequired(costInput.value)) {
        valid = false;
        costInput.classList.add("error-input");
        errorCost.innerText = "Koszt całkowity jest wymagany";
    } else if (!checkInt(costInput.value)) {
        valid = false;
        costInput.classList.add("error-input");
        errorCost.innerText = "Koszt całkowity powinien być liczbą całkowitą";
    } else if (!checkPositiveNumber(costInput.value)) {
        valid = false;
        costInput.classList.add("error-input");
        errorCost.innerText = "Koszt całkowity powinien być liczbą dodatnią";
    }


    if (!checkRequired(dateEndInput.value)) {
        valid = false;
        dateEndInput.classList.add("error-input");
        errorDateEnd.innerText = "Pole jest wymagane";
    } else if (!checkDate(dateEndInput.value)) {
        valid = false;
        dateEndInput.classList.add("error-input");
        errorDateEnd.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkRequired(dateStartInput.value) && checkDate(dateStartInput.value)
        && !checkDateIsBefore(dateStartInput.value, dateEndInput.value)) {
        //jeśli data od oraz data do jest poprawna, sprawdzamy kolejność dat
        valid = false;
        dateEndInput.classList.add("error-input");
        errorDateEnd.innerText = "Data zakończenia naprawy powinna być późniejsza niż jej rozpoczęcie";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}