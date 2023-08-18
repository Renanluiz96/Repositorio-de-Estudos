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

router.post('/frases', ApiController.createPhrase)

export default router;