import passport from "passport";
import dotenv from 'dotenv'; 
import {ExtractJwt, Strategy as JWTStrategy} from 'passport-jwt'
import { User } from "../models/User";

dotenv.config();

// Arquivo para uso do passaport com o jwt uso de 2 libs junto com a lib do passport voce instala a strategy do jwt para o passport - npm install passport-jwt jsonwebtoken . E os types dela - npm install -D @types/passport-jwt @types/jsonwebtoken

const notAuthorizedJson = { status: 401, message: 'Não Autorizado' };

const options = { //Configurações da strategy
    // Aqui nas configurações colocamos 2 dados OBRIGATORIOS .
    // 1° = Onde vamos procurar o jwt , padrão que voce mande ele no header authorization com um Bearer
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Ele vai procurar o Beare no header

    // 2° = Tem que dizer a fonte onde ele vai procurar e o secret.
    secreOrKey: process.env.JWT_SECRET as string
} 

// Configurando nossa strategy.
// Para usar o jwt strategy tem 2 parametros , primeiro qual vai ser as configurações do strategy , 2° -uma função onde vai fazer uma verificação do jwt , ira ter um payload (os dados que estão dentro do jwt) , e a função done onde vai dizer se deu certo ou não para pode seguir em frente ou barrar o usuario

passport.use(new JWTStrategy(options,async (payload, done) => {
    const user = await User.findByPk(payload.id); //quando receber um jwt o payload vai ser um objeto com o que tiver dentro do token , e no token voce vai manter o id do usuario que esta logado. Ai pegamos esse id que vai ser mantido do token , e confere ve se é o mesmo id do banco de dados salvo.

    if(user) {
        return done(null, user); //Se caso der certo e procurar um usuario e o usuario 
    } else {
        return done(notAuthorizedJson, false);// Quando negar a entrada ele vai mandar uma mensagem de erro e vai retornar um false - negando o acesso do usuario.
    }

}));

export default passport;