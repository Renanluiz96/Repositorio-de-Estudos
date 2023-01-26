import styled from "styled-components"; //Para usar o styled-components voce importa o styled assim

//Aqui voce cria todos as estilização da sua pagina especifica, fica tudo guardado aqui 


//Para criar um componente voce usa o styled. e do lado do ponto voce diz que tipo de tag html este component é aqui no caso um button . Depois do lado voce coloca a aspas para o lado `` . E dentro dela voce coloca as estilizações dos componentes. 
export const Botao = styled.button`
    font-size: 40px
`;

export const Container = styled.div`
    background-color: blue;
    color: white;
    padding: 20px;
`;