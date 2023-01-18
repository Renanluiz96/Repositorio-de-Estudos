// Função tem que retornar alguma coisa grafica na tela. É aqui que voce cria sua aplicação inteira ,e no final voce exporta ela , para poder importar no seu arquivo principal , que la sim ira rodar o projeto em si. Aqui é só criado os componentes , e importado tudo que voce for usar , é importado para ca tambem.
const App = () => {
  let n1: number = 2;
  let n2: number = 5;
  function multiplicacao(numero1:number, numero2:number): number {
    return numero1 * numero2
  }

  return (
    <div>Multiplicação =  {multiplicacao(5, 10)}</div>
  );
}

//Exportar o seu arquivo para poder ser usado na pagina principal. Main.tsx
export default App;