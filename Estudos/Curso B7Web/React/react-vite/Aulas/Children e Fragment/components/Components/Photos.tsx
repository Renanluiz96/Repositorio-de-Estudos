//Para usar a prop children com o reactnode , voce precisa exportar o arquivo do react chamado "ReactNode" para poder utiliza-lo aqui
import {ReactNode} from 'react'

//Criando type da props

type Props =  {
    url?: string
    legend: string

    //Usando a prop Children com o ReactNode
    children: ReactNode;}


export const Photo = ({legend, children}: Props) => {// Desconstruindo o conteudo do type props para poder usar ele dentro do componente
    return (
        <div>
            {/*Conceito de fragment é como sómente pode retornar um elemento só .
            Então o fragment voce usa um abre e fecha de tag vazio no inicio e no fim . '<>'  e entre eles voce coloca o seu codigo. , que vai meio que burlar, ja que não pode retornar 2 elementos. */}

            <>
                {children} {/* Usando o children para   que é o conteudo dentro do componente Photo*/}
                <p>{legend}</p>
            </>
        </div>
    );
}