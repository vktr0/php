let lastOperand = 0,
    result = 0,
    operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
});

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = "sum";
    inputWindow.value = '';
});

document.getElementById('btn_raz').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = "raz";
    inputWindow.value = '';
});

document.getElementById('btn_umn').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = "umn";
    inputWindow.value = '';
});

document.getElementById('btn_del').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = "del";
    inputWindow.value = '';
});

document.getElementById('btn_calc').addEventListener('click', function () {

    if (operation=="sum") {
        result = lastOperand + parseInt(inputWindow.value);
        console.log(lastOperand + " + " + parseInt(inputWindow.value) + " = " + result);
    }else if(operation=="raz") {
        result = lastOperand - parseInt(inputWindow.value);
        console.log(lastOperand + " - " + parseInt(inputWindow.value) + " = " + result);
    }else if(operation=="umn") {
        result = lastOperand * parseInt(inputWindow.value);
        console.log(lastOperand + " * " + parseInt(inputWindow.value) + " = " + result);
    }else if(operation=="del") {
        result = lastOperand / parseInt(inputWindow.value);
        console.log(lastOperand + " / " + parseInt(inputWindow.value) + " = " + result);
    }

    inputWindow.value = result;

    operation = null;
    lastOperand = 0;
    result = 0;
    
});

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
});

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
});

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
});

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
});

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
});

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
});

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
});

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
});

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
});

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
});