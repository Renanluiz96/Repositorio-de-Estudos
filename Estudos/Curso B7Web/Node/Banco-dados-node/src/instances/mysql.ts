import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// Para poder ter acesso a variavel de ambiente que vai ter as informações dos banco de dados salva.
dotenv.config();

// Aqui vai ser a propria conexão que seria o uso do sequelize e dentro dele tera que passar entre parametros os dados do banco de dados. Exportar para uso , somente chamando o sequelize.
export const sequelize = new Sequelize(

    // Tem que dar um reforco para o typescript entender que os dados que voce vai mandar é uma string, se não ira ocasionar o erro se não colocar as string
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        // Aqui abre um objeto e coloca o dialect falando qual vai ser o banco de dados . e a port só que como vem em string , tem que dar um parseInt para transformar em um numero se não reclama de erro.
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }
);