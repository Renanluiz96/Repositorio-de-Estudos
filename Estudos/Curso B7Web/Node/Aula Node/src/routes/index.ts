//Arquivo onde ficar contido todas as rotas relacionados ao site. Se o site for muito grande podera ter cada arquivo organizado para cada grupo de rotas especifico para cada area do site.

import { Request, Response, Router } from "express";

// IMPORTANDO TODO O CONTEUDO DE CADA ARQUIVOS DO CONTROLLER PARA SOMENTE O USO AQUI NAS ROTAS.
import * as HomeController from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserController from "../controllers/userController";

//Com o Router do express consegue se criar rotas em um arquivo separado e pré-configurado para usar la no servidor apenas importando as rotas criadas aqui , para que fique no servidor somente o uso , e não fique o arquivo do servidor cheio de rotas e bagunçado.

//Cria uma variavel para usar a função router. e depois configura todo as rotas que voce quiser e salva nesta variavel , para uso la no servidor.
const router = Router();


router.get('/', HomeController.home)

router.get('/contato', InfoController.contato )
router.get('/sobre', InfoController.sobre )


router.get('/nome', UserController.nome)
router.get('/idade', UserController.idadeForm)
// FAZENDO UMA REQUISIÇÃO VIA POST DA PAGINA /IDADE E AO ENVIO DO FORMULARIO VAI ENVIAR PARA OUTRA URL /IDADE-RESULTADO.
router.post('/idade-resultado', UserController.idadeAction)

//Depois de criar a variavel , e configurar ela toda , voce exporta ela como default, exportando ela assim , na hora de importa la no servidor para uso , "voce pode chamar ela do que quiser" dependendo do contexto , para ficar mais facil o entendimento
export default router;