let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
  contador++;
  if (contador > 4) contador = 1;
  document.getElementById("radio" + contador).checked = true;
  document.querySelector('.slides-box').style.animation = 'none';
  document.querySelector('.slides-box').offsetHeight;
  document.querySelector('.slides-box').style.animation = null;
}, 10000);