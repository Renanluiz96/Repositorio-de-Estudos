import React, { createContext } from "react";

type ContextType = {
    name: string;
    age: number
}

const initialState = {
    name: 'Renan',
    age: 26
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider = ({ children }: React.PropsWithChildren
    ) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}