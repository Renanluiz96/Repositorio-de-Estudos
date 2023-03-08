import { useParams } from "react-router-dom"

export const AboutItem = () => {

    const params = useParams()

    return(
        <div>
            pagina sobre {params.slug?.toUpperCase()} {params.slug?.length} letras
        </div>
    )
}