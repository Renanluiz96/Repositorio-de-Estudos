//Criar a pasta store e fazer as configurações do meu store

//Importa o configureStore dentro do toolkit.
import { configureStore} from '@reduxjs/toolkit'
import themeReducer from './reducers/themeReducer';

//Importa o reducer do userReducer para guardar no store
import userReducer from './reducers/userReducer'


//Cria e exporta um store, que dentro dele vai ter a função configureStore que vai ter um objeto, e dentro vai ter um reducer, que vai conter todos os reducer que voce quer ter em sua aplicação . E depois exporta para voce usar ele la no main.tsx para que o provider que vai ter acesso a toda sua aplicação possa pegar os dados desta store.
export const store = configureStore({
    reducer: {
        //Dentro aqui voce coloca um  nome do reducer e importa o reducer aqui e coloca ele junto aqui. Ex : nomedoreducer: reducer
        user: userReducer,
        theme: themeReducer
    }
});


//Export este é um type geral onde nele vai conter todas as informação. dos reducer tudo que vir e for parar dentro da store por isso que coloca o store.getState , ele vai pegar todos os dados de todos os reducers e salvar aqui no RootState. A documentação "Sugere" que voce coloce  o nome desse Typezão de de RootState.
export type RootState = ReturnType<typeof store.getState>;