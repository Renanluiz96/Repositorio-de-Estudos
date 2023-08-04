import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async (req: Request, res: Response)=>{
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

    let usuarios = await User.find({
        age : { $gt: 18, $lt: 66 } 
    })
    
    

    console.log("USUARIOS", usuarios)


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