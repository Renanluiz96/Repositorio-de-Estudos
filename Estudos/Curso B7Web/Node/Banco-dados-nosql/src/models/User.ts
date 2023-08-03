// Para criar um model precisa-se criar 3 coisas que sejam compativel com o mongoose : 
// 1° - Type do model onde terei que tipar toda a estrutura.
// 2° - Schema : Que seria um type mais especifico para o mongoDB
// 3° - Criar um model

import { Schema, model, connection, Model } from 'mongoose';

type UserType = {
    email: string,
    age: number,
    interests: [string],
    name: {
        firstName: string,
        lastName: string
    }
}

// Criando o schema = Vai criar um type parecido com o type da estrutura, mais detalhando um pouco mais que é diretamento pro mongoose.
// Se voce ao criar no banco de dados um dado a mais , ele não aceita exemplo coloca um cpf , ele não aceita pois não tem no schema aqui. Mais se for um dado a menos , no caso não colocar o age, ele aceita sim.
const schema = new Schema<UserType>({
    // Aqui os type serão com a primeira letra maiuscula , pois não é o type do typescript. Sim a do construtor do javascript.

    // Colocar um campo como obrigatorio , tem que ser como um objeto e colocar o type, e o required como true.
    email: {type: String, required: true},
    age: {type: Number, required: true},
    interests: [String],
    name: {
        firstName: {type: String, required: true},
        lastName: String

    }
})

// Criando um model
const modelName: string = 'User';

// Fazendo a exportação do model , mais fazendo uma verificação se ele ja existe, caso ele existir exporta ele, caso ele não exista cria ele.
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType> // Aqui vai exporta caso ele ja tiver
:
    model<UserType>(modelName, schema); // Se não tiver ele vai criar o model usando o type e schema como esta acima.
