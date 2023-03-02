import * as C from './style'

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({label, icon, onClick}:Props) => {
    return(
        <C.Container onClick={onClick}>
        {icon &&
            <C.IconArea>
                <C.Icon src={icon} />
            </C.IconArea>
        }
        <C.Label>{label}</C.Label>
    </C.Container>
    )
    
}

//Fazendo um componente para o botão e deixando ele todo adaptavel para receber as props la no app quando for usar ele , para colocar as informação tudo via prop