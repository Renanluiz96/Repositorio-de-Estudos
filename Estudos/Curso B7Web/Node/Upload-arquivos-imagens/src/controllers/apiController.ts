import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Phrase } from "../models/Phrases";
import sharp from "sharp"; // Biblioteca par manipulação de imagens npm install sharp . Tem types
import { unlink } from "fs/promises"; // Função do node para gerenciamento de arquivos, função unlink para deletar arquivos temporarios

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

    /*Type Upload
    
        type UploadTypes = {
            [fildname: string]: Express.Multer.File[] //Type onde vai poder receber qualquer nome de arquivo enviado no postman.
        }
    */

    // Para tipar o que vai ser recebido do arquivo para usar , cria uma variavel e coloca o req.files usa um as e passa um objeto dizendo que vai receber um nome que vai ser uma string e que o tipo dele é um arquivo do multer
    // const files = req.files as { [fieldname: string]: Express.Multer.File[]} // Type geral onde vai receber qualquer tipo de nome que for enviado pois pode receber um fieldname que é uma string
    // const files = req.files as UploadFiles // Cria um type fora e usa ele aqui dentro dizendo que esse req.files é um UploadFiles.
    // const files = req.files as {  // Ou voce ja pode usar o type diretamente na variavel, sem precisar usar um type para ela
    //     avatar: Express.Multer.File[]
    //     galeria: Express.Multer.File[]
    // }

    // console.log('FILE', req.file); // req.file para mais de 1 arquivo arquivo
    // console.log('FILES', req.files); // req.file para mais de 1 arquivo arquivo 

   if(req.file) { // Para fazer a manipulação do arquivo e salvando na pasta public usando a lib sharp . Ao receber o arquivo ai faz a manipulação dentro do if

        const filename = req.file.filename // Salva o nome do arquivo com aqueles monte de numero gerado aleatoriamente salvo em uma variavel para uso.

        await sharp(req.file.path) // Para pegar o caminho onde se encontra a imagem usando o path que ja vai ter o caminho das pastas.
            .resize(100, 100, {  // Para manipular ela pode passar 3 parametros : largura, altura e outras configs
                fit: sharp.fit.cover,
                position: 'center'
            }) 
            .toFormat('jpeg') // Mudar o formato do arquivo para o formato que queira.
            .toFile(`./public/media/${req.file.filename}`); // Para salvar o arquivo manipulado em uma pasta , normalmente salvo na pasta public . passa o caminho completo , e salvando a imagem com o mesmo nome que foi feito no arquivo temporario.

            await unlink(req.file.path) // Depois de ter gerado o arquivo temporario , feito a manipulação nele , voce usa o unlink para deletar ele. passando parametro o caminho ate o arquivo temporario que seria o req.file.path.

        res.json({ image: req.file.filename })

   } else {
    res.status(400);
    res.json({ error: 'Arquivo Invalido' })
   }
}