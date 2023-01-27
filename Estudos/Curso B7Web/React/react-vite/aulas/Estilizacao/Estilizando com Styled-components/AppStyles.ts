import styled from "styled-components"; 
/*
//Para usar o styled-components voce importa o styled assim

//Aqui voce cria todos as estilização da sua pagina especifica, fica tudo guardado aqui 


//Para criar um componente voce usa o styled. e do lado do ponto voce diz que tipo de tag html este component é aqui no caso um button . Depois do lado voce coloca a aspas para o lado `` . E dentro dela voce coloca as estilizações dos componentes. 
*/

type BotaoProps = {
    bg: string;
    small?: boolean
}
/*
Passando as props por uma tamplete string que dentro dela voce passa props como uma função anonima e ao lado usa a props. e a props que voce quer usar . passei uma prop bg que vai pega o bg la da props e vai estilizar dinamicamente com a informação de la, e uma prop small que é um boolean , passei ele como um operador ternario para simplificar o codigo, se for true ele coloca 15px , se for false ele coloca 30px. E no final criei o type para essas props acima do componente, usando o nome do componente + Props junto para facil entendimento, e usando este type voce coloca ao lado das aspas uma abre e fecha tag e entre elas coloca o nome do type <BotaoProps>
*/
export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '15px' : '30px'};
    background-color: ${props => props.bg};
`;


type ContainerProps = {
    bgcolor?: string;
}
export const Container = styled.div<ContainerProps>`
    max-width : 400px;
    margin: auto;
    background-color: ${props => props.bgcolor};
    color: white;
    padding: 20px;
    display: flex;

    span {
        font-weight: bold;
        color : #000;
    }

    .link {
        color: #FFF;


        &:hover {
            color: #00FF00;
        }
    }

    @media (max-width: 300px) {
        background-color: green;
        flex-direction: column;

        span {
            color: #0000FF;
        }
    }
`;
//Estilizando tags filhas dentro de componentes voce estilicando dentro do proprio componentes, e se tiver mais outros componentes dentro deste componentes . Voce estiliza como um css normal. posso coloca um hover da propria tag colocando como & dentro da tag que quero usar para dizer que o hover é dele mesmo


/*
Responsividade = Cada componentes no styled-components é independente então cada um tem suas proprias estilizações , animações, efeitos e hovers . Componente totalmente independente.
Então voce pode tambem criar responsividades independentes tambem com o @media (Tamanho da tela ...) {Estilizações ...}.
Estilizar ao mudar o tamanho da tela  tambem os componentes ou tags filhas de dentro do seu componentes

*/