//Contextual Typeing  = É o typescript "entendendo" o que esta acontecendo no seu codigo , ele esta entendendo o contexto do codigo , e automaticamente ele esta tipando as suas variaveis e funções de acordo com o conteudo dentro delas

// Se voce fizer uma variavel , e não declarar qual tipo ela é. Mas se tem um padrão de tipos aqui no exemplo strings,então automaticamente o typescript entende que esta variavel é somente string e vai tipar ela desta maneira
let names = ['pedro', 'lara', 'marcelo', 'paulo', 90];


// Então ja que o typescript entende que aquela variavel só tem string . E voce usa uma função e tambem não tipa ela colocando nada , como ele vai "interpretar o contexto do codigo" pensando como tudo é uma sting então esta função vai receber e retornar uma string tambem ele ja coloca tudo automaticamente.
names.forEach(nome => {

    // Agora se por exemplo no meio do array de string tiver um outro tipo(number) . Uma das opções é verificar o tipo antes de fazer , algo pois se caso ele passar pelo item do array e for um numero ele vai ocasionar erro , Voce pode colocar um typeof para verificar se o item do array que ele passou for tipo string = ele executa um codigo. Se não for ele executa outro. Desta maneira o typescript não reclama.
    if(typeof nome === 'string') {
        console.log(nome.toLocaleUpperCase())
    } else {
        console.log(nome);
    }
});