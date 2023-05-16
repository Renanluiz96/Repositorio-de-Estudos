// Arquivo de configuração do banco de dados POSTGREE. Tem que instalar 2 libs para funcionar esta biblioteca aqui para ter a conexão com o banco de dados corretamente. 
// npm install pg pg-hstore

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//  Criando a conexão com o banco de dados postgree usando o sequelize . Cria uma constante usando o sequelize e entre os parentes tem que passar 4 parametros , qual vai ser o nome do banco de dados, o usuario, a senha e por fim um objeto contendo o nome do banco de dados que seria o postgree aqui , e a porta que vai ser feita a conexão com ele.
// Todos os parametros vão ser pegos através das variaveis de ambiente.
export const sequelize  = new Sequelize(
    //  Tem que colocar um as string , pois a variavel de ambiente pode retornar ou string ou undefined , então voce tem que auxiliar declarando que vai ser uma string senão vai ocasionar erro.
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        dialect: 'postgres',
        port: parseInt(process.env.PG_PORT as string)
    }
)