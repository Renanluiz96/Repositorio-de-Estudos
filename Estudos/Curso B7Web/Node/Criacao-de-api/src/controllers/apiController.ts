import { Request, Response } from "express";

import { Phrase } from "../models/Phrases";

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
    let numeroRandom: number = Math.floor( Math.random() * 10 ); // Pega um numero aleatorio entre 0 e 1, multiplica por 10 e arrendonda para baixo para não ficar quebrado. Função do javascript para sortear numero.
    res.json({number: numeroRandom})
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome; // Esse nome depois do params, tem que ser o :nome que esta la na url.
    res.json({nome: `Voce enviou o nome ${nome}`})
}


// Criando frase enviando via POST através do corpo da requisição internamente(body) la no postman , inserindo dados via postman. 
export const createPhrase =async (req:Request, res: Response) => {
    let { author, texto } = req.body // Salva os dados enviadas do corpo da requisição(enviadas pelo body(Através do postman) e não por parametros da url)

    // Salva esses dados enviados do body em uma variavel. Cria uma variavel, para que possa gerar o id e enviar depois com este id
    let newPhrase = await Phrase.create({ author, texto })

    // Envia como json para o banco de dados , o id que foi pego na variavel acima , envia tambe as variaveis author e texto que ja vai conter o conteudo do body  
    res.json({ id: newPhrase.id, author, texto })

}