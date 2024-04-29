let btnDigitos = document.querySelectorAll('#btnDigitos');

btnDigitos.forEach(function(b) {
    b.onclick = function() {
        document.querySelector('#mostrarValor').innerHTML = b.innerHTML;
    }
})
