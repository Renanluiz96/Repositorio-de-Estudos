import { ChangeEvent, useEffect, useState } from "react";
import {Post} from './Post'

const App = () => {
    //State para armazenar os posts.
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(false)

    //States dos inputs do fieldset
    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('')

    //Função para carregar os posts na tela
    const loadPosts = async () => {
        setLoading(true)
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        setLoading(false)
        setPosts(json)
    }

    //Função para alterar o conteudo dos inputs, ao ser digitado ira setar  o novo valor da state , para o valor digitado no proprio input usando o target.value no porprio input .
    const handleAddTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }
    const handleAddBodyChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }
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


    useEffect(()=>{
        //Ao abrir o site ira ser rodado a função loadposts para ser exibido os posts na tela.
        loadPosts();
    }, [])

    return (
        <div className="p-5">
            {loading && 
                <h3>CARREGANDO , POR FAVOR AGUARDE UM MOMENTO</h3>
            }

            {/* Fazendo um fieldset onde o usuario pode digitar os dados no campo e sera criado um post novo .*/}
            <fieldset className="border-2 mb-3 p-3">
                <legend>Adicionar novo post</legend>

                <input
                 value={addTitleText} //Valor do input vai ser salvo na state
                 onChange={handleAddTitleChange} //Executa esta função ao digitar qualquer coisa no input ira ser setado e armazenado na state .
                 type="text"
                 placeholder="Digite um titulo" 
                 className="block border"
                />

                {/* Conteudo do text area ira ser salvo na state addBodyText */}
                <textarea
                 className="block border"
                 value={addBodyText}
                  onChange={handleAddBodyChange}></textarea>

                <button className="block border" onClick={handleAddClick}>Adicionar</button>
            </fieldset>

            {!loading && posts.length > 0 &&
                <>
                    <h5>Total de posts : {posts.length}</h5>

                    <div>
                        {posts.map((item, index) =>(
                            //Montando a estrutura de cada posts que vai ser mostrado dentro do map. A cada post que tiver vai ser seguido esta estrutura.
                            <div key={index} className="my-4">
                                <h4 className="font-bold">{item.title}</h4>
                                <small>#{item.id} - {item.userId}</small>
                                <p>{item.body}</p>
                            </div>
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