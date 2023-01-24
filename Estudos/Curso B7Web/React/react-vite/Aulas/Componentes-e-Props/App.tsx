
/*
// Aqui voce cria um componente dentro de um arquivo e não precisa importar ele pois ele ja esta aqui , então voce pode usar este componente no App normalmente 
const Header = () => {
  return (
    <header>
      <h1> Titulo da Pagina</h1>
      <hr />
    </header>
  );
}
*/

//Importando o componente header de outro arquivo  para utilizar aqui
import { Header } from './components/Header'

const App = () => {
  return (
    <div>
      <Header title='Este é um texto' />
      <Header title='Outro texto' />
      
      Ola,mundo
    </div>
  )
}
export default App
