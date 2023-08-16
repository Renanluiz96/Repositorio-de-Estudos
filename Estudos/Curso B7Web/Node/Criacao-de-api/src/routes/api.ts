import { Router } from "express";


const router = Router()

// Criando as rotas da api 

// Criando um endpoint ping-pong, onde ao acessar a rota ele vai fazer um teste para ver se a rota esta funcionando.
router.get('/ping', (req, res) => {
    res.json({pong: true});
});

// Endpoint onde ira sortear um numero e me retornara este numero na tela
router.get('/random' , (req, res) => {
    let numeroRandom: number = Math.floor( Math.random() * 10 ); // Pega um numero aleatorio entre 0 e 1, multiplica por 10 e arrendonda para baixo para não ficar quebrado. Função do javascript para sortear numero.
    res.json({number: numeroRandom})
});

// Endpoint onde me retornara o algum nome que eu passar na url usando o params com o : na url para mostrar nomes dinamicos via url na tela
router.get('/nome/:nome', (req, res) => {
    let nome: string = req.params.nome; // Esse nome depois do params, tem que ser o :nome que esta la na url.
    res.json({nome: `Voce enviou o nome ${nome}`})
});

export default router;