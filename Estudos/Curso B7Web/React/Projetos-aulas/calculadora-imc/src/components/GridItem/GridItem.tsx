//Importando o type Level para poder usar dentro do type deste componente
import { Level } from "../../helpers/imc";

//Importando o css da pagina , mais as imangens da mão para cima e para baixo
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


//Usando a props item, que vai receber todo o type que tem la no imc , com as informações. 
type Props = {
    item: Level;
}


//Exportando o componente grid, =com o type Level la do imc exportado la em cima
export const GridItem = ({item}: Props) => {
    return (
        <div>
            {/*Criando a estrutura do grid */}
            <div className={styles.main} style={{ backgroundColor: item.color }}> {/*Vai ter um style de um background, de acordo com a cor do item do objeto da vez ,  primeiro item uma cor , o segundo item do loop outra cor, assim vai colocando o background da acordo com a cor item do objeto */}
                <div className={styles.gridIcon}>
                    <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30"/> {/*Coloca a imagem , fazendo uma condicional , se o valor do atributo icon do objeto , for up ele coloca uma imagem , caso for outra  coloca a outra imagem.  */}
                </div>
                <div className={styles.gridTitle}>{item.title}</div> {/*Preenchendo o titulo de acordo com o title do objeto */}

                {/* Faz uma verificação se tiver algum item  preenchido no toShow, ao mostrar a div grande na tela com o imc do usuario, vai ser criado uma nova div no meio mostrando qua foi o imc do usuario */}
                {item.yourImc &&
                    <div className={styles.yourImc}>Seu IMC é de {item.yourImc} KG/M²</div>
                }

                <div className={styles.gridInfo}>
                    <>{/*Faz um fragment para poder usar o strong e dentro dele coloca o valor do imc que é um array  que tem os 2 valores , então coloca de acordo que vai do valor do primeiro item do array, até o segundo item do array imc que esta dentro do objeto. */}
                        IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                    </>
                </div>
            </div>
        </div>
    );
}