import { Request, Response } from 'express';

// Importando a configuração da conexão do banco de dados que foi feita la no arquivo mysql. para uso aqui no controller.
// import { sequelize } from '../instances/mysql';

// Importando a configuração da conexão do postgres aqui para teste .
// import { sequelize } from '../instances/pg'

import { Op } from 'sequelize'; // Importando do sequelize o "Op" para fazer operações dentro do banco de dados como o "OR" em uma condição no filtro where.

import { Product } from '../models/Product';

// Importando o User do model para usar os dados do banco de dados aqui
import { User } from '../models/Users';

export const home = async (req: Request, res: Response) => {

    // Criando uma variavel onde vai conter todos os usuarios do banco de dados User , com a função findAll(). Tem que ser await , como é uma função assincrona.
    let users = await User.findAll({
        // Para pegar algum atributo especifico , e não todos voce diz qual atributo quer pelo "attributes".
        // attributes: ['nome', 'age']

        // Para fazer uma filtragem usando where;
        // where: {age: 50, nome: 'pedro'} filtragem simples , ele vai buscar quem tem age = a 50 e nome = pedro. Quanto mais voce colocar , mais ele vai filtrar.
        // Tem tambem o filtro "OU" que é ou um resultado ou outro, para isso vai ter que importar o "Op" do sequelize .
        where: {
            //Tem que usar o OP.or desta formar e dentro do array voce passa cada condição dentro de objeto diferente . ele vai entender que "ou" uma busca "ou" a outra , a cada objeto colocado ele vai colocando na busca e vai retornar.
            // [Op.or]: [{ age: 50 },{ nome: 'ze' }]
            age: {
                [Op.gte]: 18
            },
        },
        order: [ //Para fazer ordenação usa o order dentro dele usar um array e dentro usa um array para cada tipo de ordenação que quer fazer
            ['age', 'ASC'], // Faz uma segunda ordenação se caso tiver o resultado com o mesmo nome ,ele vai pegar a coluna age e ira fazer por exemplo aqui de forma decrescente.
            ['nome', 'DESC'] // Fazendo uma ordenação pelo nome de forma ascendente(Que seria o comportamento padrão , então se não colocar nada este vai ser o padrão).
        ],
        offset: 4,
        limit: 2

    });


    let age: number = 90;
    let showOld: boolean = false;

    if (age > 50) {
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