const quantidadealunos = 14;
var x;

for(let numero=0; numero <= quantidadealunos; numero++){
    
    x = numero % 2;
    //console.log(x);

    if (numero == 0){
        console.log(numero + ' ' + 'O numero registrado foi Nulo');
    }

    else if (x == 1){
        console.log(numero+ ' ' +'O numero de alunos é IMPAR'); 
    }

    else{
        console.log(numero + ' ' +'O numero de alunos é PAR');
    }

}