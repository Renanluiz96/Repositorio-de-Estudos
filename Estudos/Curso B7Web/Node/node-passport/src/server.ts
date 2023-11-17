import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';

import passport from 'passport'; // Importa o passport no seu arquivo de servidor

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

// Antes de definir as rotas voce inicializa o passport, para ficar integrado com o servidor.
server.use(passport.initialize());

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    // Caso enviar aparecer um erro , ele manda o erro em si . Caso não ele manda um bad request
    if(err.status) {
        res.status(err.status);
    } else {
        res.status(400) // Bad request
    }

    // Mensagem do erro em si , caso contrario mensagem de erro padrão
    if(err.message) {
        res.json({ error: err.message})
    } else {
        res.json({ error: 'Ocorreu um erro '})
    }
    
}
server.use(errorHandler);

server.listen(process.env.PORT);