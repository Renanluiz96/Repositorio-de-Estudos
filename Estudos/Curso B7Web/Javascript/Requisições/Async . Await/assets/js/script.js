//Async , Await = É basicamente voce criar um fetch com menos codigo , usando o assinc quando for chamar a função , voce pode ter acesso ao await ,e este await ele vai esperar por exemplo na requisição ele vai mandar esperar o resultado para continuar a execução do codigo . Do que voce usar um fetch que vai ter uma promisse que vai retornar um then com o resultado, ou um catch com o erro. 

async function loadPosts() { //Usei o async antes da function para poder usar o await
   document.getElementById('posts').innerHTML = 'Caregando...';

   let req  = await fetch(('https://jsonplaceholder.typicode.com/posts')) // Aqui ele vai esperar a requisição fetch carregar 
   let json = await req.json(); // Depois de carregado , ele vai pegar o resultado e transformar ele em json usando o await aqui tambem para esperar ele carregar 
   montarBlog(json) // E no final ele vai montar o json usando a função onde ele pega a sua requisição ja transformada em json e  inseri ela no html.
}

function montarBlog(lista) {
   let html = '';

   for(let i in lista) {
      html += '<h3>'+ + '</h3>';
      html += lista[i].body + '<br/>';
      html += '<hr/>'
   }

   document.getElementById('posts').innerHTML = html
}