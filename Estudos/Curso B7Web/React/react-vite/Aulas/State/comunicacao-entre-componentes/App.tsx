import { Botao } from './components/Botao';

const App = () => {

    let textoDoBotao = 'Clicar no botao'

    const botaoEventAction = (txt: string) => {
        alert('Frase do App ' + txt)
    }

    return (
        <div>
            <Botao text={textoDoBotao} clickFn={botaoEventAction} />
        </div>
    );
}

export default App;

//Mandar informações de um componente para o outro, componente pai para um componente filho(componente que estaja dentro do componente pai), e vice e versa de filho para pai tambem.


//Para se comunicar um componente do pai pro filho é via props , onde no componente pai voce passa a prop que voce quer, e la no componente filho cria um type Props = com o tipo daquela props seja string ou number ... , ai voce utiliza esse type da prop como parametro em chaves = {text}. 

//Do filho para o pai precisa ter uma ação , voce passa uma função que dentro desta função voce passa qual função vai ser executada , e coloca o type dela la na props
