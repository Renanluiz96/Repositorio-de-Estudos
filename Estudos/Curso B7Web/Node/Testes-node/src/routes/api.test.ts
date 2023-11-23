//Biblioteca supertest para fazer teste de requisição . SuperTest e transfere o listen da porta para ca para poder fazer o teste na porta. npm install -D supertest @types/supertest.
//Supertest cria um servidor para poder fazer teste neste. pois quando for um servidor que esta online ele não ira fazer teste no servidor online , ele ira usar o supertest para isso.
import request from "supertest"; // Importando o request do supertest 
import app from '../app' // Importando a configuração do servidor para fazer o teste na lib e não no servidor em si. 
import { User } from "../models/User";
// Para fazer os testes na api ira fazer como uma promisse com o done(para dizer quando acabou o teste) e não como async/await.

describe('Testing api routes', () => {

    let email = 'test@jest.com';
    let password = '1234';

    beforeAll(async () => {
        await User.sync({ force: true })
    })

    // Testando a rota ping-pong passando o done como parametro para poder a auxiliar o teste dizendo quando encerrar o teste.
    it('should ping pong', (done) => {
        request(app) // Usando o request no app ele ja inicia esse servidor teste.
            .get('/ping') // Testar a rota get do ping
            .then(response => { // Espera  a resposta
                expect(response.body.pong).toBeTruthy(); // Faz o teste para ver se o body da resposta deu true
                return done(); // Aqui ele finaliza.
            });
    })

    it('should register a new user', (done) => {
        request(app) 
            .post('/register')
            .send(`email=${email}$password=${password}`) // Para enviar no corpo da requisição do post usa o send()
            .then(response => { 
                expect(response.body.error).toBeUndefined();
                expect(response.body).toHaveProperty('id');
                return done();
            });
    })
});

