import { plus, minus, multiply, divide } from "./math"; //Importando as funções que vão ser usadas no teste

//Para criar um grupo de testes , voce usa a função describe e dentro destas função voce coloca como parametro o nome do grupo que voce quer testes, aqui por exemplo quero testar um grupo de operações matematicas. E o segundo parametro voce coloca todos os testes que voce quer fazer do grupo de testes , usando o a função it para cada teste.

describe('testing math function', () => {

    it('should add correctly', () => {
        //Salva o resultado da função em uma variavel e depois testa esta variavel
        let result = plus(5, 8)

        //Pode ter 2 except em um teste.
        expect(result).toBeGreaterThan(12); //Espera que seja maior que 12
        expect(result).toBeLessThan(14); //Espera que seja menor que 14
    })

    it('should reduce correctly ', () => {

        //Pode testar mais de uma coisa em um mesmo teste(se for um teste maior para algo diferente não se recomenta testar 2 coisas em um teste só, pois se algum não passar o teste inteiro não vai passar.) por isso se recomenda fazer um teste separadamente para cada coisa.
        let result = minus(10, 5)
        let result2 = minus(10, 2)
        let result3 = minus(10, 15)

        //Aqui voce testa as 3 variaveis
        expect(result).toBe(5)
        expect(result2).toBe(8)
        expect(result3).toBe(-5)
    })

    it('should multiply correctly', () => {
        let result = multiply(2, 5);

        expect(result).toBe(10);
    })

    it('should divide correctly', () => {
        let result = divide(6, 3);
        expect(result).toBe(2)
    })
});