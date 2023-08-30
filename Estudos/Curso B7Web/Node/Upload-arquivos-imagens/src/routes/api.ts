import { Router } from "express";
// Importando a lib externa para manipular imagens aqui usamos a multer - npm install --save multer. npm instal @types/multer.
import multer from "multer";

import * as ApiController from '../controllers/apiController'

// Configurar o multer ,salvando a função em uma variavel para uso. Dentro dela tem alguns parametros para usar , colocando dentro de um objeto.
const upload  = multer({
    // dest é pra onde ele vai enviar o arquivo , ele vai criar uma pasta se caso não tiver, ele ira criar uma pasta na raiz do servidor onde ta o server.ts , não onde e a pasta de routes. usando o ./ . Voce pode mandar para esta pasta temporaria digamos assim para manipular o arquivo. Ou envia para a pasta public , ja para disponibilizar para o publico depois de processado na pasta temporaria, voce envia e deixa publico bonitinha para o publico.
    // Para enviar o arquivo tem que criar uma rota via post . Voce cria la em baixo . Que ao enviar no body , ele enviara para a pasta que voce coloco aqui no dest , seja ela temporaria ou não. Voce tem que criar uma função para ser enviada na requisição la no controller. Uma função que retorna um res.json . 
    dest: './temporario' 
})

const router = Router()


router.get('/ping', ApiController.ping);
router.get('/random' , ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.listPhrases)
router.get('/frase/aleatoria', ApiController.randomPhrase)
router.get('/frase/:id' ,ApiController.getPhrase)
router.put('/frase/:id', ApiController.updatePhrase)
router.delete('/frase/:id', ApiController.deletePhrase)

// Rota para enviar o arquivo. Cria uma função no controller que retorna um res.json.
// E nessa rota voce coloca um 3° parametro que seria aquela função do multer que voce configuro la em cima.
//  1° parametro a rota.
//  2° parametro o callback de upload , um lidador(manda o tipo de callback que quer enviar , single e uma delas e dentro dele voce coloca uma string , usando o nome que voce espera mandar la ele envia 1 arquivo , la no postman voce envia um arquivo com a key que voce mandar aqui. pode ser um avatar ai voce coloca o nome avatar, e manda o arquivo ao lado no campo new file. Mais tem que ser o mesmo nome passado aqui na string e la na key o mesmo nome .).
//  3° função que executa ao acionar a rota. O callback ja acontece antes de chegar na rota , o arquivo ja vai estar la na pasta antes de chegar no arquivo.

// router.post('/upload', upload.single('teste'), ApiController.uploadFile) // Rota para um arquivo só.

//router.post('/upload', upload.array('teste', 2), ApiController.uploadFile) // Rota para mais de um arquivo manda em arrays . Primeiro paramentro o nome do array que vai ser enviado no postman, e o segundo a quantidade de itens que vai ser enviado. Se passar da quantidade definida no parametro vai dar erro .

// Dificilmente usado o "fields", normalmente é usado o single , ou o array que são os mais usados no dia a dia. Quando são arquivos diferentes, normalmente é mandado para endpoints diferentes, com rotas diferentes.
// Para arquivos de diferentes formatos, usa o fields e nele voce passa um array com objeto dizendo qual vai ser o nome do arquivo que quer enviar, e maxCount para dizer a quantidade de arquivos que vai ser enviado.
router.post('/upload', upload.fields([
    { name: 'avatar', maxCount: 1},
    { name: 'galeria', maxCount: 2}
]), ApiController.uploadFile) 

export default router;