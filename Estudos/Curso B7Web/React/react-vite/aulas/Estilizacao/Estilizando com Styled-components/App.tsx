//Aqui estou puxando de 1 em um arquivo externo
//import { Container } from './components/Container'
//import { Botao } from './components/Botao'

//import { Container, Botao} from './AppStyles' // Posso exportar assim do AppStyles, exporto um a um , mais se tiver muitos componentes , vai ficar muito ruim ficar exportanto assim todos , vai ficar muito grande

import * as C from './AppStyles' //Usando o * estou puxando todos os componentes que estão criados aqui neste arquivo , e coloco elas como o nome C , e ao usar no componente voce coloca C. e depois do ponto o nome do componente. Recomendo usar ,pois na hora que ver um C. alguma coisa eu sei que esta falando de um "componente de estilização"

/*
Pode se usar o styled components de 3 maneira :
    1º = Fazer todos os componentes aqui na pagina principal, Importando e e usando ele dentro do App
            import styled from "styled-components";

            Const Botao = styled.button`
            font-size: 40px`;

    2º = Fazer cada arquivo externo com seu proprio component , ai voce cria estiliza e exporta de la para ca, e somente usa. Estiliza da mesma forma como antes. Somente fica mais organizado.

    3º = Voce cria aqui um arquivo .ts com o nome que quiser , pode usar Appstyles.ts para dizer que é as estilizações do App. E la voce cria todos os componentes estilizados em um unico arquivo , mais ele é especifico para estilização. Fazendo isto voce exporta tudo para ca colocando uma letra como referencia , e quando for usar ele voce coloca a letra antes. Fazendo isto o codigo fica mai legivel
*/



const App = () => {
    return (
        <div>
            {/*Usando os componentes , com o C. antes */}
            <C.Container>
                Texto do componente.
                <C.Botao>Clique aqui</C.Botao>
            </C.Container>
        </div>
    )
}

export default App

//Styled-components é a biblioteca  mais usado no mercado de trabalho atualmente. 
//Tem que instalar ela usando o comando no terminal = npm install styled-components.
//Como o projeto esta usando typescript, precisa tambem instalar os types dessa biblioteca = npm install -D @types/styled-components. 
//Se usa o -D para instalaer no ambiente de desenvolvimento. Depois inicia ela normal com o npm run dev.