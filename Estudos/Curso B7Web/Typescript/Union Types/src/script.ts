// Types de multiplos tipos  = É onde voce tipa alguma coisa com duas tipagens ou mais os separando por ' | ' - exemplo: string | number   = To definindo que o parametro ou variavel exemplo ele pode receber tanto uma string quanto uma variavel.

function mostrarIdade(idade: string | number ) {
    if(typeof idade === 'string') {

        //Mas se voce usa em por exemplo uma função , se voce usa alguma coisa especifica para um tipo de tipagem por exemplo o toUpperCase() que é especificamente usado para strings, voce tem que coloca-lo dentro de um if , para verificando se aquele tipo é da tipagem especifica - aqui por exemplo , verifica se o parametro é do tipo string , se for então voce executa a função especifica para o tipo string
        console.log( idade.toUpperCase())
    } else {
        // caso contrario o parametro não for do tipo string , ele vai executar outro codigo , que nas 2 tipagem não da problema
        console.log(idade)
    }
}

mostrarIdade(90);
mostrarIdade('90');