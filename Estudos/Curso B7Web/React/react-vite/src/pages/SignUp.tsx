import { Link } from 'react-router-dom';

//Usar os dados do contexto voce importa eles onde voce quer usar, voce importa o contexto apenas, o provider não precisan pois ele voce só importa ele uma vez. Mas quando voce quer usar um componentes ou paginas especificas dentro de onde estiver o provider englobando ou seja esta page ja esta dentro do provider ou seja do componente provider.

//Usa o contexto importando ele da pagina Context
import { Context } from '../contexts/ContextReducer';

//Para usar em qualquer parte do componente ou pagina, voce usa um hook chamado useContext sempre que quer usar ele . Para usar o hook voce precisa importa-lo
import { useContext } from 'react';

export const SignUp = () => {

    // Estou usando o hook useContext e dentro dele coloquei o context que tambem importei la do arquivo Context.
    //Fiz uma desestruturação do objeto e ja chamei elas pela variavel que ja são mesmos.
    //Agora posso ter acesso as informações la do contexto e usa-las aqui. Apenas chamando pela variavel que esta quebrada dentro do objeto.
    const { state, dispatch} = useContext(Context)

   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: { name: e.target.value }
        })
   }

   const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
        type: 'CHANGE_AGE',
        payload: { age: parseInt(e.target.value) }
    })
   }

    return (
        <div>
            
            <h3>Tela de Sign up</h3>

            <input
                type="text"
                placeholder='Digite seu nome'
                value={state.user.name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder='Digite sua idade'
                value={state.user.age}
                onChange={handleAgeChange}
            />

            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}