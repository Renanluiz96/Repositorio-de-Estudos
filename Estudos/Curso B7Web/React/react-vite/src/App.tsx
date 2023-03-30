

/* Redux - É um Gerenciador de estados igual ao ContextApi , só que o Redux é mais robusto , tem mais funcionalidades.
Normalmente usado em projetos um pouco mais antigos de 2019 para tras usavam muito o redux para gerenciar os dados de  componentes e salvar em um lugar só chamado "storage" e esses dados salvos seriam salvos em reducers que ficariam armazenados para cada situação , seja ela os dados do usuario logado após o preenchimento de algum formulario ou login, seja ele um darkmode , com informações caracteristicas do site em um estado e ao click alterava toda a estetica do site com as propriedades guardadas em um reducers que estaria salvo dento do store do redux.

Libs para exportar no terminal para uso do redux em seu projeto.
  -
  -
  -

Normalmente se cria uma pasta chamada redux , e dentro desta pasta se coloca todas as outras relacionadas ao redux nela , as pastas reducers, context, hooks e types.


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