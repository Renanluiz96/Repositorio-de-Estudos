// Arquivo onde vai conter um objeto com os dados de conexão , ira ser um let pois poderea ser alterado o valor conforme o banco de dados usados, se for o padrão ele ja ira conter as informações padrões.
//Se caso for o de teste ele ira trocar as informações
import dotenv from 'dotenv';
dotenv.config();

//Banco de dados padrão setados com as variaveis de ambiente padrão
let db = {
    db: process.env.PG_DB as string,
    user: process.env.PG_USER as string,
    password: process.env.PG_PASSWORD as string,
    port: process.env.PG_PORT as string
}

// Se o NODE_ENV for setado como test . ira alterar todos os campos para o teste.
if(process.env.NODE_ENV === 'test') {
    db = {
    db: process.env.PG_TEST_DB as string,
    user: process.env.PG_TEST_USER as string,
    password: process.env.PG_TEST_PASSWORD as string,
    port: process.env.PG_TEST_PORT as string
    }
}

export default db; // Exportando como default para uso la no sequelize apenas altera os valores que la estão inseridos como as variaveis de ambiente para os dados do db aqui inseridos