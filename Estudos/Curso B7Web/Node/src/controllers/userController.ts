// ARQUIVO CONTROLLER ESPECIFICO PARA O USUARIO. 
import { Response,Request } from "express";

export const nome = (req: Request, res: Response) => {
    // Depois de ter enviado o formulario para a url para pegar o resultado desta informação voce pega com o "req" aqui do primeiro parametro.
    // Para pegar os dados da query strings da url como ele vai enviar os dados em um objeto , voce pega os dados do objeto ou seja o valor do objeto . Como vai retornar um objeto com {nome: nomedoobjeto} Ex = req.query.nome . Voce pega pela nome , e pode salvar em uma variavel para poder usar no render como segundo parametro. Mas quabdo for pegar o objeto , voce tem que dizer para o typescript o que vai vir do objeto query , normalmente uma string , pois toda a requisição quando é enviada é enviada via string ,mais voce tem que dizer para o typescript como vem passando o "as" e o que é como abaixo ali estou especificando no final
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;
    
    // console.log("query strings" , req.query)
    res.render('pages/nome', {
        nome,
        idade
    })

}

export const idadeForm = (req: Request, res: Response) => {
    /*
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    //Se o usuario preencheu os dados no formulario e envio para o get  na url. Ele vau pegar esse dado e vai fazer a logica e no final ira alterar as variaveis acima pra mostrar na tela logo abaixo no render.
    if(req.query.ano) {
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();
        // Depois de pegar a data de nascimento do query da url digitada no formulario, e pegado o ano atual pela getfullyear do Date. Preencho a variavel idade que comeca como 0 com o ano atual menos o ano de nascimento para pegar a idade da pessoa. E seto a variavel mostrarIdade como true .  
        idade = anoAtual - anoNascimento;
        mostrarIdade = true
    }

    */
    res.render('pages/idade')
}

export const idadeAction = (req: Request, res: Response)=> {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    //Só que agor eu troco o query que seria do metodo Get , para o corpo da requisição que seria  o body do methodo Post. Fazendo assim os dados não ira mais para a url , e sim serão enviado internamente.
    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
}