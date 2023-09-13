import { Router } from 'express';
import { Auth } from '../middlewares/auth';  // Importando middleware para uso na rota que voce quer deixar privada
import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

//Para deixar a rota privada , é necessario colocar um middleware seria uma função no meio da rota para fazer uma verificação se pode ser acessado a rota , se ele autorizar ai ele passa para a rota em si. Para isto é nessecario colocar o "middleware no  meio da rota". Necessario criar e colocar este middleware em uma pasta e arquivo especifico para ele, e apenas exportar para usar ele nas rotas que voce quer deixar privada.
router.get('/list',Auth.private , ApiController.list);

export default router;