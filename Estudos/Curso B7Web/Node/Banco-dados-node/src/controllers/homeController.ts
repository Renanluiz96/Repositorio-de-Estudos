import { Request, Response } from 'express';

// Importando a configuração da conexão do banco de dados que foi feita la no arquivo mysql. para uso aqui no controller.
// import { sequelize } from '../instances/mysql';

// Importando a configuração da conexão do postgres aqui para teste .
// import { sequelize } from '../instances/pg'


import { Product } from '../models/Product';

// Importando o User do model para usar os dados do banco de dados aqui
import { User } from '../models/Users';

export const home = async (req: Request, res: Response)=>{
    
    // Criando uma variavel onde vai conter todos os usuarios do banco de dados User , com a função findAll(). Tem que ser await , como é uma função assincrona.
    let users = await User.findAll();


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users // Colocando a variavel que vai conter todas os dados do banco para usar la no views na tela.
    });
};