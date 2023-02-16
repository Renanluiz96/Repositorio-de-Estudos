//Criando um componente para tudo que for relacionado a area de formulario
import { useState, ChangeEvent} from 'react'

//Recebendo a props onAdd que vai execultar a função la na pagina principal , aqui voce vai receber a props e passar ela como parametro do componente e tipar ela que ela vai ser uma props , e aqui voce coloca o type "Props" que dentro deste type voce especifica o que ela é vai ser uma função que vai ter um title e um body do tipo string, e o retorno dela vai ser void.
type Props = {
    onAdd:  (title: string, body: string) => void
}

export const PostForm = ({ onAdd }: Props) => {
    //States dos inputs do fieldset
    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('')

    //Função para alterar o conteudo dos inputs, ao ser digitado ira setar  o novo valor da state , para o valor digitado no proprio input usando o target.value no porprio input .
    const handleAddTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }
    const handleAddBodyChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }

    //Quando o usuario clicar no botão do envio do formulario
    const handleAddClick = () => {
        //Faz uma validação  dentro do componente , pois é aqui que ele fica responsavel por isso, se os dados dos inputs estão preenchidos, então pode continuar, caso não tenha , manda um alerta com uma mensagem
        if(addTitleText && addBodyText) {
            //Manda pela função da prop onAdd voce manda o valor dos inputs digitados como parametros. Manda a state que é o value , do campo input
            onAdd(addTitleText, addBodyText)

        } else {
            alert('Preencha os campos!')
        }
    }
    
    {/* Fazendo um fieldset onde o usuario pode digitar os dados no campo e sera criado um post novo .*/}
    return (
        <fieldset className="border-2 mb-3 p-3">
            <legend>Adicionar novo post</legend>

            <input
            value={addTitleText} //Valor do input vai ser salvo na state
            onChange={handleAddTitleChange} //Executa esta função ao digitar qualquer coisa no input ira ser setado e armazenado na state .
            type="text"
            placeholder="Digite um titulo" 
            className="block border"
            />

            {/* Conteudo do text area ira ser salvo na state addBodyText */}
            <textarea
            className="block border"
            value={addBodyText}
            onChange={handleAddBodyChange}></textarea>

            <button className="block border" onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
};