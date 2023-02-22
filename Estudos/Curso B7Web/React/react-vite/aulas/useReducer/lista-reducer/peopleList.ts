import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'; // Importa da biblioteca uuid que foi instalado, voce importa o v4 e usa  o as para renomear ela para uuidv4 = que serve para criar um hash de identificação.

//Type para a lista de pessoas vai ter um id e um nome que vão ser uma string
type Person = {
    id: string;
    name: string;
}

//Aqui vai ser o tipo da ação que vai ser executada no state = que seria a ação executada na lista de pessoas
type ActionType = {
    type : string // Tipo da ação vai ser uma string
    payload?: {// payload que pode ser um nome ou um id vai ser opcional que vai ser para se referir a algo ou alguem dentro da lista . Por exemplo , deletar quem? ai me identifico pelo payload name ou o id . então ou pode ter um nome ou um id depende da situação.
        name?: string;
        id?: string;
    }
}

//Initial state vai ser uma lista de pessoas , então ele vai comecar vazio. Depois vai adicionando as pessoas dentro deste array
const initialState: Person[] = [];

//Este reducer vai ter uma state que vai ser a lista de pessoas , por isso vai esta usando o type Person
const reducer = (state: Person[] , action: ActionType) => {
    switch(action.type) { //Faz um switch para fazer os tipos de ações que podem alterar a sua state inicial
        case 'ADD':
            //Vai fazer uma verificação tiver um payload.name , ele faz o push. Pois o payload é opcional, então verifica se tiver ele faz .
            if(action.payload?.name) {
                const newState = [...state]; //Criando uma nova state que vai ser uma copia do state , e vai fazer um push depois na copia da lista
                newState.push({ // Faz um push adicionando um objeto no array que este objeto vai conter um id e um name.
                    id: uuidv4(), //id vai ser o hash criado pela função que vai ter dentro da biblioteca .
                    name: action.payload?.name //Name vai ser o nome da pessoa que voce quer adicionar.
                });
                return newState //E depois ele retorna esta copia da state, para poder renderizar na tela o novo array
            }
        break;
        case 'DEL':
            //Para deletar , precisa verificar primeiro se mando o id. 
            if (action.payload?.id) { //Se tiver um id pra deletar ,então ele deleta
                let newState = [...state]
                //Para deletar , voce vai criar novamente um array novo sem o item que voce quer deletar , voce tem um item do array quer deletar ele , voce pega todos os outros itens do array e cria novamente um outro array sem este que voce quer deletar. Assim sobreescrevendo o array antigo.
                newState = newState.filter(item => item.id !== action.payload?.id);
                //To criando um array que tenha um id diferente deste id que estou mandando aqui
                return newState
            }
        break;
        case 'ORDER':
            //Para reordenar usa a função sort, e dentro da função sort faz uma logica de dois itens, se o item A for um nome maior que o numero B , ele joga o item A para cima, se for menor ele joga o item A para baixo do item B. Maior = sentido ordem alfabetica.
            let newState = [...state]
            newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return newState
        break;

    }

    return state; //Retorna a state
}

export const usePeopleList = () => {
    //retornar o useReducer , para ser executada em outro parte do seu site. pelo nome de usePeopleList
    return useReducer(reducer, initialState)
}