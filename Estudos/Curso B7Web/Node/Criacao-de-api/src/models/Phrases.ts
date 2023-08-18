import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg'

// Criar um type em forma de interface , para poder extender o model
export interface PhraseInterface extends Model {
    id: number;
    author: string;
    texto: string;
}

// Criando o model
export const Phrase  = sequelize.define<PhraseInterface>('Phrase',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    texto: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'phrases',
    timestamps: false
})