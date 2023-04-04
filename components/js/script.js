window.onload = function () {
    alert('site em construção tmj é nois')
    alert('roubamo o códigoEfodacekkkkkk')
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
        
    });
    
}