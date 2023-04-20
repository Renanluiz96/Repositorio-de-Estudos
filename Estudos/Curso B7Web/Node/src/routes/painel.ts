//Criando um arquivo para rotas especificas de alguma lugar, ou seja aqui se por acaso tiver um painel de usuario, aqui teria as rotas especificas sobre este painel separadamente .
import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {

    res.send('Home do painel')
})

router.get('/noticia', (req: Request, res: Response) => {

    res.send('Lista de noticia cadastradas')
})


export default router;