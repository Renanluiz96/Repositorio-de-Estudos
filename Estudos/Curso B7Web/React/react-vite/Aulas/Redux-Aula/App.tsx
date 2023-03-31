/* Redux - É um Gerenciador de estados igual ao ContextApi , só que o Redux é mais robusto , tem mais funcionalidades.

Normalmente usado em projetos um pouco mais antigos de 2019 para tras usavam muito o redux para gerenciar os dados de  componentes e salvar em um lugar só chamado "storage" e esses dados salvos seriam salvos em reducers que ficariam armazenados para cada situação , seja ela os dados do usuario logado após o preenchimento de algum formulario ou login, seja ele um darkmode , com informações caracteristicas do site em um estado e ao click alterava toda a estetica do site com as propriedades guardadas em um reducers que estaria salvo dento do store do redux.

 Libs para exportar no terminal para uso do redux em seu projeto.
  - redux - Para usar ele , esta lib pode ser usada em outras linguagens tambem, não é exclusiva do react

  - react-redux - Como esta lib pode ser usada em outras linguagens, esta lib aqui ela faz a integração entre o redux e o react.

  - @reduxjs/toolkit - Popularmente conhecida como redux toolkit, ela seria uma caixa de ferramenta , onde ela vai auxiliar e agilizar o processo de "configuração" do redux na aplicação.

  - @types/react-redux - Instalar os types do redux, para aplicação , instala normalmente depois de ja ter instalado as libs do redux .

npm install redux react-redux 
@reduxjs/toolkit

npm install -D @types/react-redux


Visão geral do redux :
  - Store = Seria onde vai ser salvo todos os dados da sua aplicação onde vai ser concentrado todos os reducers para uso

  - Provider = Que seria onde voce vai usar na aplicação ou seja em um componente ou até mesmo no app todo. Ou seja é um componente do redux que voce pode colocar o componente ou app o que seja para que ali possa ter toda as informações do seu store.

  - Reducers / Slice = Slice que são chamados de reducers, que seriam os reducers do proprio redux, ou seja ali dentro que vai ter toda as ações que pode conter para manipular , criar, ou fazer qualquer ação que queir fazer em especifico . Fica todo guardado no proprio reducer em especifico.

  - Actions / Dispatches = Actions que seria as ações que podem ocorrer para manipular na tela o componente através das dispatch que seria uma função onde voce passa o 'tipo' da ação , e o payload que seria a imformação ou a carga que voce quer mandar, exemplo quer alterar o nome de uma pessoa , o type: TROCAR_NOME , payload: { 'Novo nome' } . 

  - Selectors = Usa o selector para pegar as inforções que estão na store


Normalmente se cria uma pasta chamada redux , e dentro desta pasta se coloca todas as outras relacionadas ao redux nela , as pastas reducers, hooks e types.

Sempre no redux comeca criando os reducers primeiro ou seja a pasta reducers e cada reducer como arquio .ts do reducer em especifico, ou seja quer criar um reducer de usuario cria userReducer.ts .
Depois de criado os reducers, voce precisa cria e configurar o store. Cria um arquivo dentro da pasta do redux mesmo , chamado store.ts .

Para usar o reducer na sua aplicação voce usa o hook useSelector, ou pode criar uma pasta chamada hooks para criar um hook geral , e la voce configura o hook e coloca um type geral , para que no app principal voce apenas import o hook e usa ele na aplicação , ao inves de fazer muitos imports em cada tela que voce quer, isso de criar uma pasta para concentrar toda a informação em um arquivo só é bem usado quando se tem muito  reducers diferente, e voce quer usa-los em uma mesma pagina, isso iria gerar muitos imports. Criando um arquivo voce faz tudo la e exporta apenas o hook ja configurado e tipado para onde voce quer usar.

*/

//Hook useSelector tipado com type geral.
import { useAppSelector } from "../aulas/Redux/hooks/useAppSelector"
//Hook para o uso do dispatch para ele executar as actions do reducers.
import { useDispatch } from "react-redux"
//Importando as actions do reducers para uso com o dispatch.
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";

const App = () => {
  //Usando o hook do reducer pegando apenas a informação do reducer que quero usar apena retornando o state.user ou outro reducer que eu tiver eu uso o state.outroreducer. Que eu ja vou ter acesso a todas informações do reducer.
  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);

  //Salvei o hook useDispatch em uma função dispatch, passando dentro dela na hora que for usar somente o nome ação e o valor novo que quer adicionar.
  const dispatch = useDispatch();

  //Criando função auxiliar para simplificar o codigo do dispatch . Para não precisar ficar toda hora que for usar usa o dispatch dentro dela a ação  e depois o valor novo. 
  const changeName = (newName: string) => dispatch(setName(newName))
  const changeAge = (newAge: number) => dispatch(setAge(newAge))
  const switchTheme = (newTheme: string ) => dispatch(setThemeStatus(newTheme))

  //Função para setar os valores do input , para alterar o valor dos reducers de acordo com o que for digirando pegando o targer.value do que foi digitado. E usando a função auxiliar criada para simplificar o codigo.
  const handleNameInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value)
  }
  const handleAgeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    changeAge(parseInt(e.target.value))
  }
  const handleSwitchTheme = () => {
    switchTheme(theme.status === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      Meu nome é : {user.name} e tenho {user.age} anos <br />
      Tema: {theme.status}

      <hr />
      <input type="text" value={user.name} onChange={handleNameInput}/>
      <input type="text" value={user.age} onChange={handleAgeInput}/>

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>

    </div>
  )
}

export default App