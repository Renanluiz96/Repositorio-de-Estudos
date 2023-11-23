import app from './app'
import dotenv from 'dotenv'
dotenv.config();


// Arquivo onde vai importa o app onde vai ter a configuração do servidor , e aqui somente vai rodar o servidor.
app.listen(process.env.PORT);