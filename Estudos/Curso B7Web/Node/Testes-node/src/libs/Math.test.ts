import { Math } from "./Math"; // Importa a função ou algo que voce for testar para o arquivo teste

//Describe seria um agrupamento , onde voce vai agrupar varios testes unitarios referente a algo especifico.
describe('Testing Math Library', () => {

    //Para o teste unitario , aqui voce ira testar uma função apenas , voce usa o it = passando 2 parametros primeiro o nome do que o teste vai fazer , normalmente usando should primeiro. e 2 é uma função que ira fazer esse teste.
    it('should sum two numbers correctly', () => {

        const response = Math.sum(5,10); //Aqui voce pega a função que voce quer testar e passa o que voce quer que faça , aqui no caso seria o teste de uma soma de 5 + 10 e salva em uma variavel para testar ela, e depois voce testa o resultado salvo nessa variavel

        expect(response).toBe(15) // E usa o expect para que espere a resposta, dentro do expect voce passa o nome da variavel que voce salvo antes o resultado da função do teste. Apos isso voce pode testar diversas coisas . toBe - seria o resultado exato , então eu to testando se o resultado da soma de 5 + 10 sera 15. Se o resultado for igual ao da função ira passar no teste,caso contrario ira falhar.
    });

    it('should subtract two numbers correctly', () => {
        const response = Math.sub(20,10);
        expect(response).toBe(10);

    });

    it('should multiply two numbers correctly ', () => {
        const response = Math.mut(5,5);
        expect(response).toBe(25)
    });

    it('should divide two numbers correctly', () => {
        const response = Math.div(9,3);
        expect(response).toBe(3);

        //Voce pode tambem fazer 2 testes com a mesma função para ter resultados diferentes e ver mais possibilidades. Pode usar false ou null para resultados que não dão em nada .
        const response2 = Math.div(3,0)
        expect(response2).toBe(false)
    });

});