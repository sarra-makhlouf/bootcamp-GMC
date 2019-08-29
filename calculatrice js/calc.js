let buttons = Array.from(document.querySelectorAll('.calc-buttons span'));
let screen = document.querySelector('.display');
let x = '';
let operators = Array.from(document.querySelectorAll('.operator')).map(
  el => el.innerHTML
);
// console.log(operators)
buttons.map(el =>
  el.addEventListener('click', e => {
    isNaN(x[x.length - 1]) && ['÷', 'x', '+'].includes(e.target.innerHTML)
      ? (x = x.slice(0, -1) + e.target.innerHTML)
      : e.target.innerHTML.match(/[0-9]/) ||
        operators.includes(e.target.innerHTML)
      ? (x += e.target.innerHTML)
      : null;
    x = x.replace(/^[÷x]/, '').replace(/--/g, '-').replace(/[÷x+][÷x+]/g, x[x.length - 1]);
    screen.innerHTML = x;
  })
);

const sum = () => {
  if (screen.innerHTML !== '') {
    screen.innerHTML = eval(x.replace(/÷/g, '/').replace(/x/g, '*'));
  }
  x = screen.innerHTML;
};

const reset = () => {
  screen.innerHTML = '0';
  x = '';
};

const erase = () => {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
  x = screen.innerHTML;
};

document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.equal').addEventListener('click', sum);
document.querySelector('.delete').addEventListener('click', erase);
