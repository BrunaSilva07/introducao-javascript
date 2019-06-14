var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for( i = 0; i <= pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = true;
    var alturaEhValido = true;

    if(peso <= 0 || peso >= 300){
        pesoEhValido = false;
        tdImc.textContent = 'Peso invállida';
        paciente.classList.add('paciente-invalido');
    }
    if(altura <= 0.40 || altura >= 2.50){
        alturaEhValido = false;
        tdImc.textContent ='Altura invállida';
        paciente.classList.add('paciente-invalido');
    }

    if(alturaEhValido && pesoEhValido) {
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}