// Para rodar o arquivo no terminal usa o comando + nome do arquivo a ser executado .  Ex : node index.js 
// Tem que instalar uma dependencia de types para node para usar o node com o typescript - npm install --save-dev @types/node. no terminal.
// Para rodar o typescript para ficar monitorando voce tem que deixar um terminal somente para ele ficar observandos as alterações e a cada configuração alterada, ele converter no arquivo js que seria o arquivo final para isso tem que fazer o comando no terminal  = tsc -w 
//Para fazer scripts no  package.json para simplificar o codigo no terminal ao digitar comandos. cria um script "start": node/dist.js . e um script watch-ts: tsc -w. Para usar usa junto com o "run" , Ex = npm run start , npm run watch-ts.

import validator from "validator";

let nome: string = 'Renan'

if(validator.isLowercase(nome)) {
    console.log(`O seu nome ${nome} esta todo minusculo`)
} else {
    console.log(`O seu nome ${nome} NÃO esta todo minusculo`)
}