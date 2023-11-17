// Para criar o middleware para uso na rota privada ,voce precisa exporta do express 3 coisas Request, Response, e NextFunction
import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User';
import JWT from 'jsonwebtoken'
import  dotenv from 'dotenv'

dotenv.config();

// Criando a função do middleware e exportando para uso nas rotas
export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        // Cria uma variavel que seria um boolean e de acordo com o procedimento para verificar se o usuario pode ou não acessar essa rota fica nessa variavel, se ele tiver true a rota e liberada , se tiver false a rota fica bloqueada
        let sucess  = false; 

        /* Fazer verificação de auth com Basic64
        // Para fazer a verificação da autorização do BasicAuth , voce manda o hash criado no site via headers , verifica se tem um headers.authorization.
        if( req.headers.authorization) { 
                //Como tem no headers voce coloca o Basic e depois o hash, voce usa a função substring do javascript para poder pegar o que tiver a partir do 6 caracteres e salvar como string pois com isso ele vai ignorar o Basic e mandar somente o o hash.
                let hash: string = req.headers.authorization.substring(6); // Pegando somente o hash que vai estar a paratir do 6 caractere
                
                // Para converter o hash do base64 em uma string usa o buffer do javascript. passa a variavel e diz que é um base64 , depois converte para string
                let decoded: string = Buffer.from(hash, 'base64').toString()
                
                // Depois de converter em string , ela vai vir o email e a senha juntos separando por dois pontos, voce cria um array e da um split separando na variavel convertida do hash , da um split no dois pontos , que ai ele salva o email na posição 0 do array e a senha no 1.
                let data: string[] = decoded.split(':');

                // Faz uma verificação se o usuario mando realmente os 2 registros verificando se a variavel que tem o array igual a 2 é porque vai ter o email e senha , sendo assim voce da continuidade, se não tiver é porque o usuario não mando os 2 , ou um hack esta tentando burlar.
                if (data.length === 2) {
                    // Depois de ter verificado , voce importa o model do banco de dados , para verificar se existe algum usuario do banco de dados que vai ter os mesmos dados email e senha igual o que o usuario envio aqui. Para isso tem que transformar esta função em assincrona.
                    let hasUser = await User.findOne({ //Deu um findOne e procuro algum email e password ele vai preencher esta variavel
                        where: {
                            email: data[0],
                            password: data[1]
                        }
                    });
                    if(hasUser) { //Se essa variavel tiver preenchida ,  é porque tem algum usuario do banco de dados que os dados bateu igual ao qual o usuario digito, e foi achado no banco de dados .  Então se tiver algo nesta variavel e ela tiver preenchida então  libera o acesso alterando o valor da variavel para true.
                        sucess = true;
                    }
                }
        }*/


        //Fazendo autenticação com o JWT
        if (req.headers.authorization) {

            // Pega os 2 variaveis do authorization separado por espaco usando o split. Primeira contendo o tipo de autenticação , e a segunda sendo o token em si
            const [authType, token] = req.headers.authorization.split(' ');


            // Ja faz um if vendo se o que o usuario mando for um Bearer , se caso nem for passa direto e nega o acesso. Caso seja o type Bearer . 
            if(authType === 'Bearer') {
                // Ele cai em um try catch para tentar fazer a conexão sem mandar o erro.
                try {
                    // Usa uma biblioteca jsonwebtoken para fazer a verificação . Passa como parametro o token pego la do authorization enviado do header. e a chave secreta que esta la no dotenv, não esquece de importar as variaveis de ambiente.
                    JWT.verify( 
                        token,
                        process.env.JWT_SECRET_KEY as string // Tem que usar o as string , pois na verificação estara esperando uma string
                    );

                    sucess = true; //No final altera para true , para poder passar no proximo if e liberar o acesso
                } catch (error){}
            }
        }
        // Faz um if de verificação se a variavel tiver true ele da roda a função next e é liberada para o usuario seguir na rota.
        if (sucess) {
            next()
        } else { //Se caso não der certo ele ira alterar o status para 403 e mandar uma mensagem de não autorizado
            res.status(403); // Não autorizado
            res.json({ error: 'Não autorizado' })
        }
    }
}

// Quando voce usa o BasicAuth seja um uma api ou site normal, voce tem que mandar o email e senha no cabeçalho(headers) da requisição  e para isso voce pode criar um hash.
// Usa-se um site https://www.base64encode.org/ , onde voce pode colocar seu email e senha que ele cria um hash aleatorio de acordo com as informações que voce crio.
// E assim com esse hash voce usar no header da requisição par usar na api no postman voce vai na aba headers , vai no key coloca la Authorization, e no campo key voce usa Basic da um espaço e coloca o hash criado no site. Exemplo = Basic ZW1haWx0ZXN0ZUBnbWFpbC5jb206MTIz