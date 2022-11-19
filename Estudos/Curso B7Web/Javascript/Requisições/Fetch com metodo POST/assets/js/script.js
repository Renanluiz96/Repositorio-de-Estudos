//Fazendo uma requisição fetch com o metodo POST , que seria o segundo parametro da função fetch. Enviando corpo , cabeçalho e dados da requisição no segundo parametro

async function inserirPosts() {
   document.getElementById('posts').innerHTML = 'Carregando...'

   let req = await fetch('https://jsonplaceholder.typicode.com/posts',
    {//No segundo se for o POST voce especifica varios detalhes
      method: 'POST', //Especifica qual vai ser o tipo da requisição , aqui no caso vai ser metodo POST = e quando voce faz a requisição usando o metodo post voce pode enviar dados atraves do corpo da requisição(são dados que vão ser enviados internamente juntos com a requisição)
      body: JSON.stringify({ // Body que é o "corpo da requisição" que vai ser enviado junto e , é aqui que voce vai ter que usar a função stringfy com os dados que voce quer enviar para converter o objeto aqui em string com objeto dentro . e depois de convertido ele manda essa string com objeto dentro para o body 
         title: 'Titulo de teste',
         body: 'Corpo de teste',
         userId: 4
      }),
      headers: { // Pode botar um ou mais cabeçalhos , que nela tambem voce pode fazer uma autenticação , que voce pode mandar um token de autenticação voce pode fazer o envio do token por aqui tambem
         'Content-Type': 'application/json'
      }
   });
   let json = await req.json();

   console.log(json)

}