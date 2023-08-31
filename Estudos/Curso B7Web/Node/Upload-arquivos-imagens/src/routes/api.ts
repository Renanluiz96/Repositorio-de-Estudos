import { Router } from "express";
// Importando a lib externa para manipular imagens aqui usamos a multer - npm install --save multer. npm instal @types/multer.
import multer from "multer";

import * as ApiController from '../controllers/apiController'

// Configurando o storage , para salvar os arquivos no hd usando o multer.diskStorage({})
const storageConfig = multer.diskStorage({
    //Tem que ter 2 funções onde voce cria aqui uma para informar o destino onde voce vai salvar os arquivos, e a segunda função onde vai ser o nome do arquivo
    destination: (req, file, callback) => { //Informa o destino do arquivo , vai ter 3 parametro .
        callback(null, './temporario'); // terceiro parametro que usa a função callback para informar onde vai ser salvado , nesta função callback tambem é informado 2 parametros - primeiro caso aconteca algum erro, e o segundo é o destino em si.
    }, 
    filename: (req, file, cb) => {
        // Da mesma maneira que o destino , o filename vai ter 3 parametros e  a função callback que tera 2 parametro ,primeiro o erro e a segunda seria o nome do arquivo . pode salvar pelo nome enviado usando o file.fieldname. Concatena com uma extensão para uso. Se voce usar enviando o nome do arquivo como fieldname, se voce quiser enviar o mesmo arquivo ele vai substituir, por isso voce cria um hash com um numero aleatorio. Ai sim pode salvar varios arquivos iguais que vão conter cada um um hash de numeros diferentes.

        // Criando um hash em uma  variavel   para uso na função do callback.
        let randomName = Math.floor(Math.random() * 999999)
        cb(null, `${randomName+Date.now()}.jpg`) // Usando hash com um template string passando a hash gerada na variavel. Pode usar tambem o hash, junto com a hora atual(Date.now() ). para não ter problema de salvar o mesmo arquivo.

        //cb(null, file.fieldname+'.png')
    }
}
);
// Configurando para salvar os arquivos na memoria para manipulação futura. usando o memoryStorage() . Cuidado ao usar o memory storage pois se enviar muitos arquivos e carregar o servidor e travar .
const memoryStorage = multer.memoryStorage()

// Configurar o multer ,salvando a função em uma variavel para uso. Dentro dela tem alguns parametros para usar , colocando dentro de um objeto.
const upload  = multer({
    // dest é pra onde ele vai enviar o arquivo , ele vai criar uma pasta se caso não tiver, ele ira criar uma pasta na raiz do servidor onde ta o server.ts , não onde e a pasta de routes. usando o ./ . Voce pode mandar para esta pasta temporaria digamos assim para manipular o arquivo. Ou envia para a pasta public , ja para disponibilizar para o publico depois de processado na pasta temporaria, voce envia e deixa publico bonitinha para o publico.
    // Para enviar o arquivo tem que criar uma rota via post . Voce cria la em baixo . Que ao enviar no body , ele enviara para a pasta que voce coloco aqui no dest , seja ela temporaria ou não. Voce tem que criar uma função para ser enviada na requisição la no controller. Uma função que retorna um res.json . 
    dest: './temporario',
    storage: storageConfig,

    // Filtrando arquivos pelo tipo deles
    fileFilter: ( req, file, cb) => {
        const permitidos: string[] = ['image/jpg', 'image/jpeg', 'image/png']; // Cria um array colocando os tipos de arquivos que voce quer permitir mandar.
        cb(null, permitidos.includes( file.mimetype )); //Cria a função callback , que ela so vai aceitar se o mimetype do arquivo(ou seja o tipo do arquivo) tiver dentro do array. Ou seja vai verificar se tiver um igual o do array e ele vai retornar true ou false. que voce permitiu ai sim ele aceita o arquivo
    },
    limits: { fieldSize: 20000000} // Limits vai poder limitar por algumas coisas, uma  delas e por tamanho do arquivo que seria o fieldSize, assim passando o valor em bytes. para não ser enviado arquivos muito grande.
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

router.post('/upload', upload.single('teste'), ApiController.uploadFile) // Rota para um arquivo só.

//router.post('/upload', upload.array('teste', 2), ApiController.uploadFile) // Rota para mais de um arquivo manda em arrays . Primeiro paramentro o nome do array que vai ser enviado no postman, e o segundo a quantidade de itens que vai ser enviado. Se passar da quantidade definida no parametro vai dar erro .

// Dificilmente usado o "fields", normalmente é usado o single , ou o array que são os mais usados no dia a dia. Quando são arquivos diferentes, normalmente é mandado para endpoints diferentes, com rotas diferentes.
// Para arquivos de diferentes formatos, usa o fields e nele voce passa um array com objeto dizendo qual vai ser o nome do arquivo que quer enviar, e maxCount para dizer a quantidade de arquivos que vai ser enviado.
// router.post('/upload', upload.fields([
//     { name: 'avatar', maxCount: 1},
//     { name: 'galeria', maxCount: 2}
// ]), ApiController.uploadFile) 

export default router;