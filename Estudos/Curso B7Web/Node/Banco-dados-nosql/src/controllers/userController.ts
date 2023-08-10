import { Request, Response } from 'express';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const increaseAge = async (req:Request, res: Response) => {
    const id = req.params.id

    if (!id) throw new Error (`Erro não comtem nenhum id`)
    const usuario = await User.findOne({_id : id})
    if (usuario?.age) usuario.age++;
    usuario?.save()
    res.redirect('/')
}

export const decreaseAge = async (req: Request, res: Response) => {
    const id = req.params.id

    if (!id) throw new Error (`Erro não comtem nenhum id`)
    const usuario = await User.findOne({ _id: id })
    if(usuario?.age) usuario.age--;
    usuario?.save()
    res.redirect('/')
}

export const deleteUsuario =async (req: Request, res: Response) => {
    const id = req.params.id

    if (!id) throw new Error (`Erro não comtem nenhum id`)
    const usuario = await User.findOne({ _id: id })
    if(usuario) usuario.deleteOne()
    res.redirect('/')
}

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

