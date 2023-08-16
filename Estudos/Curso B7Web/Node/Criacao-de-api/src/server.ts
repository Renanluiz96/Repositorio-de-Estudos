// Criando o servidor
import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { error } from 'console';

// Inciando a configuração para usar variaveis de ambiente
dotenv.config();

// iniciando o servidor express
const server = express();

// Criando o caminho para usar a pasta public
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

// Criar um endpoint para caso não achar a pagina ele redireciona para a pagina 404 que "retornara" um json(que é padrão todas as api elas retornam sempre um json) .
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endepoint não encontrado.'})
})

// Criar um listen para ficar observando a porta da variavel de ambiente
server.listen(process.env.PORT)