// Variaveis dentro de funções 
// Quando voce cria uma função e dentro desta função voce cria uma variavel , e digamos que voce queira usar esta variavel , fora desta função  sem ela ja ter sido criada fora, ela não vai funcionar pois as variaveis que voce cria dentro das funções ficam somente la , elas fora da função elas não existem
// Agora se voce ja tem uma variavel fora da função e quer usar ela dentro de alguma função isso ja funciona . Pois ja existe fora da função. Pois esta variavel ela é uma variavel de escopo global , variavel de escopo global é uma variavel que voce crio fora de todas as funções
//Basicamente a variavel que voce crio fora voce consegue usar dentro de qualquer função.

// Variaveis dentro de funções são chamadas de variaveis de escopo local = pois voce crio ela dentro de uma função e fora da função esta variavel não existe.
// E se caso voce tiver uma variavel  escopo global(Fora da função) e outra variavel escopo local(Dentro da função) se as 2 tiver o mesmo nome , a variavel de escopo local ela tem preferencia sobre a variavel de escopo global  quando elas tem o mesmo nome
let count = 0;

function add() {
   let count = 0
   count++
}


add();
add();

console.log(count)