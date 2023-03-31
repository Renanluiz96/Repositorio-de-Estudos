import { createSlice } from "@reduxjs/toolkit";

//Como não ta usando o slice em lugar nenhum da minha aplicação não precisa usar export na função slice inteira , voce só exporta default o reducer aqui de dentro , que é o que vai ser usado.
const slice= createSlice({
    name: 'theme',
    initialState: {
        status: 'light'
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const {setThemeStatus} = slice.actions;
export default slice.reducer;