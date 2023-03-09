import { Routes, Route } from "react-router-dom"
import { About } from "../pages/About"
import { AboutItem } from "../pages/AboutItem"
import { AboutPedro } from "../pages/AboutPedro"
import { AboutRenan } from "../pages/AboutRenan"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { RequireAuth } from "../RequireAuth"

export const MainRoutes = () => {
    return(
        <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<RequireAuth><About /></RequireAuth>} />
                    {/* Rotas privadas voce pode fazer com que ao acessar a rota , ela passe para uma verificação, isso por padrão não existe no react-router, então voce vai ter que criar ela. Fazendo um componente que faz essa verificação e dentro deste componente voce coloca o componente que quer que seja acessado caso alguma situação da rota privada for satisfeita, por exemplo sistema de login */}

                    <Route path="/sobre/renan" element={<AboutRenan />} />
                    <Route path="/sobre/pedro" element={<AboutPedro />} />
                    {/* Rotas normais onde poderão ser acessadas pela url, ou redirecionada atraves de algum botão pode ser redirecionado para estas rotas. */}

                    <Route path="/sobre/:slug" element={<AboutItem />} />
                    {/* Rota dinamica usando o : referencia que esta é uma rota dinamica e o valor depois dela slug(normalmente um identificador para substituir um id) este é um parametro que vai servir de idnetificação la na pagina que aqui seria o componente AboutItem. */}

                    <Route path="*" element={<NotFound />} />
                    {/*Rota para pagina não encontrada usa o path="*" para dizer que qualquer url que for digitada não achar nenhuma rota , ela vai redirecionar para esta rota aqui .  */}

                </Routes>
    )
}