import { Request, Response } from 'express';

import User from '../models/User'

export const home = async (req: Request, res: Response)=>{

    let users = await User.find({}).sort({"name.FirstName": 1})

    res.render('pages/home', {
        users
    });
};

// Registrando novo usuario no banco de dados

// Aqui vai receber as informações do formulario que voce vai enviar via post, voce vai criar as variaveis com o mesmo nome la do name do input
export const registrarUsuario = async (req: Request, res: Response) => {
    let firstName = req.body.firstName as string;
    let lastName = req.body.lastName as string;
    let email = req.body.email as string;
    let age = req.body.age as number;
    let interests = req.body.interests.split(',');

    // Salvando o novo usuario, no banco de dados instanciando e salvando ele no final
    let newUser = new User();
    // Criando um if para fazer uma verificação que se tiver todas as variaveis preenchidas então ele preenche os dados.
    if(firstName && email && age) {
        newUser.name = { firstName: firstName, lastName: lastName };
        newUser.email = email;
        newUser.age = age;
        newUser.interests = interests;

        let saveNewUser = await newUser.save();
        console.log(saveNewUser);

        res.redirect('/') // Ao final redireciona para a pagina inicial
    }else {
        console.log('Aconteceu algum erro ao cadastrar o usuario')
    }
    
}

    /* Metodos de consultas FIND

        Para achar apenas um resultado e entre os parametros voce coloca o que quer procurar , como o findOne acha somente um registro , ele retorna um objeto e não array.
            User.findOne({email: 'nomefacil@gmail.com'})

        Para pegar um resultado pelo id do usuario , passando o id do usuario por parametro, tambem como é um resultado vai retornar apenas um objeto e não um array.
            User.findById('64c7844a0ed2936877ad75a9')

        Find - Para pegar por um ou mais  item em especifico.
            User.find({ Aqui ele vai procurar o resultado que tiver os 2 items abaixo , caso tiver apenas 1 ele ira retornar vazio.
                email: 'renandbx0@gmail.com',
                age: 28
            })

        Para fazer uma consulta de um item que esteja dentro de um objeto , voce não pode pesquisar diretamente pelo campo do objeto filho , pois somente funciona para pesquisa de itens direto, para fazer pesquisa por objeto filho(que seria o objeto dentro de outro objeto.) , tem que por entre aspas  nome do objeto pai um ponto e depois o nome do campo com o objeto filho , e logo depois o resultado que voce quer pesquisar.
            User.find({
                "name.lastName": 'benes'
            })

        Para fazer a pesquisar por um item que esteja dentro de um array , voce apenas coloca o item que esta pesquisando e o valor do item do array que estiver procurando , exemplo quero procuarar dentro da lista interesses quem tem o interesse em tecnologia , ira me mostrar os resultados de todos que tem o item tecnologia dentro do array interesses. Voce pode colocar diretamente.
            User.find({
                interests: 'tecnologia'
            })

        Para fazer uma consulta com condições especifica , exemplo pessoas com a idade acima de 18 . Usa-se as nomenclaturas dentro de um objeto .
            User.find({
                age: { $gt: 18  } - ira pesquisar quem tem mais de 18
                age: { $gt: 18, $lte: 60 } Pesquisa pessoas que são maiores que 18 e menores ou iguais 60 anos
            })
            GT = Greater then - Maior
            GTE = Greater then or Equal - Maior ou igual
            LT = Lower then - Menor
            LTE = Lower then or Equal - Menor ou igual
    */
    
    /*Metodo de ordenação SORT
        Para fazer uma ordenação seja ela ordem alfabetica , ou numeral. Voce vai usar sempre a numeração de 1 e -1 . Que o 1 seria de forma crescente, e -1 de forma decrescente .
            User.find({age:{$gt:18,}}).sort({
                age: 1 - Vai ordenar os itens do resultado de forma crescente
                age: -1 - Forma decrescente.

                name : 1 = Vai ordenar de forma alfabetica crescente

                Se tiver 2 resultados iguais, pode por uma segunda condição pra dezempate. 
                age: 1 , name: -1 - Vai pegar as idades crescente, se tiver alguem com a mesma idade, ele vai dezempatar pelo name de forma decrescente.

                Para ordenar usando por um objeto filho , usa a mesma logica do find e escreve igual
                "name.firstName": 1 - ira ordenar de acordo com a condição dentro do objeto . e se quiser fazer o dezempate , pode colocar uma segunda apenas colocando uma virgula
            })
    */

    /*Limite de usuarios
        Use o .limit para fazer um limite de usuarios na tela. 
        Use o skip para pular de quanto em quanto usuarios ira pular , na tela. Usada para paginação .
        Se tiver 1000 resultados na tela voce pode limitar para mostar de 10 em 10 e fazer com que cada pagina ir pulando de 10 em 10 e mostrando sempre o resultado 0 que ele pularia 10 e mostraria o primeiro resultado logo apos que seria o 0.
            User.find({})skip(0).limit(2) - aqui ira pular o 0 e ira comecar do zero basicamente ira comecar do comeco.

            User.find({})skip(10).limit(10) - Aqui ira pular 10 resultados, e ira mostrar o primeiro resultado sempre limitando o resultado na tela a 10 .
    */
    
    /*Criando usuarios no banco de dados

        Usando o create() =  Salvando um usuario em uma variavel e usando o .create (Ao rodar o programa ele vai salvar direto no banco de dados com o create)
        let newUser = await User.create({
            name: {firstName: 'Monaliza', lastName: 'Fernandes'},
            email: 'mona@algumacoisa.org',
            age: 500,
            interests: ['arte', 'pintura']
        })  
    
        CRIANDO O USUARIO INSTANCIANDO O MODEL, PREENCHENDO A VARIAVEL COM AS INFORMAÇÕES , E DEPOIS DE PREENCHIDO(Ele vai estar salvo na memoria do node ainda nao vai estar no banco de dados.)  CRIAR UMA VARIAVEL E DAR UM .save() PARA PODER SALVAR NO BANCO DE DADOS.
        - Usado para voce ja ter as informações , e querer fazer alguma manipulação de dados como a idade da pessoa, ou preencher algum array com um for. Antes de salvar no banco de dados.

        let newUser = new User();
        newUser.name = {firstName: 'Joaquim', lastName: 'Magal'};
        newUser.email = 'Joaquim@gmail.com';
        newUser.age = 61;
        newUser.interests = ['balela', 'bufunfa']
        let resultado = await newUser.save()

    */
