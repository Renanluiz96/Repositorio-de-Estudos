import bcrypt from 'bcrypt';
import { User } from '../models/User';

// Criar todos os servicos que vai ser feito no User para ser executado aqui e depois transeferido la para o controller.

export const createUser =async (email:string, password: string) => {
    const hasUser  = await User.findOne({ where: {email} }); //Procura se tiver um usuario com o email enviado

    if (!hasUser) {
        const hash = bcrypt.hashSync(password, 10); // Cria um hash usando a lib bcrypt , onde ele vai pegar o password enviado por parametro e ira criar um hash com 10 salt.

        const newUser  = await User.create({ // Criara um novo usuario , passando o email e a senha agora sera um hash para não salvar a senha pura no banco de dados.
            email,
            password: hash
        })
        
        return newUser; // No final ira retornar este novo usuario criado.
    }else {
        return new Error('Email já existe.')
    }
}

export const findByEmail =async (email:string) => { // Ira procurar o email la no banco de dados.
    return await User.findOne({ where: {email} }); 
}

export const matchPassword =async (passwordText:string, encrypted: string) => {
    //Usa a função compare do bcrypt , onde ira comparar a senha que o usuario digitar , com a senha que esta encriptada.
    return bcrypt.compareSync(passwordText, encrypted);
}

export const all = async () => {
    return await User.findAll();
}