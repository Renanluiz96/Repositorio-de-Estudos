import { useParams, useNavigate } from "react-router-dom"
/*
// useParams - Usa este hook do react router para conseguir pegar o parametro digitado na url de forma dinamica que o usuario digitou e manipular items na tela de acordo com o que o usuario escreveu dinamicamente. Bem usado para não ter que ficar criando muitas paginas repetetivas só para alterar as informações, voce pode manipular as informações na tela de acordo com o que o usuario escrever.
// useNavigate - Usa este hook para navegar entre as paginas so seu site. Ele é uma função então todas as rotas que voce quer passar para tem que passar entre os parametros desta função
*/
export const AboutItem = () => {
    const params = useParams();
    //Salva em uma constante o hook useparams, ele é uma função.

    const navigate = useNavigate();     

    //Função para usar o navigate e redirecionar ao click do botão
    const handleBackButton = () => {
        navigate(-1) //Para voltar a pagina anterior 
    }
    const handleHomeButton = () => {
        let name: string = 'fulano';

        navigate(`/sobre/${name}`)
        //Para ir em uma rota especifica . Pode salvar alguma variavel e usar na rota tambem dinamicamente.
    }

    return(
        <div>
            pagina sobre {params.slug?.toUpperCase()} {params.slug?.length} letras
            {/* usa o params. o nome que voce escreveu la ao lado do : que aqui foi usado o slug como um identificador. se usa o ? pois para identificar se existe algum slug dentro do params. E ele transforma em toUpperCase e depois mostra o tamanho da palavra digitada usando o length */}
            <hr />
            <button onClick={handleBackButton}>Voltar</button><hr />
            <button onClick={handleHomeButton}>Home</button>
        </div>
    )
}