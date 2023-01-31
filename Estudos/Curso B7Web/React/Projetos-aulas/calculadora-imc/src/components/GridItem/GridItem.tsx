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
            <div className={styles.main} style={{ backgroundColor: item.color }}>
                <div className={styles.gridIcon}>
                    <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30"/>
                </div>
                <div className={styles.gridTitle}>{item.title}</div>
                <div className={styles.gridInfo}>
                    <>
                        IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                    </>
                </div>
            </div>
        </div>
    );
}