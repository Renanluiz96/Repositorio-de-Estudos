import { createContext, useReducer } from "react";
//Importando os dados la do arquivo reducer
import { UserType, userInitialState, userReducer } from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";
import { ThemeType, themeInitialState, themeReducer } from "../reducers/themeReducer";



//Type que vai ter o user do reducer, que ele vai ter o mesmo type do reducer que estamos utilizando . Pode criar um objeto type que pode salvar alguns outros types ,assim ficando este type aqui como global, e dentro dele podendo ter outros types para cada reducer por exemplo
type initialStateType = {
    //Criar um type que vai ser usado neste reducer, que poderia ter mais de 1 reducer , e este type vai ser o type exportao junto com a constante que ja tem salvo os dados.
    user: UserType
    theme: ThemeType
}

// Criando um type para o contexto que vai tertypes mais genericos.
type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}


//Criar uma constante que vai ter os dados iniciais do state.
const initialState = {
    //Como pode ter mais de um reducer eu coloco um user com uma tipagem do reducer que quero usar, se tiver outro reducer pode colocar um outro dado com a tipagem para outro reducer

    user: userInitialState, //Este user vai ser usado em um reducer, por isso que coloquei esta tipagem , pois la ja vai ter acesso ao name e age que são os dados que quero usar.
    theme: themeInitialState
}


//Criando um contexto utilizando reducers. Mandando dentro do createContext dois parametros o primeiro que seria o dado da state, e o segundo seria o dispatch(que é a função do reducer, para alteração do reducer por ações.)

export const Context = createContext<ContextType>({
    //State com o type que vai ter aquela state "global" que dentro desta state ja tem a deste reducer, podendo ter até mais.
    state: initialState,
    
    //Tem um dispatch que vai ter uma função que pode retornar null
    dispatch: () => null 
});

//Criando um reducer que engloba todos os outros reducers, pois somente pode usar 1 reducer no fim das contas.
//Reducer global - que vai receber por parametros a state com o type global de state. e o actio que vai ter um type para action externo
const mainReducer = (state:initialStateType, action: reducerActionType) => ({
    //Aqui vai ter este reducer que vai ter uma função do reducer criada externamente, utilizando  o dado do proprio usuario que foi pego tambem em um arquivo externo e tipado para este reducer.
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
});

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}