//Importando o link do react-router. para poder fazer um link de uma pagina pa outra sem fazer o recarregamento completo do site, ele so vai recarregar aquele componente.
import { Link } from "react-router-dom"


export const About = () => {
    return (
        <div>Pagina sobre
            <ul>
                {/*Cada li agora vai ter o componente link que vai ser visualmente igual a tag a , só que ele não vai recarregar o site completo ele somente vai alterar alterar o componente que ja esta pré carregado na memoria do react. */}
                <li><Link to="/sobre/renan">Renan</Link></li>
                <li><Link to="/sobre/pedro">Pedro</Link></li>

            </ul>
        </div>
    )
}