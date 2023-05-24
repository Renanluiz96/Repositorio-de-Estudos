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

    /*UPDATE 
    // Fazendo Update Na Função update voce passa nela 2 parametros que são objetos ou variaveis com os dados salvos.
    // 1. Os dados com os valores novos a serem atualizados.
    // 2. Condição para encontrar o(s) item(s), pode ser mais de uma condição(where)

    // Aqui altererei todos os valores da coluna age para 18 , todos em que o age fossem menor que 18 , para isso usei o where filtrando os dados de age com o Op.lt que fossem menor que 18. Metodo de alteração em massa.
    /*await User.update({ age: 18 },{
        where: {
            age: {
                [Op.lt]: 18
            }
        }
    })

    // Alterei o valor da coluna nome para "Seu Chico", e o age para 56, e filtrei o id 4 , para pegar em especifico esse usuario , e setei os valores de dados dele como o primeio parametro
    await User.update({ nome: 'Seu Chico', age: 56 },{
        where: {id: 4}
    })

      // Para fazer um update pegando um usuario especifico.
    // Salva em uma variavel , um findAll() e no parametro voce coloca o where filtrando quem voce quer pegar o dado , caso aqui o id 5. Ele sempre ira retornar um array com o resultado
    let results = await User.findAll({ where: { id: 5 } });

    // Usa um if para verifica se a variavel estiver com maior de 0 , ela esta preenchida com o resultado. 
    if(results.length > 0) {
        // Pega o resultado que esta no primeiro valor do array retornado e salva ela em uma variavel , para poder fazer a manipulação . Pois não pode fazer a manipulação direto no resultado do findAll.
        let usuario = results[0];

        // Com a variavel onde vai conter o resultado da filtragem , aqui voce pode alterar os dados como quiser.
        usuario.nome = 'Testador Alterado';
        usuario.age = 20;

        // E no final, da um .save() na variavel que voce crio para intermediar a manipulação do update, para que seja salvo no banco o novo dado atualizado, na tabela.
        await usuario.save();
    }
    */

    /*DELETE   
    // Deletando usando o comando destroy(), ele tem apenas 1 parametro . Ele é usado da mesma maneira que o update.
    // 1 - Usando de maneira massiva ,onde ele vai procurar todos os dados que tiverem em uma condição.

    // Ira deletar todos os dados de quem tiver o valor da coluna age menor que 19 , ele ira deletar todo os dados deste usuario.
    await User.destroy({
        where: {
            age: {
                [Op.lt]: 19
            }
        }
    })

    // 2 - Usando de maneira especifica, onde faz um findAll passando o o dado especifico no parametro , salvando ele em uma variavel intermediadora, e depois dando um destroy nesta variavel intermediadora, pois não pode fazer alteração direto na variavel retornada do findAll.

    // Filtro o usuario pelo nome , salvo em uma variavel
    let results = await User.findAll({ where: {nome: 'ciclano'} });
    // Fez uma verificação para que se a variavel tivesse algum resultado.
    if(results.length > 0) {
        // Salvo o resultado em uma variavel intermediadora(pois NÃO PODE ALTERAR o dado retornado do findAll)
        let usuario = results[0];

        // Como esta deletando um usuario, ele da um destroy na variavel intermediadora que ira conter o dado do usuario. Obs: não precisa dar o save , save é só no caso do update.
        await usuario.destroy()
    }
    */

    
    /*Metodos Finder
    - FindAll = Onde ele vai achar todos os registros, ele vai retornar um array. E para pegar algum resultado voce tem que pegar pelo numero do array com objetos

    - FindOne = Onde ele vai retornar apenas 1 resultado, se caso na filtragem achar mais de 1 usuario , ele vai retornar apenas o primeiro usuario achado.
        let usuario  = await User.findOne({
        where: {
            nome: 'renan'
        }
    })

    - FindByPk - Onde ele vai filtrar apenas pela chave primaria(Primary key), passando o id da chave primaria no parametro.
    - let usuario = await User.findByPk(3)

    - FindOrCreate = Esse find ele vai procurar um usuario ou dado. se caso ele não achar , ele vai criar la no banco de dados.
    Dentro voce cria um let ou const , e passa 2 variaveis 1º que vai ser o usuario de fato, e 2º que vai ser se caso não tiver vai ser onde ele vai criar.
    Dentro da função voce passa um objeto que vai ter o where onde voce vai filtrar para procurar , e o 2º é um objeto com nome defaults, ali ele passara os dados padrões que voce quer inserir caso ele não ache o usuario, ele vai completar os dados com o que voce coloco no where , e mais os dados para complementar voce passa ali dentro de defaults
    -  const [usuario, created] = await User.findOrCreate({
        where: {nome: 'Feijó'},
        defaults: {
            age: 46
        }
    });

    if(created) {
        console.log("Usuario criado com sucesso!")
    } else {
        console.log("Achamos o usuario")
    }
    console.log("Nome: ", usuario.nome)
    */

   

    
    // if(usuario) {
    //     console.log(`O usuario ${usuario.nome} possui ${usuario.age} anos.`)
    // } else {
    //     console.log("Usuario não encontrado")
    // }

  
    let users = await User.findAll()


    /* Inserção ao banco de dados
    //Inserção ao banco de dados = build + save
    const user = User.build({
        // Somente o comando build ele cria na memoria do node, ele ainda não manda para o banco de dados. Mais voce ainda consegue ter acesso aos dados dele vendo no console.
        nome: 'Fulano',
        
    });
    //  Fazendo alguma coisa , modificando algo esperando alguma resposta para depois completar os dados , ai só depois disso voce faz o save . Ai sim salva no banco de dados.
    let idade: number = 27;
    user.age = idade;
    await user.save()

    


    //Inserção ao banco de dados = Create , ele ja vai inserir diretamente os dados no banco.
    // const user = await User.create({
    //     nome: 'ciclano',
    //     age: 23
    // })


    // console.log("Nome do novo usuario ", user.nome)
    // console.log("Idade  do usuraio ", user.age)
    */
    /* Conteudo de consulta
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
        offset: 0, // Offset serve para pular os dados , ou seja aqui ele vai pular a quantidade que eu especificar, se deixar 0 ele pega o primeiro dados . Usado com o limit para paginação na tela.
        limit: 2 //Para limitar a quantidade de dados na tela.

    });
    */

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

export const novoUsuario = async (req: Request, res: Response) => {
    let { nome, age } = req.body;

    if(nome) {
        const newUser = User.build({ nome });

        if(age) {
            newUser.age = parseInt(age);
        }

        await newUser.save();
    }

    res.redirect('/');
}