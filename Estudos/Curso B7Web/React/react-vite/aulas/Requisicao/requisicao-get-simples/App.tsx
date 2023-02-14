import { useEffect, useState } from "react";
import { Movie } from './movies-types' //Importando o type dos movies externamente.

const App = () => {
    //State que vai ser um array com objetos as informações dos filmes , que inicialmente ira comecar como vazio
    const [movies, setMovies] = useState<Movie[]>([]) // Type vai ser o type exportado externamente, e vai ser um type do tipo array com o nome Movie

    //Criando uma state para mostrar um loading na tela uma mensagem para o usuario que estiver esperando. Cria uma state e comeca ela como false
    const [loading, setLoading] = useState(false)


    //Requisição no react = Usando Fetch e then.
    //Função que vai carregar os filmes
    const loadMovies = () => {
    //Pegando as informções da api via url usando ela dentro da função fetch
    fetch('https://api.b7web.com.br/cinema/')
        .then((response)=> { //Depois de pegar a resposta da api via url , voce. o executa usando um return e como a resposta vem em uma string , voce a transforma em um json  usando o " .json ",  a resposta que foi o que voce coloco no parametro do then. Não precisa tipar a resposta do fetch, pois quando trabalha com requisicao via fetch o ts ja o reconhece e tipa automaticamente .
            return response.json();

        })
        .then((json)=>{//Usa novamente o then , pois agora voce ja vai tera resposta transformada de fato em json , com o conteudo da api tudo certo, agora voce manipula como quiser. Por isso coloca o nome do parametro ja como json = Pois ja é o json transformado que voce transformo la no then anterior.
            setMovies(json) //Agora voce coloca o json dentro da state dos movies , para manipula-lo da forma que quiser. No caso vai transformar a variavel movies , para que ela contenha um array de objetos dos filmes para manipula-los.
        })
        .catch((e)=> { //Usando o catch no then. Vai execultar uma arrow function como todo o then . só que agora com o mesmo erro , que fez la no async/await
            setLoading(false)
            setMovies([])
            console.error(e)
        })
}

    //Se caso voce quiser que ao abrir o site, ja apareca na tela , os filmes ja listados , voce coloca um useEffect com o array do segundo parametro vazio , que ele ira carregar ao abrir o site, ele ira executar a função de mostrar na tela os filmes .
    useEffect(()=>{
        loadMovies();
    }, [])

 

    return (
        <div>

            {/* Quando a state loading estiver como true quer dizer que vai ter um carregamento na api , então mostra uma mensagem na tela para o usuario */}
            {loading && 
                <h3>CARREGANDO , POR FAVOR AGUARDE UM MOMENTO</h3>
            }


            {/* Quando a state tiver diferente de true ou seja em false, quer dizer que não tem mais o processo de carregamento da api, e ja vai ter os resultados carregados, então mostra o conteudo na tela. E a quantidade total de movies for maior que 0 então quer dizer que tem alguma coisa para mostrar na tela, então ai mostra.*/}
            {!loading && movies.length > 0 &&
                <>
                    <h5>Total de filmes : {movies.length}</h5>
                    {/*
                    Cria uma div para conter as informações dos filmes na tela
                    Criando um map que vai percorrar cada item do array com os movies e vai exibir a imagem na tela e abaixo o titulo da imagem , isto é informação que esta dentro do objeto do array */}
                    <div className="grid grid-cols-6 gap-3">
                        {movies.map((item, index) =>(
                            //Vai fazer um loop na quantidade total do array com os filmes , e cada item do array ele vai mostrar uma div com a imagem , e o titulo da imagem abaixo
                            <div key={index}> {/* Na div dentro do map voce coloca o index , para que ele pegue qual foi o item rodado , primeira div , segunda div ...*/}
                                <img src={item.avatar} alt="" className="w-32 block"/>
                                {item.titulo}
                            </div>
                        ))}
                    </div>
                </>
            }

            {/* Se tiver loading como false quer dizer que ja houve o carregamento, mais o array de movies tem 0 itens, ou seja termino o carregamento , e não foi achado nada , então houve algum erro . Então voce aparece uma div com uma mensagem para que o usuario possa ver que aconteceu algo. */}
            {!loading && movies.length === 0 &&
                <div>Tente mais tarde novamente</div>
            }
            
                
            
        </div>
    )
}

export default App;


//Requisição ao beckend =
    //https://api.b7web.com.br/cinema/