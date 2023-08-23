import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

// Configurando a instancia do sequelize para usar no model.
export const sequelize = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    { // Coloca um objeto para especificar mais colocar qual vai ser o nome do banco de dados, e a port como é uma string , tranforma para inteiro .
        dialect: 'postgres',
        port: parseInt(process.env.PG_PORT as string)
    }
)