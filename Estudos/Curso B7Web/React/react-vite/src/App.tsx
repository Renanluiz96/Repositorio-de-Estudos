

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

*/

const App = () => {
  return (
    <div>
      Meu nome é : ... e tenho ... anos <br />
      Tema: ...

      <hr />
      <input type="text" value={',,,'}/>

      <hr />
      <button>Switch Theme</button>

    </div>
  )
}

export default App