import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/novo-usuario', HomeController.registrarUsuario)
router.get('/usuario/:id/addidade', UserController.increaseAge)
router.get('/usuario/:id/diminuiridade', UserController.decreaseAge)
router.get('/usuario/:id/removeridade', UserController.deleteUsuario)

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;