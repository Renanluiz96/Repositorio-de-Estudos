import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken } from '../config/jwtPassport';// Importa a função de gerar token para uso ao criar um usuario novo , e ao logar um usuario tambem cria um token

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        let hasUser = await User.findOne({where: { email }});
        if(!hasUser) {
            let newUser = await User.create({ email, password });
            const token = generateToken({ id: newUser.id }); // Criando um token ao criar um novo usuario ,ele vai criar um token.

            res.status(201);
            res.json({ id: newUser.id, token }); // Retorna junto ao usuario , o token criado novo.
        } else {
            res.json({ error: 'E-mail já existe.' });
        }
    }

    res.json({ error: 'E-mail e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    

    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await User.findOne({ 
            where: { email, password }
        });

        if(user) {
            const token = generateToken({ id: user.id }) // Ao logar o usuario cria um token passando um objeto e o id sendo o id do usuario logado.
            res.json({ status: true, token  });//Retorna tambem o estado true , e o token do usuario.
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    console.log("USER", req.user)
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}