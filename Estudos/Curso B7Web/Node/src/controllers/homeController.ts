// ARQUIVO CONTROLLER ONDE SE REFERE AS INFORMAÇÕES DA PAGINA HOME
import {Request, Response} from 'express'

//Importando o objeto que vai ter as funções deste model de produtos.
import { Product } from '../models/product';


//Agora é apenas configurar , igual configuro a rota la no servidor, mais voce vai salvar ela na variavel que voce crio acima. Tem que importa tambem o Request e Response para criar aqui tambem exatamente como estava la no servidor.


//  Função onde crio a rota , e so exporto ela para usar no servidor , evitando muito codigo la no arquivo do servidor, toda o conteudo da rota fica aqui separdamente.
export const home = (req: Request, res: Response) => {
    //res.send('Ola Mundo!')

    //Pegando a lista de produtos externa aqui no caso de uma variavel fake . e esta função onde pega todas as informações e salva nesta variavel  para usar aqui.
    let list   = Product.getAll();
    // Pegando os produtos pela função de filtrar criado la no model.
    let expensiveList = Product.getFromPriceAfter(12);

    //Fazer uma exibição condicional voce tem que fazer ela aqui e depois mostar o resultado la no mustache, o arquivo mustache não faz verificações de condicionais la então voce faz aqui e usa la. 
    let age: number = 90;
    let showOld: boolean = false ; //Faz uma variavel que comeca como false. Faz uma verificação aqui caso for satisfeita voce altera o valor desse boolean para true assim . mandando esta variavel la no render . para ser mostrado . E la ele verifica se tiver true a variavel ele vai mostrar o conteudo na tela se tiver false ele não mostra o conteudo.
    if (age > 50) {
        showOld = true;
    }


    //Para usar o arquivo mustache tem que uar o .render e dentro dela voce coloca somente o nome da pagina que voce quer renderizar na tela como uma string.
    res.render('pages/home', {
        //Segundo parametro do render é um objeto contendo as informações que voce quer enviar para usar na tela  , do primeiro parametro . Podendo ser variaveis que voce cria aqui mesmo como esta ali acima , ou criar variaveis aqui mesmo .
        name: 'Renan',
        lastName: 'Luiz',
        showOld,

        // Depois de ter pego a informação la do model ,agora pego a lista e mando para o view.
        products: list,
        expensives: expensiveList,
        frasesQualquer: [
            /*
            'Alguma frase boa',
            'Outra fase melhor ainda',
            'Esta frase é uma string ?'
            */
        ]
    })
}