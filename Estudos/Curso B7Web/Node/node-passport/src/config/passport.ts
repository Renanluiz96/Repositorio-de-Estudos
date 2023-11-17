import passport from "passport";
import { BasicStrategy } from 'passport-http'
import { User, UserInstance } from "../models/User";
import { Request, Response, NextFunction } from "express";

// Import o passaport. Configura a Strategy , e depois exporta.

const notAuthorizedJson = { status: 401, message: 'Não Autorizado' };

// Strategy para usar o basic64 , que voce envia os dados no corpo da requisição.
passport.use(new BasicStrategy(async (email, password, done) => {
    // Faz uma verificação se o usuraio tem algum email e senha de fato enviado , voce pega o que o usuario envio , e faz uma consulta la no banco de dados .
    if(email && password) {
        const user = await User.findOne({
            where: { email, password }
        })
        // Se caso der tudo certo e tiver um usuario que bateu com os mesmos dados do banco de dados. voce usa um done enviando o proprio usuario.
        if(user) {
            return done(null, user) // Usa null pois nao vai ter mensagem de erro. e manda o usuario que deu tudo certo.
        }
    }

    // Sempre ira retornar um done , aqui no caso ele não encontrar nada no if ele ja ira cair direto nesse done , que o primeiro parametro seria a mensagem de erro , e opcional voce pode mandar os dados do proprio usuario(objeto com os dados do usuario.) .
    //Aqui no caso como o usuraio erro a senha ele vai cair nesse done, que ai manda uma mensagem de erro , e o segundo parametro manda um false , pois não ira ter usuario nenhum.
    return done(notAuthorizedJson, false) 
}));

// Criando um middleware , ele vai ter o req, res , next . Usando o passport . Para criar um midlleware de rota privada.
export const privateRoute = (req: Request, res: Response, next: NextFunction) => {

    // Depois que configuro a strategy para o passport , voce pode usar aqui usando o authenticate, passando por parametro o tipo dele como basic. Des de que tenha sido configurado acima.
    // Voce cria esta função de callback , onde se tiver o usuario ele passa e  executa a rota normalmente , caso não tiver o usuario ele ja manda uma mensagem do erro.
    const authFunction = passport.authenticate('basic', (err: Error, user: UserInstance) => {
        if(user) {
            next();
        }else{
            next(notAuthorizedJson);
        }
        // Ou return user ? next() : next(notAuthorizedJson)
    })
    authFunction(req,res, next); // Depois de criada , agora voce a usa enviando o req, res e next.
}

export default passport;