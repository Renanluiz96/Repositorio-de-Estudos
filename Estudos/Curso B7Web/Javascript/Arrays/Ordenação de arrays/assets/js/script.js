//Ordenação de arrays

let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

//Para colocar os itens do seu array em ordem alfabetica voce usa o sort
//    fruits.sort()

//Para voce colocar os itens da sua lista em ordem decrescente ou seja o inverso da ordem alfabetica , voce tem que combinar 2 funções para isto , uma é o sort = Para deixa em ordem crecente , e a outra é o reverse = para inverte a ordem , assim ele comecaria pelo final.
//    fruits.sort()
//    fruits.reverse()

let cars = [
   {brand:'Fiat', year: 2022},
   {brand:'Bmw', year: 2018},
   {brand:'Ferrari', year: 2020}
]

//Para ordenar um array com objetos , e ordenar de acordo com a propriedade do item que esta dentro do objeto , Voce usa o sort dentro do array só que dentro deste sort, voce usa uma outra função.
cars.sort((a, b) => a.year - b.year)

console.log(cars)
