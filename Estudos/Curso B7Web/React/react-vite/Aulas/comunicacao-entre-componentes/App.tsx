import { Botao } from './components/Botao';

const App = () => {

    let textoDoBotao = 'Clicar no botao'


    //Função do componente pai
    const botaoEventAction = (txt: string) => { //txt é a frase que voce passou la do componente filho , voce vai usar aqui
        alert('Frase do App ' + txt)
    }

    return (
        <div>
            <Botao
             text={textoDoBotao} //Aqui vpce manda uma prop para o componente , e la no componente voce cria um type prop , e passa o text como string= que aqui é um texto

            
              clickFn={botaoEventAction} //clickFn é uma prop que la no componente vai ter o type função void, e dentro dela ela vai executar a função do componente pai que esta no APP
              />
        </div>
    );
}

export default App;

//Mandar informações de um componente para o outro, componente pai para um componente filho(componente que estaja dentro do componente pai), e vice e versa de filho para pai tambem.


//Para se comunicar um componente do pai pro filho é via props , onde no componente pai voce passa a prop que voce quer, e la no componente filho cria um type Props = com o tipo daquela props seja string ou number ... , ai voce utiliza esse type da prop como parametro em chaves = {text}. 

//Do filho para o pai precisa ter uma ação , voce passa uma função que dentro desta função voce passa qual função vai ser executada , e coloca o type dela la na props

//Voce cria uma função que vai ter uma ação , e ela vai ser usada dentro do componente que quiser , mais quando ela for chamada por um componente filho , ela vai ter que ter um type na prop do componente filho que seria uma função void, que dentro desta função do componente filho , ela chama esta função aqui via filho.

//Como é uma função que esta aqui no APP que seria o componente pai , pode-se usar ela em qualquer lugar, e para que um componente filho possa utilizar uma função do componente pai , ele vai ter que criar uma função dentro dele mesmo , e dentro desta função do componente filho, ai sim ela "chama" a função do componente ái