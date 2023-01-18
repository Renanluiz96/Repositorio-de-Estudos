// Função tem que retornar alguma coisa grafica na tela. É aqui que voce cria sua aplicação inteira ,e no final voce exporta ela , para poder importar no seu arquivo principal , que la sim ira rodar o projeto em si. Aqui é só criado os componentes , e importado tudo que voce for usar , é importado para ca tambem.
const App = () => {
  return (
    <div>
      Ola, Mundo!
    </div>
  );
}

//Exportar o seu arquivo para poder ser usado na pagina principal. Main.tsx
export default App;