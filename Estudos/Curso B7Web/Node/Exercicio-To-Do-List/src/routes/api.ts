import { Router } from "express";

import * as ApiController from '../controllers/apiController'

const router = Router()

// Criando as rotas da api 

// Criando um endpoint ping-pong, onde ao acessar a rota ele vai fazer um teste para ver se a rota esta funcionando.
router.get('/ping', ApiController.ping);

// Endpoint onde ira sortear um numero e me retornara este numero na tela
router.get('/random' , ApiController.random);

// Endpoint onde me retornara o algum nome que eu passar na url usando o params com o : na url para mostrar nomes dinamicos via url na tela
router.get('/nome/:nome', ApiController.nome);


// Rotas fixas são colocadas primeiras, e logo apos coloca a rota dinamica. Para uma rota não atrapalhar a outra . Se coloca a rota fixa depois da dinamica , pode não achar, pois pode cair na rota dinamica acidentalmente.
router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.listPhrases)
router.get('/frase/aleatoria', ApiController.randomPhrase)
router.get('/frase/:id' ,ApiController.getPhrase)
router.put('/frase/:id', ApiController.updatePhrase)
router.delete('/frase/:id', ApiController.deletePhrase)

export default router;