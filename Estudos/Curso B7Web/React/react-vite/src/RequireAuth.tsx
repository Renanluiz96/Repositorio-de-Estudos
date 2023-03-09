import { Navigate } from "react-router-dom";

type Props = {
    //Faz a props dizendo que o conteudo dele ou seja o componente que ele quer ativar , é um children e se for um componente , o type dele é JSX.Element
    children: JSX.Element
}

//Aqui seria a pagina de autenticação para fazer alguma verificação caso tiver ai sim renderiza o componente dentro deste
export const RequireAuth = ({ children }: Props) => { //Todo o componente que estiver dentro de outro componente ele é um "children" então tem que passar ele como parametro entre {} - ficara { children } e tem que fazer um type para esta Props.

    //Normalmente estas pagina de verificação sempre retorna um boolean , então se for true = mostra o conteudo dentro. Caso de false = mostra outra tela, ou a pagina inicial normalmente(Barrando a passagem para a rota privada) . Basicamente é assim. Ai voce cria uma variavel , faz algum tipo de verificação que retorna ou true ou false.
    const isAuth = false;


    //Aqui é se caso a varivavel de autenticação der false(!isAuth) então ele pega e retorna para a pagina inicial , ou outra pagina que não seja a que voce quer redirecionar, voce manda ele para algum lugar para que o usuario não fique vendo uma tela em branco.
   if(!isAuth) {
    //Esse retorno , vai retornar um Componente do react-router chamado Navigate que seria como um link , para realmente mandar ele para uma pagina em especifica dentro do seu codigo/alguma rota que ja tenha no seu sistema. Não se usa o hook useNavigate pois ele tem seus proprios usos , e não é sempre usar ele de qualquer forma. Melhor maneira é usar este Componente do react-router mesmo. 
    return <Navigate to="/login" />;
   }

   //Sempre um componente tem que retornar alguma coisa, então caso ele não for autenticado ele sera retornado outra tela. Agora caso ele passo na autenticação então ele retorna o children que seria aquele componente que esta dentro deste, ou seja o About - ou a tela que voce queira mostrar ao usuario.
   return children
}