//Importando da lib react-router-dom . importamos o Routes e o Route
import { Routes, Route } from "react-router-dom"
//Importando as paginas que serão carregadas . no Routes
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { AboutRenan } from "./pages/AboutRenan"
import { AboutPedro } from "./pages/AboutPedro"
import { NotFound } from "./pages/NotFound"
import { AboutItem } from "./pages/AboutItem"
import { RequireAuth } from "./RequireAuth"


const App = () => {
    return (
        <div className="p-4">

            <header>
                <h1>Titulo do site</h1>
            </header>
            <hr />
            <div className="py-4"> {/* Criando esta div que vai conter o routes onde vai ser feito a troca de paginas.  Dentro do routes vai ter cada rota. path: é o link ou seja a url  .  element: é o que vai ser mostrado ao digitar aquela url . '/' é a pagina principal caso fosse digitar somente a url do site. ira aparecer padrão aquilo. caso o usuario digitar , ou acessar alguma coisa no site que redirecionar ele a aquela url '/sobre' então seria carregado o outro componente, então trocaria o componente naquele local de acordo com a url digitada/acessada. */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<RequireAuth><About /></RequireAuth>} />
                    {/* Rotas privadas voce pode fazer com que ao acessar a rota , ela passe para uma verificação, isso por padrão não existe no react-router, então voce vai ter que criar ela. Fazendo um componente que faz essa verificação e dentro deste componente voce coloca o componente que quer que seja acessado caso alguma situação da rota privada for satisfeita, por exemplo sistema de login */}

                    <Route path="/sobre/renan" element={<AboutRenan />} />
                    <Route path="/sobre/pedro" element={<AboutPedro />} />
                    {/* Rotas normais onde poderão ser acessadas pela url, ou redirecionada atraves de algum botão pode ser redirecionado para estas rotas. */}

                    <Route path="/sobre/:slug" element={<AboutItem />} />
                    {/* Rota dinamica usando o : referencia que esta é uma rota dinamica e o valor depois dela slug(normalmente um identificador para substituir um id) este é um parametro que vai servir de idnetificação la na pagina que aqui seria o componente AboutItem. */}

                    <Route path="*" element={<NotFound />} />
                    {/*Rota para pagina não encontrada usa o path="*" para dizer que qualquer url que for digitada não achar nenhuma rota , ela vai redirecionar para esta rota aqui .  */}

                </Routes>

            </div>

            <footer>
                Todos os direitos reservados.
            </footer>
        </div>
    )
}

export default App

/* React-Router
//  React Router - Para poder trabalar com varias paginas.
//  Podemos deixar um conteudo digamos que fixo e alterar apenas alguns componentes dentro da tela , sem precisar atualizar novamente o navegador, ao carregar a tela inicial , ja fica pronto e carregado 'essas possiveis outros componentes.' . Fazendo assim melhorar muito o carregamento do site.
// Tem que instalar a biblioteca React-Router no terminal = npm install react-router-dom.
// Depois de intalado pode rodar o projeto . Ela ja tem suporte a typescript instalado.
// import { BrowserRouter } from 'react-router-dom' . Importando la no main.tsx para poder usar o react router . Isso serve como uma caixa que voce vai colocar o app dentro desta caixa, e as rotas somente vão funcionar se estiverem dentro desta caixa.
/*  Voce altera la na pasta main.tsx tambem dentro do reactDOM.render . Onde so vai ter um componente app <App /> . e coloca o BrowserRouter e dentro dela o App . Pois este browserRouter vai ser a caixa onde sera feito as rotas. Depois de o App tiver dentro do browserRouter, ai sim toda minha aplicação vai ter suporte a trabalhar com rotas.

    <BrowserRouter>
        <App />
    </BrowserRouter>
*/