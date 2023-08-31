// Criando o servidor
import express, {Request, Response, ErrorRequestHandler} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { MulterError } from 'multer';
import apiRoutes from './routes/api'
import cors from 'cors'

// Inciando a configuração para usar variaveis de ambiente
dotenv.config();

// iniciando o servidor express
const server = express();

// Liberando o CORS para fazer a requisição para outras paginas , normalmente se configura o cors depois de ter iniciado o servidor - tem que baixar a lib cors npm install cors e depois o types dela npm install -D @types/cors
// server.use(cors()) - Fazendo assim somente passando o cors sem nada dentro voce vai estar liberando acesso da sua api para todos (normalmente usado para api publica)
server.use(cors({
    // origin: 'https://resttesttest.com', // Quando voce quer especificar qual site pode usar voce usa o parametro origin e coloca o endereco da api que voce quer liberar usar
    // //origin: '*' //Se voce coloca no origin o * voce libera acesso total para todos.
    // methods: ['GET', 'POST'] //Method para liberar quais metodos voce permite
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

// Lidando com erros do multer e se não for o erro do multer mostra o erro no console para o desenvolvedor.
// Tem que importar o ErrorRequestHandler do express, e o import { MulterError } from 'multer'; .
// Cria uma função errorHandler e tipa esta função com o ErrorRequestHandler do express para poder tratar o error. Passa 4 parametros nela , erro , req, res ,next.
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Se caso tiver erro ja altara o status para o 404 Bad Request

    // Agora lida com o erro.
    if(err instanceof MulterError) { //Se o erro que aconteceu for um erro do multer
        res.json({ error: err.code }); //Ele vai mandar um json com o erro, e a mensagem do erro do multer para o desenvolvedor ver qual foi o erro.
    }else {
        // Se for algum erro que não for do multer, voce mostra no console para o desenvolvedor
        console.log( err );
        res.json({ error: 'Ocorreu um erro'}) //E para o usuario voce mostra uma mensagem de erro.
    }
}
server.use(errorHandler) // E ao final de criar esse tratamento de error usa ele com o server.use() colocando o nome da função que voce crio.

// Criar um listen para ficar observando a porta da variavel de ambiente
server.listen(process.env.PORT)