import axios from "axios"; //Voce pode usar o axios. e depois do ponto vai ter as funções da lib

//const BASE = 'https://jsonplaceholder.typicode.com'

//Criando uma baseURL com o axios o nome da constante voce pode colocar qual voce quiser. Usando http.get ou post.  e dentro do parametro voce não precisa colocar mais a url da api ,pois voce ja coloca na base aqui ja , voce somente coloca o endpoint da api no paramentro ou seja o /posts .
const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

//Cria um arquivo onde ira ficar tudo concentrado a respeito de requisição , aqui vai ter 2 funções uma para pegar a api o url do site, e transforma-lo em json, e no final retornar este json que seria a resposta da api ja transformada, fazendo isto voce somente executa esta função la na pagina principal.
export const api = {
    getAllPosts: async () => {

        let response = await http.get('/posts')
        //O .data seria a resposta ja transformada em json. voce pode ja retornar no caso o response.data que ja estaria retornando o json ja convertido. 
        return response.data 


        /* Usando o Fetch
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;
        */
    },
    //Segunda função Para adicionar um novo post : voce faz a requisição do tipo post , mandando o title, body e um userId. Transforma e retorna a resposta para json igual a primeira função . Passando como parametro os itens do corpo da requisição . Ou seja na hora que for somente executar esta função na pagina principal , voce executa esta função , manda como parametro desta função o que voce quer adicionar nesta função o title, o body e o numero do userId. Que ele ja faz todo o processo aqui e retorna para a tela principal a requisição.
    addNewPost: async (title: string, body: string, userId: number) => {

        //E usando com o post ,voce somente passa  a url da api, e ao lado um objeto, com somente o  body da requisicao, não precisa colocar o method , nem o header. Somente a url , e ao lado o objeto com o body da requisição
        let response = await http.post('/posts', {
            title, body, userId
        })
        return response.data

        /* Requisicao usando o Fetch
        let response = await fetch(`${BASE}/posts`, {
            method: 'POST',
            body: JSON.stringify({title, body, userId}),
            headers: {'Content-Type': 'application/json'}
        });
        let json = await response.json();
        return json;
        */
    }
}