import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Todo } from "../models/Todo";

export const all = async (req: Request, res: Response) => {
    const list  = await Todo.findAll();
    res.json({ list })
}

export const add = async (req: Request, res: Response) => {
    // Ele faz uma verificação se estiver mandando alguma coisa
    if (req.body.title) {

        let newTodo = await Todo.create({
            // Vai criar um novo titulo. Que e o que voce mando no corpo da requisição
            title: req.body.title,
            done: req.body.done ? true : false  // Como o done e um boolean e ele vem padrão como falso , então caso voce mandar algo ele marca como true, se não mandar nada ele vai salver como false como padrão
        });

        // Ao final quando for enviar dados para api tem que enviar no status 201(que seria o status de criado). e Envia o json com um item e esse item é a variavel acima que voce crio o novo item. Basicamente voce salva em uma outra variavel e envia ela.
        res.status(201).json({ item: newTodo})

    } else { //Caso não manda nada na requisição ele retorna um erro
        res.json({ error: 'Dados não enviados' })
    }
}

export const update =async (req: Request, res: Response) => {
    const id: string = req.params.id; // Pegando o id na url :id sempre vai ser uma string

    let todo = await Todo.findByPk(id); // Acessando o conteudo pelo id e salvando na variavel para alteração nos dados

    // Faz um if para caso o id exista que foi mandada na url :id . Ai faz o processo de atualizar
    if (todo) {
        // Depois de cair aqui e tiver um usuario fazer , uma condição para atualizar cada um independentemente. Não precisando atualizar tudo novamente .

        if (req.body.title) {  //Se for enviado um title pelo body da pagina ou pelo postman 
            todo.title  = req.body.title; // Ai sim altera o conteudo title la do banco de dados do id pego pelo todo . salva o novo dado enviado da requisição.
        }

        // Caso envio um boolean ai entra neste if
        if (req.body.done) {
            // Faz um switch para cada opção de dado que for enviado pelo usuario , caso não mande não vai ser alterado (LEMBRANDO QUE TUDO E STRING) .

            switch (req.body.done.toLowerCase()) { // Tem que usar lowerCase pois como e case sensitive, se for mandar um TRUE e FALSE maiusculo ele não vai entender. para garantir , voce ja transforma pra letra pequena.

                // Caso enviar true ou 1 , ele vai alterar o boolean para true.
                case 'true':
                case '1':
                    todo.done = true;   
                    break;

                // Caso enviar false ou 0 ele vai alterar o boolean para false.
                case 'false':
                case '0':
                    todo.done = false;
                    break;
            
            }
        }

        await todo.save();
        res.json({ item: todo})
    } else{
        res.json({ error: 'Item não encontrado' })
    }
}

export const remove =async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let todo = await Todo.findByPk(id)
    if (todo) {
        await todo.destroy()
        
    }
    res.json({})
}