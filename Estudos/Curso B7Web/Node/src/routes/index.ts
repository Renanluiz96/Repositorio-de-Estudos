//Arquivo onde ficar contido todas as rotas relacionados ao site. Se o site for muito grande podera ter cada arquivo organizado para cada grupo de rotas especifico para cada area do site.

import { Request, Response, Router } from "express";

//Com o Router do express consegue se criar rotas em um arquivo separado e pré-configurado para usar la no servidor apenas importando as rotas criadas aqui , para que fique no servidor somente o uso , e não fique o arquivo do servidor cheio de rotas e bagunçado.

//Cria uma variavel para usar a função router. e depois configura todo as rotas que voce quiser e salva nesta variavel , para uso la no servidor.
const router = Router();

//Agora é apenas configurar , igual configuro a rota la no servidor, mais voce vai salvar ela na variavel que voce crio acima. Tem que importa tambem o Request e Response para criar aqui tambem exatamente como estava la no servidor.

router.get('/', (req: Request, res: Response) => {
    //res.send('Ola Mundo!')

    //Fazer uma exibição condicional voce tem que fazer ela aqui e depois mostar o resultado la no mustache, o arquivo mustache não faz verificações de condicionais la então voce faz aqui e usa la. 
    let age: number = 90;
    let showOld: boolean = false ; //Faz uma variavel que comeca como false. Faz uma verificação aqui caso for satisfeita voce altera o valor desse boolean para true assim . mandando esta variavel la no render . para ser mostrado . E la ele verifica se tiver true a variavel ele vai mostrar o conteudo na tela se tiver false ele não mostra o conteudo.
    if (age > 50) {
        showOld = true;
    }


    //Para usar o arquivo mustache tem que uar o .render e dentro dela voce coloca somente o nome da pagina que voce quer renderizar na tela como uma string.
    res.render('home', {
        //Segundo parametro do render é um objeto contendo as informações que voce quer enviar para usar na tela  , do primeiro parametro . Podendo ser variaveis que voce cria aqui mesmo como esta ali acima , ou criar variaveis aqui mesmo .
        name: 'Renan',
        lastName: 'Luiz',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 20}
        ],
        frasesQualquer: [
            /*
            'Alguma frase boa',
            'Outra fase melhor ainda',
            'Esta frase é uma string ?'
            */
        ]
    })
})

router.get('/contato', (req: Request, res: Response) => {

    res.send('Formulario de contato')
})

router.get('/sobre', (req: Request, res: Response) => {

    res.send('Pagina institucional sobre a empresa')
})

//Depois de criar a variavel , e configurar ela toda , voce exporta ela como default, exportando ela assim , na hora de importa la no servidor para uso , "voce pode chamar ela do que quiser" dependendo do contexto , para ficar mais facil o entendimento
export default router;