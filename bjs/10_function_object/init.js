function generate(){

    const initPerson = personGenerator.getPerson(),
        patronymic = patronymicGenerator;

    document.querySelector('#lastNameOutput').innerText = initPerson.lastName;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;

    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;

    document.querySelector('#professionOutput').innerText = initPerson.profession;

    document.querySelector('#patronymicOutput').innerText = patronymic.getPatronymic(JSON.stringify(initPerson));

}

function reset(){

    document.getElementById('lastNameOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';

    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';

    document.getElementById('professionOutput').innerText = '';

    document.getElementById('patronymicOutput').innerText = '';

}

window.onload = generate();