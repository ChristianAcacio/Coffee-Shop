let contador = 1    
document.getElementById("radio1").checked = true;

setInterval(function(){
    proximaimg();
}, 1000)

function proximaimg(){
    contador ++;
    if (contador > 6 ){
        contador = 1 
    }

    document.getElementById("radio" + contador).checked = true;
}







const header = document.getElementById('header');
let lastScroll = 0;



window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {

      header.classList.add('transform', '-translate-y-full'); 
      header.classList.remove('translate-y-0'); 
    } else {

      header.classList.add('transform', 'translate-y-0'); 
      header.classList.remove('-translate-y-full'); 
    }

    lastScroll = currentScroll;
  });