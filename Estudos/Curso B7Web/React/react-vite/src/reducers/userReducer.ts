import { reducerActionType } from "../types/reducerActionType";

//Criar um arquivo Reducer, para utiliza-la com o Contexto.

//Criando o type para os meus dados iniciais .
export type UserType = {
    name: string;
    age: number;
}


//Dados iniciais que o meu reducer vai ter(futuramente pode ser alterado.)
export const userInitialState = {
    name: 'Renan',
    age: 26
}

//Criando o proprio reducer, usando os type do userType, e o type externo para a action.
export const userReducer = (state: UserType, action: reducerActionType) => {
    //Dentro do reducer cria um switch que é padrão do reducer, para cada type fazer uma action diferente.
    switch(action.type) {
        case 'CHANGE_NAME' :
            return {...state, name: action.payload.name}
        break
        case 'CHANGE_AGE' :
            return {...state, age: action.payload.age}
        break
    }


    return state;

}