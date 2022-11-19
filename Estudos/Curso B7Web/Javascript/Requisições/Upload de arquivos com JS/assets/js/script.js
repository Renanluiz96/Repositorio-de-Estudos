//Enviando arquivos com javascript

async function enviar() {
   let arquivo = document.getElementById('arquivo').files[0]; // Aqui voce seleciona o input file ,usa o .files para ele ter acesso a um objeto chamado filelist  que dentro desse objeto voce pode ter varios arquivos , porque voce pode ter mais de um arquivo, para isso voce usa a propriedade multiple la no input no html para ter acesseo a selecionar mais de um arquivo, e usa o array 0 para pegar o primeiro item que seria o primeiro arquivo, e pegando este primeiro arquivo voce tem acesso a um outro objeto chamado "file" que basicamente é o proprio arquivo e neste objeto vai conter as informações deste arquivo . e voce salva isso na variavel


   //Criando a classe FormData para poder enviar o meu arquivo no corpo da requisição abaixo .
   let body = new FormData(); // Como é uma classe tem que usar o "new" e o nome da classe. E depois voce vai adicionando os dados que voce quer
   body.append('title', 'bla bla bla')//Voce por exemplo quer mandar algum titulo de alguma coisa , voce adiciona o title depois uma virgula e o conteudo deste title depois 
   body.append('arquivo', arquivo) // E adicionar o arquivo , aqui eu quis chamar de arquivo tambem , e depois separei por virgula e coloquei a variavel arquivo que nele continha o input que estava com este id arquivo que era o meu objeto file mesmo puro que vai junto os dados do meu arquivo prontinho

   //Para fazer o upload do arquivo voce usa o fetch , primeiro paramentro voce manda para qual url que voce quer mandar
   let req = await fetch('https://www.meusite.com.br/upload', //Site qualquer para aula , como o site não existe vai dar erro
   {//Geralmente quando faz um upload voce manda ele através do metodo POST
      method: 'POST',
      body: body, // E tendo o metodo post geralmente tambem voce manda um body no corpo da requisição com os dados , dentre estes dados tem que estar o meu arquivo . E para enviar um arquivo voce não tem que fazer atraves de json.stringfy ... , para fazer envio de arquivos , mesmo que tenha dados e arquivos , quando se tem arquivos ja muda a forma de mandar , ai voce tem que usar uma "classe" chamada form data que voce vai ter que criar antes deste requerimento
      headers: { // E como voce esta mandando um arquivo voce tem que mudar o cabecalho tambem  , como esta mandando o envio do arquivo o cabecalho fica assim , e tambem quando quer mandar um formulario o cabeçalho é assim tambem como esta abaixo , voce tem que simular uma requisição de formulario
         'Content-Type' : 'multipart/form-data'
      }
   })
}