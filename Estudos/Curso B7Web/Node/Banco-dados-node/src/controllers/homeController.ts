import { Request, Response } from 'express';

// Importando a configuração da conexão do banco de dados que foi feita la no arquivo mysql. para uso aqui no controller.
import { sequelize } from '../instances/mysql';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    // Fazendo um try catch para testar se a conexão com o banco de dados deu certa. Com a função authenticate que ja é do proprio sequelize para teste mesmo.
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso!')
    } catch (error) {
        console.log('Deu problema: ', error)
    }


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
        frasesDoDia: []
    });
};