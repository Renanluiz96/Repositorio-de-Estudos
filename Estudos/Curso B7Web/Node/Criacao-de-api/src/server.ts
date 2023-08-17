// Criando o servidor
import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api'
import cors from 'cors'

// Inciando a configuração para usar variaveis de ambiente
dotenv.config();

// iniciando o servidor express
const server = express();

// Liberando o CORS para fazer a requisição para outras paginas , normalmente se configura o cors depois de ter iniciado o servidor - tem que baixar a lib cors npm install cors e depois o types dela npm install -D @types/cors
// server.use(cors()) - Fazendo assim somente passando o cors sem nada dentro voce vai estar liberando acesso da sua api para todos (normalmente usado para api publica)
server.use(cors({
    origin: 'https://resttesttest.com', // Quando voce quer especificar qual site pode usar voce usa o parametro origin e coloca o endereco da api que voce quer liberar usar
    //origin: '*' //Se voce coloca no origin o * voce libera acesso total para todos.
    methods: ['GET', 'POST'] //Method para liberar quais metodos voce permite
}))

// Criando o caminho para usar a pasta public
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

// Criando o caminho para usar as minhas rotas.
server.use(apiRoutes)
// server.use('/api',apiRoutes)  Para poder que todas as suas rotas tenham um prefixo voce pode colocar este prefixo antes ai todas as suas rotas irão ser acessado atraves desse prefico na url aqui teria que digitar /api/alguma rota

// Criar um endpoint para caso não achar a pagina ele redireciona para a pagina 404 que "retornara" um json(que é padrão todas as api elas retornam sempre um json) .
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endepoint não encontrado.'})
})

// Criar um listen para ficar observando a porta da variavel de ambiente
server.listen(process.env.PORT)