// MODEL DE TUDO RELACIONADO AO PRODUTO.


type Product  = {
    title: string,
    price: number
}
// VARIAVEL QUE VAI SIMULAR AS INFORMAÇÕES DE UM BANCO DE DADOS , PARA BUSCAR AS INFORMAÇÕES.
const data: Product[] = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto Z', price: 20}
]

// Um objeto onde vai ter todas as funções relacionadas ao produto. 
export const Product = {
    // Função relacionada a pegar todos os produtos da lista.
    getAll: ():Product[] => {
        return data;
    },
    // Função onde filtra os produtos acima de um preço passado entre o parametro. Tipa ela com o product para ela entender que vai lidar com os dados da lista Products e vai retornar algum resultado deles.
    getFromPriceAfter: (price: number): Product[] => {
        //Vai usar a função filter do javascripte pegando o item e retornando cada item do array que o preco é maior que o preco definido do parametro .
        return data.filter(item => item.price >= price);
    }
}