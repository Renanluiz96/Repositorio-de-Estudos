export type GridItemType = {
    //Type para acessar o "numero" da posição do array que vai conter os items la no array items onde vai conter as informações do nome e icone do item, cada item do objeto vai ser um item do array na posição 0 , 1 ... então o type dele vai ser number para pegar o item desta posição do array. Só que este item pode ser vazil(null) porque ele pode comecar sem nada.
    item: number | null; 

    //Type para se o card estiver sendo exibido ou não
    shown: boolean; 

    // Type para ver se o card que viro foi o card certo e el vai retornar se o card for permanente ou não para ele ficar na tela.
    permanentShown: boolean;

}

//Type externo que vai conter todas as informações do grid item