/* Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em 
tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável. */



//Calculando a  área de um Retângulo. 
var area, base , altura; 

base = parseInt(prompt("Seja bem vindo!!\n Digite a base: "));

altura = parseInt(prompt("Seja bem vindo!!\n Digite a altura: "));

area = base* altura ; 

alert(area); 


//Calculando a área do Quadrado 
var area, lado ;

lado = parseFloat(prompt("Olá seja bem-vindo\n digite o lado do seu quadrado: "));

area = Math.pow(lado, 2);

alert(area);


//Calculando a área do Losango 

var diag_maior, diag_menor, area ;

var diag_maior = parseFloat(prompt("Olá seja bem-vindo!!\n Digite a Diagonal maior : "));
var diag_menor = parseFloat(prompt("Digite a Diagonal maior : "));

area = (diag_maior * diag_menor) /2 ;

alert("A área do losango é: " + area); 


//Calculando a área do Paralelogramo 

var area, base , altura ;

base = parseFloat(prompt("Seja bem-vindo\nDigite a base: "));
altura = parseFloat(prompt("Seja bem-vindo\nDigite a altura: "));

area = base * altura ; 

alert("A área do Palelogramo é: "+ area + "!"); 
 
//Calculando a área do Triângulo 

var area, base,  altura;

base =parseFloat(prompt("Seja bem-vindo\n Digite a base: "));

altura =parseFloat(prompt("Seja bem-vindo\n Digite a altura: "));

area = (base * altura) / 2 ;

alert("A área do Triângulo é: " + area);


//Calculando a área do Circulo. 

var  area , raio; 
const pI = 3.15; 
raio = parseFloat(prompt("Seja bem-vindo\n Digite o raio: ")); 

area = Math.pow(pI, raio); 

alert("A área do circulo é: "+ area);






