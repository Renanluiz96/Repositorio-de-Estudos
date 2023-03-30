//Criando um type para a action do reducer. Criando em um arquivo separado e exportando , para ser utilizado em outros reducers.
export type reducerActionType = {
    //Type padrão de um reducer , onde o usuario manda qual vai ser o tipo da ação que vai acontecer seja um add, del ...
    type: string; 

    //Payload - Que seria a carga que sera enviada junto com o type aqui vou criar um payload que vai conter um objeto e dentro deste objeto ele pode ser os dados , ou seja o dado novo , por exemplo quero a action de trocar de nome, então a action o type dela seria trocar de nome, e o payload seria o nome novo a ser trocado.
    //Entao vai ser um objeto que dentro vai ter um array que vai ser uma string que pode ter qualquer valor.
    payload: {
        [key: string]:any;
    }
}