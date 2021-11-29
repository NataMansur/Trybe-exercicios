//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let number of numbers){
    console.log(number);
};

//exercicio 2
let sum = 0
for(let index = 0; index<numbers.length; index++){
    sum = sum + numbers[index];
};
console.log("soma: ", sum);

//exercicio 3
let media = sum/numbers.length;
console.log("média: ", media);

//exercicio 4
if(media > 20){
    console.log("média maior que 20");
}else{
    console.log("média menor que 20");
};

//exercicio 5
let maior = numbers[0]
for(index = 0; index<numbers.length; index++){
    if(numbers[index] > maior){
        maior = numbers[index];
    }
};
console.log("maior número:", maior);

//exercicio 6
let contImpar = 0;
for(index = 0; index<numbers.length; index++){
    if(numbers[index]%2 == 0){
        contImpar++;
    };
}
if(contImpar > 0){
    console.log("qdd de ímpares:", contImpar);
}else{
    console.log("nenhum valor ímpar emcontrado")
};

//exercicio 7
let menor = numbers[0]
for(index = 0; index<numbers.length; index++){
    if(numbers[index] < menor){
        menor = numbers[index];
    }
};
console.log("menor número:", menor);

//exercicio 8
let segundaArray = [];
for(index = 1; index <= 25; index++){
    segundaArray.push(index);
};
console.log(segundaArray);

//exercicio 9
for(index = 0; index<segundaArray.length; index++){
    let div = segundaArray[index]/2;
    console.log(div);
};