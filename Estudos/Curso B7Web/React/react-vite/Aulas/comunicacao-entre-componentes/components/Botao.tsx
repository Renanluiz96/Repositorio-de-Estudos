type Props = {
    text: string;

    //clickFn com type void, e dentro dele vai ter uma variavel com type string.
    clickFn: (txt: string) => void;
}

export const Botao = ({ text, clickFn}: Props) => {
    
    //Cria uma função aqui , que dentro dela vai ser executada a função que tem la no componente pai, onde dentro dele vai ter uma frase
    const handleClick = () => {
        // Este clickfn que vai ser a função que vai ser executada , la no componente pai, que la no componente pai esta função vai ter uma outra função dentro de uma prop clickfn = que esta função vai ter a propria função do componente pai para ser executada.

        clickFn('FRASE') //Dentro desta função estou passando uma frase: string, então tenho que definir este type la na props dentro da função como txt para usar la no componente pai, e la ela ser chamada com o nome txt , ele ja puxa esta frase ao usa-la
    }

    return (
        //Coloca um evento de click , onde quando for clicar, vai disparar uma função aqui, que vai chamar a função que esta la no componente pai
        <button onClick={handleClick}>{text}</button>
    )
}