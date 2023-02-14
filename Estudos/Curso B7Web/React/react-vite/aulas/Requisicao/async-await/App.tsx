import { useEffect, useState } from "react";
import { Movie } from './movies-types' //Importando o type dos movies externamente.

const App = () => {
    //State que vai ser um array com objetos as informações dos filmes , que inicialmente ira comecar como vazio
    const [movies, setMovies] = useState<Movie[]>([]) // Type vai ser o type exportado externamente, e vai ser um type do tipo array com o nome Movie

    //Criando uma state para mostrar um loading na tela uma mensagem para o usuario que estiver esperando. Cria uma state e comeca ela como false
    const [loading, setLoading] = useState(false)

    //Requisição usando o mesmo codigo do fetch e then , só que simplificando com asyn await. 
    const loadMovies = async () => { //Tem que colocar o async antes da arrow function, para dizer que vai ser uma função assincrona

        //Lidando com erros, aqui ele vai tenta execultar o codigo com o try e se caso acontecer algum erro , voce tem que passar ele no catch que fica logo apos o termino do try. Para que o seu site não fique travado no erro, pois se não fizer um try/catch seu site vai ficar sem tratamento para erro.
        try{
            setLoading(true)//Quando comecar o processo de requisição a api voce seta a state setLoading como true


            // Usa o await antes para poder esperar a resposta , a hora que ele tiver a resposta ele avanca o codigo para a proxima linha
            let response = await fetch('https://api.b7web.com.br/cinema/'); //Pego a url da api e salvo a resposta na variavel response
            let json = await response.json();//Depois pego a resposta do fetch que estava salva na variavel response e a transformo em json. e salvo na variavel json

            setLoading(false) //Depois que o processo de carregamento terminar, voce set o setLoading como false novamente , para trocar o conteudo da tela

            setMovies(json); //Depois uso o json com todo pronto e salvo na state setMovies , para utilizar os dados da api.
        } catch(e) {
            setLoading(false);//Seta o loading como false denovo para tirar a mensagem
            setMovies([]) //Zera o array de filmes
            console.error(e) //Mostra o erro no console
        }
        
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