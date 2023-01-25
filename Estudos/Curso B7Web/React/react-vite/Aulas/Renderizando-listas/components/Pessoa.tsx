type Props = {

    //Criando os type da prop data, que vai receber o name que é uma string, e um age que é o number , la do objeto que esta dentro do array list que esta no componente pai.
    data: {
        name: string;
        age: number;
    }
}

export const Pessoa = ({ data }: Props) => {
    return (
        //Recebo a data . e dentro dela coloco como vai ser o texto que vai ser exibido la no componente pai, vai ser um li e dentro do li vai ser o name e o age .
        <li>
            {data.name} - {data.age} anos.
        </li>
    )
}