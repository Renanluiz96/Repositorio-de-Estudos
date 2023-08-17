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