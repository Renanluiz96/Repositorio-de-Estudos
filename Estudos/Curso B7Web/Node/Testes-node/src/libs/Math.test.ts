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

describe.only('Others tests', () => { // Usando o only , ele ira isolar outros testes e ira fazer somente os que tiverem only. Pode ser usado no it tambem , para fazer apenas no teste. Muito usado para isolar um teste que ta com erro e ira testar somente esse . voce coloca o only no teste falho , para que ele não teste os outros testes que deu certo novamente toda vez.


    /*Lyfe Cycle de testes 
    //Executa algo que voce colocar aqui "ANTES" de cada teste , ou seja ele executa , depois o teste, executa e depois o teste
    beforeEach(() =>{

    });

    //Executa "DEPOIS" de cada teste.
    afterAll(() => {

    });

    // Executa Antes do primeiro teste apenas isso , não antes de cada 1
    beforeAll(()=> {

    });

    // Executa depois do ultimo teste ou seja o final . BeforeAll e AfterAll é usado por exemplo abre um banco de dados para teste , ai ele abre o banco de dados no beforeall , executa todos os testes  e no afterall ele fecha o banco de dados
    afterAll(() => {

    })
    */



    //Alguns outros tipos de matches(testes)
    it('contar quantos caracteres tem na string', () => {
        const response = 'DENIED';

        expect(response).toHaveLength(6); // To Have Length - ira ver a quantidade de caractere tem a string
    });

    it('se possui a propriedade EMAIL', () => {
        const response = {
            name: 'umnome',
            email: 'umemail.email.com'
        }

        expect(response).toHaveProperty('email') // Verifica se tem alguma propriedade dentro do objeto que tem o nome passado.
    });

    
    it('se possui false ou true', () => {
        const response = false
        const response2 = true


        expect(response).toBeFalsy() // Verifica se o resultado é falso
        expect(response2).toBeTruthy() // Verifica se o resultado é verdadeiro
    });

    it('se tiver undefined ou não ', () => {
        const response = undefined
        const response2 = '1'

        expect(response).toBeUndefined()
        expect(response2).not.toBeUndefined() // Usando o .not antes voce nega toda a ação a seguir, aqui no caso  to dizendo que o teste não vai ter resultado undefined
    });

    it('se possuir um numero maior ou igual , ou menor ou igual', () => {
        const response = 20;

        expect(response).toEqual(20); // Se é igual a 20
        expect(response).toBeGreaterThan(15); // Se é maior que 15
        expect(response).toBeGreaterThanOrEqual(20); //Se é maior ou igual a 20
        expect(response).toBeLessThan(50); //Se é menor que 50
    });

    // it('se Tiver uma expressão regular (Regex)', () => {
    //     const response = 'email@gmail.com.br'
       
    //     //expect(response).toMatch(Coloca a expressão regular); // Se tiver alguma expressão regular
    // });

    // it('deveria retornar este Error', ()=> {
    //     const response = Math.div(5,0);

    //     expect(response).toThrow(new Error('não divide por 0')) // se ele retornar exatamente esse erro ele passa no teste, se for algum outro erro com outra mensagem ira falhar
    // })
});