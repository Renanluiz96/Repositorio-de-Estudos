import { reducerActionType } from "../types/reducerActionType";

//Criar um arquivo Reducer, para utiliza-la com o Contexto.

//Criando o type para os meus dados iniciais .
export type UserType = {
    name: string;
    age: number;
}


//Dados iniciais que o meu reducer vai ter(futuramente pode ser alterado.)
export const userInitialState = {
    name: '',
    age: 0
}

//Criando o proprio reducer, usando os type do userType, e o type externo para a action.
export const userReducer = (state: UserType, action: reducerActionType) => {
    //Dentro do reducer cria um switch que é padrão do reducer, para cada type fazer uma action diferente.
    switch(action.type) {
        //Vai ter um type chamado CHANGE_NAME. que ao ser acionado ele vai retornar um objeto, que dentro dele vai ter uma copia do state(por causa da imutabilidade , tem que fazer uma copia do state e alterar nela.) e nessa copia voce altera o valor de name, para o valor do payload.name ou seja o que voce quiser mandar ou o que digito agora vai ser alterado
        case 'CHANGE_NAME' :
            return {...state, name: action.payload.name}
        break
        //Mescma coisa com o age , vai ser retornado uma copia da state , e alternado o valor da copia para o que voce mandar no payload.
        case 'CHANGE_AGE' :
            return {...state, age: action.payload.age}
        break
    }


    return state;

}