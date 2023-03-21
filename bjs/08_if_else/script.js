const gameContainer = document.querySelector("#game"),
    cfgContainer = document.querySelector("#config"),
    errContainer = document.querySelector(".err"),
    elMinValue = document.querySelector("#minValue"),
    elMaxValue = document.querySelector("#maxValue");

//Сначала запихивал все в let, но область видимости дала мне по лицу. Однажды я разберусь в вопросе, но не сегодня
var orderNumberField = document.querySelector('#orderNumberField'),
    answerField = document.querySelector('#answerField'),
    minValue = 0,
    maxValue = 0,
    answerNumber = 0,
    orderNumber = 0
    gameRun = false;

function rand_phrase(type=null) {

    if (type=='fail') {

        var answ = [
            'Вы загадали неправильное число!',
            'Я сдаюсь...',
            'Я отыграюсь!',
        ];

    }else if(type=='result') {

        var answ = [
            'Вы загадали число: ',
            'Кажется, это число: ',
            'Скорее всего, ответ: ',
        ];

    }else if(type=='success') {

        var answ = [
            'Поздравления принимаю на карту: 4276 ...',
            'Я всегда угадываю',
            'Хочешь сыграть еще раз?',
        ];

    }else{

        return false;

    }

    return answ[Math.floor(Math.random()*answ.length)];

}

function num2word(num) {

    if (num==0) return 0;

    var input = num,
        result = '';

    if (input<0) {

        result += 'минус ';
        input = Math.abs(input);

    }

    var sot = Math.floor(input/100);

    switch (sot) {
        case 1:
            result += 'сто ';
            input = input-100;
            break;
        case 2:
            result += 'двести ';
            input = input-200;
            break;
        case 3:
            result += 'триста ';
            input = input-300;
            break;
        case 4:
            result += 'четыреста ';
            input = input-400;
            break;
        case 5:
            result += 'пятьсот ';
            input = input-500;
            break;
        case 6:
            result += 'шестьсот ';
            input = input-600;
            break;
        case 7:
            result += 'семьсот ';
            input = input-700;
            break;
        case 8:
            result += 'восемьсот ';
            input = input-800;
            break;
        case 9:
            result += 'девятьсот ';
            input = input-900;
            break;
    }

    switch (input) {
        case 10:
            result += "десять";
            input = '0';
            break;
        case 11:
            result += "одиннадцать";
            input = '0';
            break;
        case 12:
            result += "двенадцать";
            input = '0';
            break;
        case 13:
            result += "тринадцать";
            input = '0';
            break;
        case 14:
            result += "четырнадцать";
            input = '0';
            break;
        case 15:
            result += "пятнадцать";
            input = '0';
            break;
        case 16:
            result += "шестнадцать";
            input = '0';
            break;
        case 17:
            result += "семнадцать";
            input = '0';
            break;
        case 18:
            result += "восемнадцать";
            input = '0';
            break;
        case 19:
            result += "девятнадцать";
            input = '0';
            break;

    }

    var des = Math.floor(input/10);

    switch (des) {
        case 2:
            result += 'двадцать ';
            input = input-20;
            break;
        case 3:
            result += 'тридцать ';
            input = input-30;
            break;
        case 4:
            result += 'сорок ';
            input = input-40;
            break;
        case 5:
            result += 'пятьдесят ';
            input = input-50;
            break;
        case 6:
            result += 'шестьдесят ';
            input = input-60;
            break;
        case 7:
            result += 'семьдесят ';
            input = input-70;
            break;
        case 8:
            result += 'восемьдесят ';
            input = input-80;
            break;
        case 9:
            result += 'девяносто ';
            input = input-90;
            break;
    }

    switch (input) {
        case 1:
            result += 'один';
            break;
        case 2:
            result += 'два';
            break;
        case 3:
            result += 'три';
            break;
        case 4:
            result += 'четыре';
            break;
        case 5:
            result += 'пять';
            break;
        case 6:
            result += 'шесть';
            break;
        case 7:
            result += 'семь';
            break;
        case 8:
            result += 'восемь';
            break;
        case 9:
            result += 'девять';
            break;
    }

    if (result.length>20) result = num;

    return result;

}

function err(text) {

    errContainer.innerText = text;
    errContainer.classList.toggle("hide");

    setTimeout(() => {
        errContainer.classList.toggle("hide");
    }, 3000);

    return true;

}

document.getElementById('btnStart').addEventListener('click', function () {

    if (elMinValue.value=="" || elMaxValue.value=="") {

        return err('Пожалуйста, укажите минимальное и максимальное значение');
    
    }else if (!parseInt(elMinValue.value) && elMinValue.value!='0' || !parseInt(elMaxValue.value) && elMaxValue.value!='0') {

        return err('Увы, игра принимает только целые числа :(');
        
    }

    minValue = parseInt(elMinValue.value);
    maxValue = parseInt(elMaxValue.value);

    if (minValue<-999) minValue = -999;
    if (maxValue>999) maxValue = 999;

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = rand_phrase('result')+num2word(answerNumber);

    gameContainer.classList.toggle("hide");
    cfgContainer.classList.toggle("hide");

    gameRun = true;

})

document.getElementById('btnRetry').addEventListener('click', function () {

    gameContainer.classList.toggle("hide");
    cfgContainer.classList.toggle("hide");

    gameRun = false;

})

document.getElementById('btnOver').addEventListener('click', function () {

    if (!gameRun) return false;

    if (minValue === maxValue){
        answerField.innerText = rand_phrase('fail');
        gameRun = false;
    } else {
        minValue = answerNumber  + 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = rand_phrase('result')+num2word(answerNumber);
    }
})

document.getElementById('btnLess').addEventListener('click', function () {

    if (!gameRun) return false;

    if (minValue === maxValue){
        answerField.innerText = rand_phrase('fail');
        gameRun = false;
    } else {
        maxValue = answerNumber - 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);

        if (answerNumber<minValue) {
            answerField.innerText = rand_phrase('fail');
            gameRun = false;
            return false;
        }

        orderNumber++;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = rand_phrase('result')+num2word(answerNumber);
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {

    if (!gameRun) return false;

    answerField.innerText = rand_phrase('success');
    gameRun = false;

})
