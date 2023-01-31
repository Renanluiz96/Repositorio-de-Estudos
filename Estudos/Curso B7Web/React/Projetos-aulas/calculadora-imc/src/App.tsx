import { useState} from 'react'
import styles from "./App.module.css"; //Usando o module.css no projeto . Toda vez que for usar uma class voce coloca styles. nome da class, para que crie o nome da class com um codigo junto, para não haver conflito de nomes de class iguais.

//Importando os arquivos de imagens e colocando nome neles para ser passados como props na tag
import poweredImage from './assets/powered.png'
import { GridItem } from './components/GridItem';

//Importando o arquivo com a logica de todo o imc
import { levels, calculateImc } from './helpers/imc'


const App = () => {
  //Criando as states dos campos de input
  const [heightField , setHeightField] = useState<number>(0);//Criando o valor do input como 0 e setando o type dele como number
  const [weightField , setWeightField] = useState<number>(0);

  //Função para o click do botão para pegar o resultado dos input
  const handleCalculateButton = () => {
    //Faz uma verificação para ver se os campos de altura , e peso estão preenchidos. Caso ao contrario ira mostrar um alert, para preencher os campos.
    if(heightField && weightField) {

    } else {
      alert('Digite todos os campos.')
    }
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
        
        <div className={styles.rightSide}>
          {/*Criando o right side , vai ser um grid que ele vai pegar o array como os levels de de */}
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;