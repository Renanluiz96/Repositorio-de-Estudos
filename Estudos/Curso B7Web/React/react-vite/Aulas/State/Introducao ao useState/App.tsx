//Para usar o useState, tem que importa-lo do react para uso
import { useState } from 'react'

//Voce usa o useState para alterar algo dentro de um componente, no exemplo aqui , ao clicar no botão ele vai executar uma função que vai alterar um valor de uma string que esta dentro de uma variavel, por outro valor

const App = () => {

  //Para usar o useState = voce cria um array , com 2 parametros
    //1º - o nome da variavel que vai ser alterada
    //2º -  o nome da função que vai ser executada.
  //Depois coloca um = useState() e dentro deste parenteses voce coloca "o valor inicial desta variavel" . Ou seja vai ser criado uma variavel name que o valor dela inicial vai ser uma string 'renan'

  const [name, setName] = useState('renan')

  //Função executada no evento de click
  const hundleButtonClick = () => {

    //E ao ser executada o evento de click no botão ele vai acionar a função que estava no segundo parametro de array, que o que ela vai fazer , ela vai "alterar" o valor da variavel nome , pelo valor que voce passar dentro do parametro aqui.

    setName('outro') // Alterar o valor va variavel para 'outro' ao click do botão
  }

    return (
      <div>


        Meu nome é {name}
        {/* Criando eventos no react Coloca um evento na tag . por uma prop e a função dentro da prop é que vai ser executada ao evento de clique no botão. OBS : quando voce passar a função , passar a função como uma variavel apenas, sem parenteses.*/}
        <button onClick={hundleButtonClick}> Clique aqui</button>
  
      </div>
    );
  }
  
  
  export default App;