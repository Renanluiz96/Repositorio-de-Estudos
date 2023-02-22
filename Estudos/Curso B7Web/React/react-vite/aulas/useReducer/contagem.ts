import { useReducer } from "react"

type reducerState = { //Type do reducer state
    count: number; //Como este valor do reducer vai ser um contador , voce coloca o counter e o tipo dele
}
type reducerAction = {//Type para a ação do reducer
    type: string; //Aqui voce coloca o type como o tipo de ação que vai ocorrer seja um add, ou del , ou limpar, tudo isto vai estar como uma string, por isso tem que tipar como string.
}


const initialState = { count: 0} //Item inicial do reducer , vai ser um objeto com um count 0.

//Dentro da função reducer vai ter 2 parametros, 1º - qual vai ser o valor atual do reducer, 2º vai ser que ação voce quer executar , vai ser executada toda vez que eu quiser alterar algum valor no reducer , que seria a action ou seja a ação que vai ser executada para trocar o valor inicial da state. Pode usar ação de adicionar, deletar ... qualquer ação que voce criar , os parametros deste reducer precisam ser tipados.
const reducer = (state: reducerState, action: reducerAction) => { 
    //Recebe o state, depois eu faço a alteração que eu quiser baseado no meu action  neste state, e no final eu quero receber o meu novo state no novo valor, seja adiciono um numero , e vai me mostrar o numero novo. Voce receber retornando o state novo.

    //Da um switch e dentro do switch voce coloca a ação que vai ser executado, e o parametro voce coloca o action, e o type dele que voce fez la em cima no reducerAction
    switch (action.type) {
        case 'ADD': //Fez uma ação para adicionar, voce pode retornar um objeto que vai ser a copia do state(...state) e alterando o valor count para o valor do count + 1
            return{ ...state , count: state.count + 1}
        break;
        case 'DEL': // Delete , é a mesma logica do add, mais aqui voce ira diminuir um  do contador.
            if(state.count > 0){
                return{ ...state, count: state.count - 1}
            }
        break;
        case 'RESET': //Reset ira resetar o valor para o valor inicial do state , ou seja vai zerar o contador.
            return initialState 
        break;
    }
    return state;

}

export const useContagem = () => {//Faz uma função que dentro dela ja retorna to o useReducer, mais aqui voce fez em uma pagina separada. e exporta e importa ela para o app onde vai usar. que na hora de usar voce somente usa o useContagem que ja vai vim com tudo que tem aqui.
    return useReducer(reducer, initialState)
}