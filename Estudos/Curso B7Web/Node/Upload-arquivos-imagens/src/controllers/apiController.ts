import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from "../models/Phrases";

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
    let numeroRandom: number = Math.floor( Math.random() * 10 );
    res.json({number: numeroRandom})
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome: `Voce enviou o nome ${nome}`})
}

export const createPhrase = async (req:Request, res: Response) => {
    let { author, texto } = req.body 
    let newPhrase = await Phrase.create({ author, texto })
    res.status(201)
    res.json({ id: newPhrase.id, author, texto })
}

export const listPhrases = async (req:Request, res:Response) => {
    let list = await Phrase.findAll();
    res.json({ list })
}

export const getPhrase  = async (req:Request, res: Response) => {
    let { id } = req.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase) {
        res.json({ phrase })
    }else {
        res.json({ error: 'FRASE NÃO ENCONTRADA' })
    }
}

export const updatePhrase = async (req: Request, res: Response) => {
    let { id } = req.params
    let { author, texto } = req.body

    let phrase = await Phrase.findByPk(id)
    if(phrase) { 
        phrase.author = author;
        phrase.texto = texto;
        await phrase.save(); 
        res.json({ phrase })

    }else {
        res.json({ error: 'ERRO AO ATUALIZAR OS DADOS' })
    }
}

export const deletePhrase  = async (req:Request, res: Response) => {
    let { id } = req.params;
    await Phrase.destroy({ where: { id } })
    res.json({});
}

export const randomPhrase =async (req:Request, res:Response) => {
    let phrase = await Phrase.findOne({
        order: [ Sequelize.fn('RANDOM') ]
    })

    if(phrase){
        res.json({ phrase })
    }else {
        res.json({ error: 'NÃO HÁ FRASES CADASTRADAS.' })
    }

}

// Função criada para quando o usuario mandar o arquivo via post para a url.
export const uploadFile =async (req:Request, res: Response) => {
    // Agora para manipular os arquvios no controller bom voce ver as informações com um console.log para ves as informações do arquivo voce usa o req.file . Que ele usa o type do multer. ele vai passar todas as informações sobre o arquivo enviado , e ai sim voce faz a manipulação pelos dados que estão aparecendo ali no console.
    console.log( req.file )

    res.json({})
}