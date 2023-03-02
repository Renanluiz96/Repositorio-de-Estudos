import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px;

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 15px;
    }
`;

export const Grid = styled.div`
    //Precisa de um tamanho fixo para posicionar ele ,na tela. Mas os cards dentro do grid não eles se ajustarão conforme o tamanho
    width: 400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;