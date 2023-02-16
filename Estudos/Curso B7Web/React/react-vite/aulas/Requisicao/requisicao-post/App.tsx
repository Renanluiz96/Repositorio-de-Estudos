import { ChangeEvent, useEffect, useState } from "react";
import {Post} from './Post'
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { api } from "./api"; // Api vai ser o arquivo com toda a requisição la onde vai ser concentrado onde vai ser feito a url . e adicionado um novo post.

const App = () => {
    //State para armazenar os posts.
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        //Ao abrir o site ira ser rodado a função loadposts para ser exibido os posts na tela.
        loadPosts();
    }, [])

    //Função para carregar os posts na tela
    const loadPosts = async () => {
        setLoading(true)
        let json = await api.getAllPosts(); //Pega a url da api e a transforma , la no arquivo api. aqui voce somente execulta a função que esta la dentro do arquivo . Aqui vai pegar a resposta e salvar na variavel json.
        setLoading(false)
        setPosts(json)
    }

    /*
    const handleAddClick = async () => {
        //Ao clicar no botão faz uma verificação para ver se os dados dos inputs estão preenchidos
        if (addTitleText && addBodyText) {

            //Quando for uma requisição do tipo 'POST' , tem que ter o segundo parametro que seria um objeto e dentro dele voce coloca o conteudo do tipo post ,como esta abaixo
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                //Estrutura do metodo POST = Metodo de envio , Depois o Body , depois os Headers

                method: 'POST', //Coloca o metodo post
                //Depois manda os dados no  corpo da requisição. Mandando um json.stringfy , que vai pegar os dados que voce quer enviar dentro do objeto e vai torna-los em uma string de json . Este é o padrão de ser enviada o corpo da requisição como esta abaixo
                body: JSON.stringify({
                    //Dados que voce quer mandar. Voce manda a state que ja esta salva com o conteudo dos inputs que voce preencheu . 
                    title: addTitleText,
                    body: addBodyText,
                    userId: 1 //o userId aqui coloquei como 1 , mais pode ser outro numero ou o usuario que estiver logado no sistema ...
                }),
                headers: {
                    //Envia um content-type , como esta enviando um JSON , voce especifica que é um json usando o application/json
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            
            //Se o json tiver um id quer dizer que a requisição deu certo.
            if(json.id) {
                alert("Post adicionado com sucesso")
            }else {
                alert("Ocorreu algum erro!")
            }

        } else {
            alert("Preencha os dados!")
        }
    }
*/

    //Função da prop do componente PostForm. Que vai receber o titulo e o body do formulario , e onde vai ser feito a requisição
    const handleAddPost = async (title: string, body: string) => {
            //Salva em uma variavel json, a função que retorna o json la do arquivo api . Somente mandando aqui por parametro da função o que voce quer que seja adicionado no novo post
            let json = await api.addNewPost(title, body, 1)
    
            if(json.id) {
                alert("Post adicionado com sucesso")
            }else {
                alert("Ocorreu algum erro!")
            }
    }

    return (
        <div className="p-5">
            {loading && 
                <h3>CARREGANDO , POR FAVOR AGUARDE UM MOMENTO</h3>
            }

            {/* Recebe o componente , e a prop dentro dele que vai ser uma função que vai receber o titulo e o conteudo do meu formulario. */}
            <PostForm  onAdd={handleAddPost}/>

            {!loading && posts.length > 0 &&
                <>
                    <h5>Total de posts : {posts.length}</h5>

                    <div>
                        {posts.map((item, index) =>(
                            //Montando a estrutura de cada posts que vai ser mostrado dentro do map. A cada post que tiver vai ser seguido esta estrutura.
                            <PostItem data={item} />
                        ))}
                    </div>
                </>
            }

            {!loading && posts.length === 0 &&
                <div>Não a posts para exibir</div>
            }
        </div>
    )
}
export default App;

//Requisição ao beckend =
    //https://api.b7web.com.br/cinema/