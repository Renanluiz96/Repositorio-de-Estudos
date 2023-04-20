//Servidor - vai usar o arquivo de rotas que foi criado separadamente, e este arquivo "é apenas para o uso das rotas que foram criados externamente."
import express, { Response, Request } from 'express';
//Importando uma lib path para usar para que quando crie pastas e arquivos estaticos ele ja salva o caminho da pasta 
import path, { join } from 'path';

//Importando "Mustache" a template engine para usar para criar a estrutura do site.
import mustache from 'mustache-express';

//Importando o arquivo de rota
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'

const server = express();

//Configurando o mustache
server.set('view engine', 'mustache');
//Setando os arquivos html que irão ficar na pasta views que la ficarão os arquivos mustache com o final do arquivo .mustache
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

//Criando pasta e arquivos estaticos
// atraves da pasta public , para o usuario ter acesso atraves do navegador. Bem usado quando quer pegar algum arquivo que eu tenho salvo atraves da url. Vai usar o .use , e dentro dele vai usar uma função do express chamada static e dentro dela voce passa a rota do pasta public, e usa a lib path, para salvar onde ficara a pasta public .
server.use(express.static(path.join(__dirname, '../public')));


//Para usar o arquivo do servidor aqui voce usa a função use()
// que ja tem no express para uso de arquivos de rotas externos. Usando assim ,voce ja vai ter acesso a todas as rotas configuradas naquele arquivo. A partir do / vai ser usado as rotas que estão neste arquivo.
server.use('/', mainRoutes);

//Paginas Especificas
//Para usar rotas especificas de um lugar só exemplo do painel . voce usa a rotas e no primeiro parametro , voce passa da onde quer que ele comeca a partir ou seja a partir do /painel que ai ele comeca a usar as rotas que foi criada deste arquivo especifico.
// Ex  : /painel/ - Acessa o site principal do painel
// Ex : /painel/noticia - acessa outra parte do site.
//Para ter acesso as rotas do painel tem que passar na url /painel primeiro para ter acesso 
server.use('/painel', painelRoutes)

//Rotas Pagina não encontrada
//Caso queira fazer uma pagina de não encontrado , caso o usuario queira acessar uma pagina que  não tenha na rota , voce pode mostrar para ele uma pagina padrão que fica configurada exclusivamente no servidor.
server.use((req: Request, res: Response)=> {
    //Caso o usuario tento acessa alguma rota e não conseguiu ter acesso a nada então mostra este resutado para ele , e passando o status da pagina para 404(para o navegador entender que é uma pagina não encontrada.)
    res.status(404).send('Pagina não encontrada!')
})

server.listen(80);