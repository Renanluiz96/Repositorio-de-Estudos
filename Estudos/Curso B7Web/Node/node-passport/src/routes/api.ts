import { Router } from 'express';
// import { privateRoute } from '../config/basicPassport'; //Importa a middleware da rota privada 

import * as ApiController from '../controllers/apiController';
import { privateRoute } from '../config/jwtPassport';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list',privateRoute,  ApiController.list); // Usando a rota privada, onde so vai ter acesso quem tiver logado , e passado la pelo midlleware.

export default router;