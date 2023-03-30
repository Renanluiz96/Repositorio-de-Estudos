import React, { createContext } from "react";

/* ContextApi 

CONTEXT API = GERENCIAMENTO DE ESTADOS

Context Api= Serve para pegar algum grupo de informação e deixar salva como se fosse uma bolha em que voce coloca algumas informações e e estas informações ficam digamos "salvas globalmente " dentro de uma bolha , e então tudo que voce colocar dentro desta bolha vai poder tambem ter as informações sobre estes dados que voce salvar nesta bolhas.
// Podemos criar um componente ou até mesmo um site inteiro dentro desta bolha digamos assim para que elas sejam usadas as informações delas mesma. "Para não termos que passar tudo em props para cada componente ter muitas props" . Fazemos isso criamos um contexto que vai ter algumas informações e dentro deste contexto colocamos algumas informações que queremos usar , pode ser informações de usuarios logados na tela. Um Dark/Light mode ... Pode ser qualquer coisa que voce quer ter de dados e quer salvar essas informações para usar dentro de um contexto em especifico. 

Digamos que voce queira salvar um Dark/Light Mode, Vai ter as caracteristicas sobre cada uma em uma bolha .

// Normalmente se cria uma pasta contexts, com um ou mais arquivos sobre os contextos. E dentro dela voce cria e exporta uma constante que vai criar o contexto com o createContext e dentro dele voce coloca a variavel de dados que voce quer salvar deste contexto para que todos tem acesso as "Informação". 
// Depois voce cria e exporta o context.Provider, que voce vai exportar ela, e tudo dentro dela vai pode ser uma pagina ou até mesmo o site inteiro . Ai sim voce usa ela no app.tsx que dentro dele voce usa o componente que vai ter acesso a essas informações que voce coloco no contexto . quando voce crio usando o createContext.

Fazer o Contexto como estar abaixo
 
*/


//Tipagem dos dados do contexto
type ContextType = {
     name: string;
     age: number
}

//Dados que vai ter acesso global dentro do componente
const initialState = {
    name: 'Renan',
    age: 26
}


//Criando o contexto usando o createContext Tipando ele com a tipagem dos dados a serem usados, e passando entre parenteses a variavel que vai ter as informação global para uso.
export const Context = createContext<ContextType>(initialState);


//Criando como um componente o Context Provider como uma função que retorna um componente. Este componente precisa de um parametro "children" - este children basicamente é todo o conteudo que voce vai colocar dentro dele seja ele um componente ou o site inteiro.
// O componente Context.Provider tera que ter um value  que seria a variavel com as informações globais a serem usadas (aqui declarei como initialstate) . Voce exporta ela e usa no app.tsx e usando dentro do contexto que voce quer usar apenas colocando este component e dentro do componente o que voce quer que tenha estes dados .
export const ContextProvider = ({ children }: React.PropsWithChildren
    ) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}
