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
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        //Metodo get = ele vai intervir em toda vez que for pegar algum dado do usuario , aqui por exemplo quero que todo usuario tenho o nome em maiusculo voce usa o get. e retorna ele mesmo(this), e com a função getDataValue voce passa entre parametro o nome da coluna por exemplo que voce quer alterar aqui nome, e depois voce coloca toUpperCase() , ai no caso todos os usuarios terão nome maiusculos.
        // get() {
        //     return this.getDataValue('nome').toUpperCase();
        // }
    },
    lastName: {
        type: DataTypes.STRING
    },
    fullName: {
        //Criando um campo virtual , ele não fica salvo no banco de dados. Usa o DataTypes tipo VIRTUAL. Fica salvo no sequelize para uso dos dados no seu sistema. Onde não precisa de um campo la no banco.
        // Aui por exemplo voce quer pegar o nome e sobrenome de algum usuario e como ja tem 2 campos contendo estas informação , voce não precisara criar um 3º campo repetindo os mesmos dados. Voce cria um campo virtual , e pega as informações desses 2 campos e cria um get e retorna os 2 campos juntos .
        type: DataTypes.VIRTUAL,
        get() {
            // Pegando os dados dos campos em especifico com getDAtaValue, e salvando em uma variavel para uso, voce tem quer tipar . 
            let name: string = this.getDataValue('nome');
            let lastName: string = this.getDataValue('lastName');
            return `${name} ${lastName}`
            // Esse metodo é muito usado em sistemas, onde voce quer informações de 2 campos , mas não nessecariamente voce precisa criar um 3 , voce cria um virtual para auxiliar.
        }
    },

    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        // Metodo Set = Ele vai intervir no meio igual o get, só que aqui ele vai setar um valor. Voce passar uma variavel e coloca uma tipagem nela. e dentro voce faz alguma verificação , e se caso depender do valor que foi inserido o dado , ele vai alterar . Isso bem usado para que se o usuario cadastrar um numero menor, o set automaticamente verifica , e seta o valor correto. Ou fazer um hash para senhas, ele vai pegar a senha fazer um metodo de hash , e salvar essa senha com hash criptografado...
        set(value: number) {
            // Faz uma verificação para ver se o value for maior que 18. se não for, ele vai setaro value para 18 
            if(value < 18) {
                value = 18;
            }
            // Usa o this.setDataValue() para setar o valor , primeiro parametro voce passa o campo que quer alterar, e o segundo valor voce passa o valor a ser alterado , no caso aqui voce passa o value que ja foi verificado e editado então voce somente seta ele .
            this.setDataValue('age', value)
        }

    }
},{
    tableName: 'users',
    timestamps: false
});