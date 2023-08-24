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
    const id: string = req.params.id;

    let todo = await Todo.findByPk(id);
    if (todo) {
        
        if (req.body.title) {
            todo.title  = req.body.title;
        }

        if (req.body.done) {
            switch (req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    todo.done = true;   
                    break;
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
    
}