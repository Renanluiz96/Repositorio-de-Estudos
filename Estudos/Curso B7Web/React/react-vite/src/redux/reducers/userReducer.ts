// Importa o createSlice do toolkit para poder criar um reducer.
import { createSlice } from "@reduxjs/toolkit";


//Criando um reducer usando a função creatSlice e dentro dela usando um objeto .
export const slice = createSlice({
    // Dentro da função createSlice ele espera que voce mande um name: nome do reducer. Estado inicial - que seria o initialState que é o estado inicial que vai comecar o reducer , normalmente comeca vazio se tiver string , e depois vai incrementando ou alterando. E por fim os reducers - que seria os proprios reducers , as funções das actions .
    // Não precisa tipar nada pois ele ja tem essa estrutura e ele ja sabe o que é cada coisa aqui dentro.

    name: 'user',

    // Dados iniciais
    initialState: {
        name: 'Renan',
        age: 26
    },

    // Reducers
    reducers: {

        //Ao criar uma função , no parametro , no primeiro parametro ele entende que o state é o conteudo do initialState , e o sergundo parametro é a action que vai manipular o state do primeiro parametro.
        setName: (state, action) => {

            //Aqui ele vai pegar o name do initialState utilizando o state.name que ele ja sabe que o state se trata dos dados . e vai setar no nome , a action.payload , que seria um nome novo. Aqui ta só criando a estrutura , quando for usar que ai ele vai entender o que quer fazer do jeito que usa esta função.
            state.name = action.payload;
        },

        //Aqui a mesma coisa vai pegar o age , e vai setar no age a action.payload que voce vai enviar ao usar esta função.
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
});

//Exporta para usar no store as ações do reducer, voce pode exporta 1 ou todas.
export const {setName, setAge} = slice.actions;


//E exporta por defalut o slice.reducer por padrão ao importa o userReducer em outros lugares , ele ja vai importa direto o reducer.
export default slice.reducer;