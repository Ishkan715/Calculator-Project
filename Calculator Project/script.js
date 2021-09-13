'use strict';

let total = [];

document.getElementById('btn-1').addEventListener('click', function () {
  document.getElementById('total').value = 1;
  total.push('1');
});

document.getElementById('btn-2').addEventListener('click', function () {
  document.getElementById('total').value = 2;
  total.push('2');
});

document.getElementById('btn-3').addEventListener('click', function () {
  document.getElementById('total').value = 3;
  total.push('3');
});

document.getElementById('btn-4').addEventListener('click', function () {
  document.getElementById('total').value = 4;
  total.push('4');
});

document.getElementById('btn-5').addEventListener('click', function () {
  document.getElementById('total').value = 5;
  total.push('5');
});

document.getElementById('btn-6').addEventListener('click', function () {
  document.getElementById('total').value = 6;
  total.push('6');
});

document.getElementById('btn-7').addEventListener('click', function () {
  document.getElementById('total').value = 7;
  total.push('7');
});

document.getElementById('btn-8').addEventListener('click', function () {
  document.getElementById('total').value = 8;
  total.push('8');
});

document.getElementById('btn-9').addEventListener('click', function () {
  document.getElementById('total').value = 9;
  total.push('9');
});

document.getElementById('btn-0').addEventListener('click', function () {
  document.getElementById('total').value = 0;
  total.push('0');
});

document.getElementById('btn-add').addEventListener('click', function () {
  document.getElementById('total').value = '+';
  total.push('+');
});

document.getElementById('btn-subtract').addEventListener('click', function () {
  document.getElementById('total').value = '-';
  total.push('-');
});

document.getElementById('btn-multiply').addEventListener('click', function () {
  document.getElementById('total').value = 'x';
  total.push('*');
});

document.getElementById('btn-divide').addEventListener('click', function () {
  document.getElementById('total').value = '/';
  total.push('/');
});

document.getElementById('btn-equals').addEventListener('click', function () {
  const xtotal = eval(total.join(''));
  document.getElementById('total').value = xtotal;
});

document.getElementById('btn-clear').addEventListener('click', function () {
  document.getElementById('total').value = '';
  total = [];
});
