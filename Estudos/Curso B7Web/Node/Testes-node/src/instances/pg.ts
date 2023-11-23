import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';
import db from './database';

dotenv.config();

// Importando o objeto db la do database e alterando os valores aqui no sequelize para uso do banco de dados de teste, caso for necessario.
export const sequelize = new Sequelize(
    db.db,
    db.user,
    db.password,
    {
        dialect: 'postgres',
        port: parseInt(db.port)
    }
);