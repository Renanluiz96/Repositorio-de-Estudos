import { ChangeEvent, useEffect, useState } from "react";

const App = () => {

    //States
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [fullName, setfullName] = useState('')



    //useEffect
    useEffect(()=> {//Função que foi disparada dentro do useEffect é basicamente ele setar o nome e sobrenome na state fullname
        setfullName(`${name} ${lastName}`)
    }
    , [name, lastName] //Segundo parametro, ele ta observando alterações nessas 2 variaveis , que vão sofrer alterações dos states , a cada digito do input .
    ) 


    //Função auxiliar - Função dos inputs que a cada valor digitado ele vai alterando o valor das states setName e setLastName.
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setlastName(e.target.value)
    }


    return (
        <div className="flex flex-col">
            <input type="text" placeholder="Digite seu NOME" onChange={handleNameChange} />
            <input type="text" placeholder="Digite seu SOBRENOME" onChange={handleLastNameChange}/>
            <p>Nome Completo : {fullName}</p>
        </div>
    )
}

export default App;

//Dois parametros , primeiro uma função. Segundo é um array que chama-se de observer , ou os itens a a serem observados.
//Voce quer monitorar uma state ou uma variavel , voce coloca ela dentro do array para ser monitorado a cada alteração dela , ela vai executar a função que esta no primeiro parametro.

//o useEffect sempre é executado uma vez.
//A cada alteração nos observers dos arrays seja ele na state . a cada vez que for alterada a função do useEffect é ativada .