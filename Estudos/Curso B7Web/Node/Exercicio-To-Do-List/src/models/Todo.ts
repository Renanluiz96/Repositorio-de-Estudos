import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg'

// Criar um type em forma de interface , para poder extender o model
export interface TodoInstance extends Model {
    id: number;
    title: string;
    done: boolean;
}

export const Todo = sequelize.define<TodoInstance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
   tableName: 'to_dos',
   timestamps: false 
})