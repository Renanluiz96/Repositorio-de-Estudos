// import { Request, Response } from "express";
// import { Sequelize } from "sequelize";
// // import { Phrase } from "../models/Todo";

// export const ping = (req: Request, res: Response) => {
//     res.json({pong: true})
// }

// export const random = (req: Request, res: Response) => {
//     let numeroRandom: number = Math.floor( Math.random() * 10 ); // Pega um numero aleatorio entre 0 e 1, multiplica por 10 e arrendonda para baixo para não ficar quebrado. Função do javascript para sortear numero.
//     res.json({number: numeroRandom})
// }

// export const nome = (req: Request, res: Response) => {
//     let nome: string = req.params.nome; // Esse nome depois do params, tem que ser o :nome que esta la na url.
//     res.json({nome: `Voce enviou o nome ${nome}`})
// }


// // Criando frase enviando via POST através do corpo da requisição internamente(body) la no postman , inserindo dados via postman. 
// export const createPhrase = async (req:Request, res: Response) => {
//     let { author, texto } = req.body // Salva os dados enviadas do corpo da requisição(enviadas pelo body(Através do postman) e não por parametros da url)

//     // Salva esses dados enviados do body em uma variavel. Cria uma variavel, para que possa gerar o id e enviar depois com este id
//     let newPhrase = await Phrase.create({ author, texto })


//     res.status(201)
//     // Envia como json para o banco de dados , o id que foi pego na variavel acima , envia tambe as variaveis author e texto que ja vai conter o conteudo do body  
//     res.json({ id: newPhrase.id, author, texto })

// }

// // Pegando todas as frases.
// export const listPhrases = async (req:Request, res:Response) => {
//     let list = await Phrase.findAll();
//     res.json({ list })
// }

// // Pegando uma frase através do id.
// export const getPhrase  = async (req:Request, res: Response) => {
//     let { id } = req.params;

//     let phrase = await Phrase.findByPk(id);
//     if(phrase) {
//         res.json({ phrase })
//     }else {
//         res.json({ error: 'FRASE NÃO ENCONTRADA' })
//     }
// }

// // Atualizando a frase.
// export const updatePhrase = async (req: Request, res: Response) => {
//     // Pegando os dados , o id , e o conteudo enviado do body e salvando em variaveis
//     let { id } = req.params
//     let { author, texto } = req.body

//     // Selecionando a frase pelo id.
//     let phrase = await Phrase.findByPk(id)
//     // Verifica se a frase existe pelo id
//     if(phrase) { 
//         // Se existir altera o valor pelo novo valor da variavel com dados do body da nova requisição
//         phrase.author = author;
//         phrase.texto = texto;
//         await phrase.save(); // Depois de alterado , agora salva com os dados novos

//         // Ao final envia o json novamente para atualizar os dados .
//         res.json({ phrase })

//     }else {
//         res.json({ error: 'ERRO AO ATUALIZAR OS DADOS' })
//     }
// }

// // Deletando frase
// export const deletePhrase  = async (req:Request, res: Response) => {
//     let { id } = req.params;
//     await Phrase.destroy({ where: { id } })
//     res.json({});
// }

// // Pegando frases aleatoriamente
// export const randomPhrase =async (req:Request, res:Response) => {
//     // Precisa usar uma função do sequelize(tem que importar ele) para usar est função de escolher eleatoriamente. 
//     let phrase = await Phrase.findOne({
//         // Ordena pela função fn do sequelize passando por parametro RANDOM(se for banco postgree). RAND(se for banco mysql) 
//         order: [ Sequelize.fn('RANDOM') ]
//     })

//     if(phrase){
//         res.json({ phrase })
//     }else {
//         res.json({ error: 'NÃO HÁ FRASES CADASTRADAS.' })
//     }

// }