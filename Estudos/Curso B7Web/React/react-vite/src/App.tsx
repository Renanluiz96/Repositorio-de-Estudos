import { MainRoutes } from "./Routes/MainRoutes" //Só importa o componente. e o usa no site, o restante das rotas voce cria la e aqui só importa e usa ele de fato. Para deixar o seu App principal com menos codigo acumulado possivel.
const App = () => {
    return (
        <div className="p-4">

            <header>
                <h1>Titulo do site</h1>
            </header>
            <hr />
            <div className="py-4"> {/* Criando esta div que vai conter o routes onde vai ser feito a troca de paginas.  Dentro do routes vai ter cada rota. path: é o link ou seja a url  .  element: é o que vai ser mostrado ao digitar aquela url . '/' é a pagina principal caso fosse digitar somente a url do site. ira aparecer padrão aquilo. caso o usuario digitar , ou acessar alguma coisa no site que redirecionar ele a aquela url '/sobre' então seria carregado o outro componente, então trocaria o componente naquele local de acordo com a url digitada/acessada. */}

                <MainRoutes />

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