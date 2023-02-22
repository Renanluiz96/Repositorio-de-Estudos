import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './lista-reducer/peopleList' //Importando o useReducer que esta na pasta especifica dele. para usar aqui


const App = () => {
    
    //Usando o hook chamado usePeopleList que é o useReducer que esta um um arquivo so para ele , e eu coloquei o nome para ser usado ele aqui de usePeopleList
    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState(''); 
    
    const handleAddButton = () => {
        //Ao ser apertado o botão de adicionar , ele vai fazer uma verificação. se a state nameInput tem algum valor.

        if(nameInput) {
            //Se tiver algum valor na state ele vai usar o dispatch e o dispatch vai ser do type ADD e o payload dele vai ter um name que vai ser a state que esta sendo digitada la no input.
            dispatch({
                type:'ADD',
                payload: {
                    name:  nameInput
                }
            }) 
        }
        setNameInput('') //Para ele deixa o nameInput em branco após ele adicionar na lista

        //Após adicionar , ele vai criar o id com o uuid e vai renderizar na tela onde esta o map , com o li agora vai ter um item para mostrar
    }

    //Função para trocar o valor do input, que tem o value como a state nameInput, então ela vai ter um setNameInput para setar o valor desta state pelo e.targe.value que vai pegar o valor que esta sendo digitado e vai salvar no valor da state. tem que ter o type change event input.
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value)
    }

    const deletePerson = (id:string) =>{
        dispatch({
            type: 'DEL',
            payload: { id }
        })
    }

    const handleOrderButton = () => {
        dispatch({
            type: 'ORDER'
        })
    }
    return (
        <div className="p-5">
            <input className='border-2' type="text" value={nameInput} onChange={handleInputChange}/> <br />
            <button className='border-3 mx-3' onClick={handleAddButton}>Adicionar</button> <br />
            Lista de Pessoas :
            <hr />
            <button onClick={handleOrderButton}>Ordenar</button>
           <ul>
                {/* Cria uma lista ul , que dentro dela vai ser criado um map, e dentro deste map vai ter um li que vai conter o item do map.name que seria o name la do useReducer  */}
                {list.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        <button onClick={()=> deletePerson(item.id)}> [ deletar ]</button>
                    </li>
                ))}
           </ul>
        </div>
    );
}

export default App;