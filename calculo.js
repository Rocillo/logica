var a,b,x,y,total,media;

a = 8;
b = 3;
x = 5;
y = 3;
notas = [a,b,x,y];

//total = x + y;
//total = x - y;
//total = x * y;
//total = x / y;
//total = x % y; Resto da divisão
total = (x + y + a + b);

media = total/notas.length;


if (media >= 7){
    console.log('Você foi aprovado');
    console.log(media);
}
else if (media >= 5){
    console.log('Você está de recuperação');
    console.log(media);
}
else{
    console.log('Você foi reprovado');
    console.log(media);
}

function newFunction() {
    console.log(notas.length);
}

