import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            Pagina Home <br />
            <button><Link to="/sobre">Ir para a pagina Sobre</Link></button>
        </div>
    )
}