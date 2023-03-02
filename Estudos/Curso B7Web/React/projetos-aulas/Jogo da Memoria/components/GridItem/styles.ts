import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550ff' : '#e2e3e3' };
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1}; //se props.opacity for receber o mesmo valor voce pode colocar ?? , exemplo props.opacity ? props.opacity : 1. Então se a a propriedade for receber ela mesma caso o contrario recebe outra , voce pode simplificar usando o ?? , sempre se for do caso dela receber ela mesma.
`;
