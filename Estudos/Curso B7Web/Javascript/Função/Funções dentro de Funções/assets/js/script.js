//Funções dentro de funções


/*
function square(x) {
   return x * x;
} 

function addSquares(a, b) {
   let sqrA = square(a); 
   let sqrB = square(b);
   return sqrA  + sqrB
} 
*/

//Dica : Sempre que voce fizer uma função dentro de outra a primeira função voce faz usando function tradicional , e a segunda voce pode fazer usando arrow function mesmo se ela não for em um linha só e precisar usar o return e tudo mais . 
//Basicamente só de de ter apenas escrito 1 function ja fica melhor legivel de ler o codigo do que ler uma function abaixo de outra

function addSquares(a, b) {
   const square = (x) => {
      return x * x;
   } 

   let sqrA = square(a); 
   let sqrB = square(b);
   return sqrA  + sqrB
} 

console.log(addSquares(2,3))