import { sequelize } from '../instances/mysql' // Importando o arquivo de configuração do mysql
import { Model, DataTypes } from 'sequelize' //Importando os models e o dataType para o model


// Arquivo model onde ensinamos o sequelize como vai fazer para rodar a tabela e a como vai ser feito o processamento dos dados da nossa tabela .

//Criando um type especifico para cada usuario. Cada usuario na tabela tera que ter cada coisa que estiver aqui dentro
export interface UserInstance extends Model {
    id: number;
    nome: string;
    age: number;
}

//Aqui ensinamos o sequelize e damos detalhes de como ira ser a nossa tabela e as informações delas.
export const User = sequelize.define<UserInstance>("User",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
},{
    tableName: 'users',
    timestamps: false
});