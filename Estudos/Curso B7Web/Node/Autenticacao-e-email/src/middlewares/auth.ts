// Para criar o middleware para uso na rota privada ,voce precisa exporta do express 3 coisas Request, Response, e NextFunction
import { Request, Response, NextFunction } from 'express'

// Criando a função do middleware e exportando para uso nas rotas
export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        // Cria uma variavel que seria um boolean e de acordo com o procedimento para verificar se o usuario pode ou não acessar essa rota fica nessa variavel, se ele tiver true a rota e liberada , se tiver false a rota fica bloqueada
        let sucess  = true; 

        // Fazer verificação de auth

        // Faz um if de verificação se a variavel tiver true ele da roda a função next e é liberada para o usuario seguir na rota.
        if (sucess) {
            next()
        } else { //Se caso não der certo ele ira alterar o status para 403 e mandar uma mensagem de não autorizado
            res.status(403); // Não autorizado
            res.json({ error: 'Não autorizado' })
        }
    }
}