// Servidor - Este arquivo vai criar um servidor, e vai deixar rodando em uma porta do nosso computador.
// Usa o servidor com a biblioteca/framework chamado "Express" para criar um servidor ele suporta typescript, então instala os types dele tambem .
// Instalação express = npm install express

import express, { Request, Response } from 'express'

// Usando o express em uma constante.
const server = express()

//Criando a pagina principal do servidor usando o get e nele voce passa 2 parametros , primeiro a rota principal do seu site usando o "/" , e o segundo parametro que seria uma função anonima. 
server.get('/', (req: Request, res: Response) => { //Na função anonima do segundo parametro voce passa 2 parametros nessa função que seria o "Request" e o "Response" que voce tem que importar tambem la do request e tipar ela aqui nos parametros.
    
    res.send('Ola Mundo!')

})

// Agora consegue rodar o servidor usando o listen e passando por parametro a porta que voce quer que ele fique observando. normalmente usado a porta 80(para http voce somente acessa localhost) ou 3000(só que quando voce executa na porta 3000 para ter acesso a ela voce precisa especificar qual porta quer acessar no navegador ex = localhost:3000). 
// Depois voce executa o arquivo no terminal usando o comando aqui npm run start-dev. que voce modificou no package.json
server.listen(80)