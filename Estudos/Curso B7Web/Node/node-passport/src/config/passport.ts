import passport from "passport";
import { BasicStrategy } from 'passport-http'
import { User } from "../models/User";

// Import o passaport. Configura a Strategy , e depois exporta.

const notAuthorizedJson = { status: 401, message: 'Não Autorizado' };

// Strategy para usar o basic64 , que voce envia os dados no corpo da requisição.
passport.use(new BasicStrategy(async (email, password, done) => {
    // Faz uma verificação se o usuraio tem algum email e senha de fato enviado , voce pega o que o usuario envio , e faz uma consulta la no banco de dados .
    if(email && password) {
        const user = await User.findOne({
            where: { email, password }
        })
    }

    // Sempre ira retornar um done , aqui no caso ele não encontrar nada no if ele ja ira cair direto nesse done , que o primeiro parametro seria a mensagem de erro , e opcional voce pode mandar os dados do proprio usuario(objeto com os dados do usuario.) .
    //Aqui no caso como o usuraio erro a senha ele vai cair nesse done, que ai manda uma mensagem de erro , e o segundo parametro manda um false , pois não ira ter usuario nenhum.
    return done(notAuthorizedJson, false) 

}))

export default passport