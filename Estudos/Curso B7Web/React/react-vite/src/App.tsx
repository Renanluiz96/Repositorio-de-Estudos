// Função tem que retornar alguma coisa grafica na tela. É aqui que voce cria sua aplicação inteira ,e no final voce exporta ela , para poder importar no seu arquivo principal , que la sim ira rodar o projeto em si. Aqui é só criado os componentes , e importado tudo que voce for usar , é importado para ca tambem.
const App = () => {
  //Fazendo expressões dentro do arquivo tsx. Cria as variaves e funções fora do return
  let n1: number = 2;
  let n2: number = 5;
  function multiplicacao(numero1:number, numero2:number): number {
    return numero1 * numero2
  }
  let nome:string = 'renan'
  let sobrenome: string = 'luiz'
  let idade:number = 90;


  return (
    //Para usar o javascript junto do codigo html voce coloca sempre as chaves {} e dentro dela codigo javascript, se usa tambem da mesma forma uma template string caso voce queira separar as variaveis
    <div>
      Multiplicação =  {multiplicacao(5, 10)} <br />
      {/*Criando com template string */}
      Nome Completo : {`${nome} ${sobrenome} e tenho ${idade} anos`}

    </div>
  );
}

//Exportar o seu arquivo para poder ser usado na pagina principal. Main.tsx
export default App;