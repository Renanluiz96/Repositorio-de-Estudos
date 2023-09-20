import { Request, Response } from 'express';
import { User } from '../models/User';
import dotenv from 'dotenv'

dotenv.config();


import JWT from 'jsonwebtoken'; // Biblioteca para utilizar autenticação JWT , npm install jsonwebtoken. E tambem tem os types

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        let hasUser = await User.findOne({where: { email }});
        if(!hasUser) {
            let newUser = await User.create({ email, password });

            // Criando o token JWT ao criar um novo usuario .
            const token = JWT.sign(
                { id: newUser.id, email: newUser.email },
                process.env.JWT_SECRET_KEY as string,
                {expiresIn: '2h'}
            )

            res.status(201);
            res.json({ id: newUser.id, token });
        } else {
            res.json({ error: 'E-mail já existe.' });
            return;
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
            // Criando um token JWT ao momento que voce logou na sua conta ,ele criara um token contendo as informações da sua conta em uma chave privada que fica no seu sistema.
            const token = JWT.sign( // A função sign tem 3 parametros  =
            // 1° um objeto onde vai conter as informações do usuario , ou algo a mais que queira acrescentar. 
            // 2° Chaver privada (obrigatoria) = que fica salva la nas variaveis de ambiente, para usar tem que exporta o .env aqui, voce usa essa chave( que seria uma string onde vai conter um hash ou algum conjunto de caracteres que voce queira) para cripografar e descriptografar o objeto que vai conter o token, essa chave privada fica salva la nas variaveis de ambiente.
            // 3° Um objeto contendo a data de expiração que este token pode expirar.

                { id: user.id, email: user.email}, // Salvando o id e o email do usuarios apenas em um objeto
                process.env.JWT_SECRET_KEY as string, // Chave privada que esta salva la na variavel de ambiente , tem que colocar as string para dizer que é uma string se não da erro no typescript.
                { expiresIn: '2h' }
            )
            // E quando tiver usando o JWT , no final tem que retornar tambem o token.
            res.json({ status: true, token });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}