//Fazendo uma requisição usando uma função chamada fetch que é do proprio javascript usando uma API fake no site jsonplaceholder.typicode.com

//O fetch dar erro de "course" quando voce abre ele no arquivo html puro = file://  , pois não tem como fazer requisições a um site externo. Ou voce usa um servidor interno , ou voce pode hospedar o arquivo em uma hospedagem mesmo para voce sim continuar acessando normal , pois voce tem que acessar segundo o protocolo HTTP para conseguir fazer requisições

function loadPosts() {
   document.getElementById('posts').innerHTML  = 'Carregando...';
   // Essa função vai ser onde vai ser feita a requisição
   //Fetch voce passa 2 parametros o primeiro é o url que voce quer fazer esta requisição ,  segundo parametro ele é opcional  que seria a forma do envio(METODO) desta url que pode ser GET , POST ... , se voce não especificar este segundo parametro ele vai por padrão mandar em GET
   fetch('https://jsonplaceholder.typicode.com/posts') // Este função fetch ela é uma promisse então tem que retornar um then ou um catch
      .then(function (resultado) {
         return resultado.json(); // A função json retorna tambem uma promisse , e se ele retorna uma promisse então voce tem que colocar um then na função json tambem
      }).then(function(json) {
         montarBlog(json)

         
         //document.getElementById('posts').innerHTML  = json.length + 'posts' // Aqui ele vai pegar a quantidade de posts e vai mostrar a quantidade na tela . ele vai introduzir um conteudo html com o innerhtml ele vai coloca o tamanho do objeto json + a sting posts 
      })
      //Then vai mostrar o resultado do post , ja que é uma promisse , o then vai mostrar o resultado
      .catch(function(error) { // o catch é se der erro com o resultado
         console.log("Deu Problema!")
      })
}

function montarBlog(lista) { //Aqui vai montar o blog que vai receber por parametro a lista , que seria a lista de posts
   let html = '' // Voce vai criar a variavel html ,e depois preenche ela
   for(let i in lista) { //Voce vai criar um for para ir de item a item da sua lista
      html += '<h3>'+lista[i].title +'</h3>'; //Vai aumentando o conteudo aqui voce vai coloca o h3 com o title la que tem no json para pegar o conteudo do title
      html += lista[i].body + '<br/>'; // Aqui voce vai colocar o conteudo do body do json e depois o br para pular uma linha abaixo
      html += '<hr/>;' // Aqui voce vai fazer uma linha horizontal para fazer a divisão entre os posts
   }

   document.getElementById('posts').innerHTML  = html; //Depois de ter criado tudo com a variavel html , voce vai jogar na tela inserindo o conteudo que voce crio dentro da div com id posts no final de tudo.
}