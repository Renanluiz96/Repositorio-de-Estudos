import { useContagem } from "./reducer/contagem"; //Usando o useContagem voce ja vai ter acesso a todo que tem la dentro do arquivoc contagem e com o hook do useReducer que vai ta dentro o useContagem


const App = () => {
    /* Geralmente se usa esses nomes state/dispatch
    State = onde vai ser salvo as informações.
    Dispatch = ele é uma função assim como o useState, mais com um papel um pouco diferente.
    Dentro do useReducer() tem  2 parametros, os conteudos dos 2 itens dentro do reducer se cria fora do app :
    1º - reducer = que é uma função. Cria esta função fora do app.
    2º Valores inicias que vai conter no reducer. Igual ao state comeca salvando uma informação inicial , e depois se altera. Cria fora do app tambem igual a função reducer.

    Depois de todos criados, voce precisa tipar eles.

    */
    const [state, dispatch] = useContagem();

    return (
        <div className="p-5">
            Contagem : {state.count}
            <hr />
            <button className="p-3" onClick={()=>dispatch({type: 'ADD'})}>Adicionar</button>
            <button className="p-3" onClick={()=>dispatch({type: 'DEL'})}>Diminuir</button>
            <button className="p-3" onClick={()=>dispatch({type: 'RESET'})}>Resetar</button>
            
        </div>
    );
}

export default App;

//Usado em lista de valores = um array de strings - adicionar , remover , limpar, ordenar os itens de uma lista
//Valores com varios objetos,  alterar um objeto , depende do conteudo de um objeto trocar um valor de um outro objeto.
//Fazer coisas mais complexas apenas de trocar o valor de um campo. Neste caso o uso do reducer ele é indicado.

//Ações especificas ,action para execultar um um valor especifico , ou seja uma contagem , ter um botão para adicionar mais quantidade ao contador, outro botão para reduzir , e um outro para limpar o contador . Todos estes são "actions"

