// Criando o servidor
import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api'

// Inciando a configuração para usar variaveis de ambiente
dotenv.config();

// iniciando o servidor express
const server = express();

// Criando o caminho para usar a pasta public
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

// Criando o caminho para usar as minhas rotas.
// server.use('/api',apiRoutes)  Para poder que todas as suas rotas tenham um prefixo voce pode colocar este prefixo antes ai todas as suas rotas irão ser acessado atraves desse prefico na url aqui teria que digitar /api/alguma rota
server.use(apiRoutes)

// Criar um endpoint para caso não achar a pagina ele redireciona para a pagina 404 que "retornara" um json(que é padrão todas as api elas retornam sempre um json) .
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endepoint não encontrado.'})
})

// Criar um listen para ficar observando a porta da variavel de ambiente
server.listen(process.env.PORT)