import React, { useState } from 'react'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {

    //States
    const [name, setName] = useState('---');
    const [lastName, setLastName] = useState('');
    const [age, setAge]= useState(10);
    
    //Funções
    const nameChange = (event: InputChangeEvent) => {
        setName(event.target.value)
    }

    const lastNameChange = (event: InputChangeEvent) => {
        setLastName(event.target.value)
    }

    const ageChange = (event: InputChangeEvent) => {
        setAge(parseInt(event.target.value) )

    }

    return (
        <div>
            <div>
                Nome:
                <input type="text" value={name} onChange={nameChange} />
            </div>
            
            <div>
                Sobrenome:
                <input type="text" value={lastName} onChange={lastNameChange} />
            </div>
            
            <div>
                Idade
                <input type="text" value={age} onChange={ageChange} />
            </div>
            
            <hr />

            Ola {`${name} ${lastName}`}, tudo bem? <br />
            Voce tem {age} anos.
             
        </div>
    );
}

export default App