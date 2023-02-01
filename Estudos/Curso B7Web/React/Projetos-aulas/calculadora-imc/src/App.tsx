import { useState} from 'react'
import styles from "./App.module.css"; //Usando o module.css no projeto . Toda vez que for usar uma class voce coloca styles. nome da class, para que crie o nome da class com um codigo junto, para não haver conflito de nomes de class iguais.

//Importando os arquivos de imagens e colocando nome neles para ser passados como props na tag
import poweredImage from './assets/powered.png'
// Importando a imagem da seta
import leftArrowImage from './assets/leftarrow.png'
import { GridItem } from './components/GridItem';

//Importando o arquivo com a logica de todo o imc
import { levels, calculateImc, Level } from './helpers/imc'


const App = () => {
  //Criando as states dos campos de input
  const [heightField , setHeightField] = useState<number>(0);//Criando o valor do input como 0 e setando o type dele como number
  const [weightField , setWeightField] = useState<number>(0);
  //State que vai armazemar o item que vai ser exibido na tela, ele comeca como null e depois recebe o type level depois de pegar o calculo ele vai pegar todo o item objeto do array
  const [toShow, setToShow] = useState<Level | null>(null)

  //Função para o click do botão para pegar o resultado dos input
  const handleCalculateButton = () => {
    //Faz uma verificação para ver se os campos de altura , e peso estão preenchidos. Caso ao contrario ira mostrar um alert, para preencher os campos.
    if(heightField && weightField) {
      //Quando fizer o calculo ele vai setar no setToShow.
      setToShow(calculateImc(heightField, weightField))
    } else {
      alert('Digite todos os campos.')
    }
  }

  //Função handleBackButton no click da seta depois do calculo pronto. 
  const handleBackButton = () => {
    //Limpa o toShow setando ele novamente para null , e zerando os campos de inputs
    setToShow(null);
    setHeightField(0)
    setWeightField(0)

  }

  return(
    <div className={styles.main}> 
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
           type="number"
           placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
           //o value faz uma verificação se o valor de value for maior que 0 então ele mostra o valor, se não ele deixa em branco mostrando o placeholder 
           value={heightField > 0 ? heightField : ''} 

           //Ao clicar no botão voce ira alterar o valor do input, mas o value por padrão é uma string, e como voce tipou a state para um number, então tem que usar a função parseFloat para transformar o valor da string em numero, se não fizer isto ira dar problema
           onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input 
          type="number" 
          placeholder='Digite seu peso. Ex: 73.3 (em kg)'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        

          {/*Criando o right side , vai ser um grid que ele vai pegar o array como os levels de de vai fazer um map , e ira mostrar na tela o componente grid , que vai ter a prop item que seria o proprio objeto , então cada item deste map , vai ser o objeto que contem as informações la do imc. E voce trabalha dentro do componente, e ele vai ser renderizado aqui . */}
        <div className={styles.rightSide}>
          {/* Quando não tiver o toShow ou seja ele não tem nenhum item calculado e dentro da state toShow, ele vai estar zerado. Quando estiver zerado , ele mostra o grid */}
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}  />
              ))}
            </div>
          }

          {/* Quando tiver algum toShow , ai vou exibir apenas um item só , ai exibe uma div grande do item que foi calculado.*/}
          {toShow &&
            <div className={styles.rightBig}>
              {/* Esse seta vai ter uma função handleBackButton ao click dele */}
              <div className={styles.rightArrow} onClick={handleBackButton}>

                {/* Esse right arrow vai ter que ser flutuante. no css dele tem que ter o position absolute */}
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} /> 
              {/* Vai mostrar o componente grid item que ja vai ter toda as propriedades , e na prop item voce passa qual vai ser o grid item mostrado na tela que seria o toShow(item ja calculado) */}
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default App;