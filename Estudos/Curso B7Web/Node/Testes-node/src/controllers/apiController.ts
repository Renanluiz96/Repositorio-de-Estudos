import { Request, Response } from 'express';
import * as UserService from '../services/UserService' // Não importa mais o model aqui , importa o service para uso das funções respectivas do usuario aqui . la voce cria todas as funções aqui voce somente importa as funções para o "USO".

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

// Fazendo isso substituindo toda a verificação e criação do usuario que antes era feita aqui por apenas usar um servico la do service  , e apenas utilizando aqui  , pois aqui é somente o uso , em um projeto real não é feito esta parte no controller e sim no service.
export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) { // Se mando no body da requisição o email e o password
        let { email, password } = req.body; // Pegando o email e o password do body e salvando em variaveis.


        const newUser = await UserService.createUser(email, password); // Usando a função do service aqui para criar um novo usuario com os dados enviador do body que foram salvos em variaveis . Ai la no service que vai ser feito todo procedimento , se tiver algum usuario com os dados ele retorna um erro , caso não tiver ele ira criar um usuario .

        //Como ao criar um usuario ele ira retornar ou o usuari ou um erro . Voce verifica se ele retorno um erro , voce envia o proprio erro no json , caso o contrario que deu certo voce envia o status 201 e o id do usuario.
        if(newUser instanceof Error) { 
            res.json({ error: newUser.message })
            return 
        }else {
            res.status(201);
            res.json({ id: newUser.id })
            return 
        }

    }
    res.json({ error: 'E-mail e/ou senha não enviados.' });



}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        const user = await UserService.findByEmail(email); // Procura o email passado la no banco de dados e retorna o email

        //Depois verifica se o email que ele pego la no banco de dados , e o password digitado pelo usuario no login , for o mesmo password que esta encriptografado , ele ira retornar true e liberara o acesso.
        if(user && await UserService.matchPassword(password, user.password)) { // Conferindo se a senha do usuario digitada e a senha incriptografada são as mesmas.
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await UserService.all(); //Pegando os usuarios usando a função all que ira pegar todos os usuarios listados no banco
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}