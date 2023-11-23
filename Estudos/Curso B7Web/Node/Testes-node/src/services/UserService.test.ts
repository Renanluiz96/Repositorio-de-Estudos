import { User, UserInstance } from "../models/User";
import * as UserService from './UserService';

// Fazendo os testes das funções do UserService.
describe('Testing user service', () => {
    // Salvando as variaveis para uso nos testes
    let email = 'test@jest.com';
    let password = '1234';

    // Antes de tudo ele vai sincronizar todas as informações com o banco de dados usando o beforeAll antes de iniciar os teste.
    beforeAll(async () => {
        await User.sync({ force: true }) // Usando o sync com o force true  - Ele vai toda vez sincronizar as informações com o banco de dados e toda vez que iniciar ele vai forcar essa inicialização para que toda vez ele comeca do 0 aqui e durante os teste ele vai criar as tabelas e tudo mais.
    })

    it('should create a new user',async () => {
        const newUser = await UserService.createUser(email, password) as UserInstance;  //Criara um novo usuario
        expect(newUser).not.toBeInstanceOf(Error); //Testara se não der o instanceof Error
        expect(newUser).toHaveProperty('id'); 
        expect(newUser.email).toBe(email);
    });

    it('should not allow to create a user with existing email',async () => {
        const newUser = await UserService.createUser(email, password) as UserInstance;
        expect(newUser).toBeInstanceOf(Error);
    });

    it('should find a user by the email',async () => {
        const user = await UserService.findByEmail(email) as UserInstance;
        expect(user.email).toBe(email)
    });

    it('should match the password from the database',async () => {
        const user = await UserService.findByEmail(email) as UserInstance;
        const match = UserService.matchPassword(password, user.password);
        expect(match).toBeTruthy();
    });

    it('should not match the password from database',async () => {
        const user = await UserService.findByEmail(email) as UserInstance;
        const match = await UserService.matchPassword('invalid', user.password);
        expect(match).toBeFalsy();
    });

    it('should get a list of users' , async () => {
        const users = await UserService.all();
        expect(users.length).toBeGreaterThanOrEqual(1);
        for(let i in users) {
            expect(users[i]).toBeInstanceOf(User)
        }
    })
})