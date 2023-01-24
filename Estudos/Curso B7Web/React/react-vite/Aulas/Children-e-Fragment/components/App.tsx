import { Header } from './Components/Header'
import { Photo } from './Components/Photos'
const App = () => {

  return (
    <div>
      <Header title='Este é um exemplo' />
      <Header title='Outro Texto' />

      Ola mundo!

      {/*Quando voce abre e fecha um componente e manda algum conteudo dentro. Esta criando uma prop chamada "children" . Fazendo isto voce tem que criar uma prop chamada children . E quando este children for algum conteudo mesmo tem que usar uma propriedade do proprio react chamada reactnode la na prop children */}
      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg"/>
      </Photo>

    </div>
  );
}


export default App;