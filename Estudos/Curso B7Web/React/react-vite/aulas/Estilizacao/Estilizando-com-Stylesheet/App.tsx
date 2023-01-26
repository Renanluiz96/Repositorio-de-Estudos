import { Botao } from './components/Botao'

//Cria uma pasta para o componente que vai usar , e dentro dela voce coloca o arquivo tsx que voce faria para criar um componente normal , mais o arquivo css deste proprio componente , e quando for usar aqui voce pode exportar somente a pasta dele .
//OBS : Para exportar aqui somente a pasta ./components/botao , dentro da pasta voce tem que colocar o nome do arquivo tsx como index.tsx , pois o react vai interpretar que se voce estiver puxando uma pasta somente , ele vai procurar o arquivo index daquela pasta.

//Depois de ter criado o componente , voce cria o arquivo css na mesma pasta para ficar organizado.
//Importa o css dentro do arquivo index para pegar a estilizacao , da mesma maneira como um html pega um css externo puxando pelo link do arquivo dele.

const App = () => {



    return (
        <div>
            {/*E aqui so basta importar e usar o componente normalmente, que ele vai ja pegar o componente estilizado */}
            <Botao /> 
        </div>
    )
}

export default App

