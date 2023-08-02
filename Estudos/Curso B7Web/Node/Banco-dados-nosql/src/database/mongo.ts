import { connect, ConnectOptions } from 'mongoose'; //Importa o connect para fazer a conexao ao banco de dados
import dotenv from 'dotenv';

dotenv.config();


// Fazendo conexão ao banco
export const mongoConnect = async () => {
    try {
        console.log("Conectando ao MongoDB...")

        await connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }as ConnectOptions);

        console.log("MongoDB conectado com sucesso!")

    } catch (error) {
        console.log("Erro de conexão com MongoDB: ", error)
    }
}