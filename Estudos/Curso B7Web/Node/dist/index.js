"use strict";
// Para rodar o arquivo no terminal usa o comando + nome do arquivo a ser executado .  Ex : node index.js 
// Tem que instalar uma dependencia de types para node para usar o node com o typescript - npm install --save-dev @types/node. no terminal.
// Para rodar o typescript para ficar monitorando voce tem que deixar um terminal somente para ele ficar observandos as alterações e a cada configuração alterada, ele converter no arquivo js que seria o arquivo final para isso tem que fazer o comando no terminal  = tsc -w 
//Para fazer scripts no  package.json para simplificar o codigo no terminal ao digitar comandos. cria um script "start": node/dist.js . e um script watch-ts: tsc -w. Para usar usa junto com o "run" , Ex = npm run start , npm run watch-ts.
let nome = "Renan";
let idade = 26;
let aula = "Node";
console.log(`Meu nome é ${nome} tenho ${idade} e estou iniciando meu estudo em 
${aula} este é o meu primeiro  projeto.`);
