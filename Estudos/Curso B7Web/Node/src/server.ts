//Servidor - vai usar o arquivo de rotas que foi criado separadamente, e este arquivo "é apenas para o uso das rotas que foram criados externamente."
import express, { Response, Request } from 'express';
//Importando o arquivo de rota
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'

const server = express();

//Para usar o arquivo do servidor aqui voce usa a função use() que ja tem no express para uso de arquivos de rotas externos. Usando assim ,voce ja vai ter acesso a todas as rotas configuradas naquele arquivo. A partir do / vai ser usado as rotas que estão neste arquivo.
server.use('/', mainRoutes);

//Para usar rotas especificas de um lugar só exemplo do painel . voce usa a rotas e no primeiro parametro , voce passa da onde quer que ele comeca a partir ou seja a partir do /painel que ai ele comeca a usar as rotas que foi criada deste arquivo especifico.
// Ex  : /painel/ - Acessa o site principal do painel
// Ex : /painel/noticia - acessa outra parte do site.
//Para ter acesso as rotas do painel tem que passar na url /painel primeiro para ter acesso 
server.use('/painel', painelRoutes)

//Caso queira fazer uma pagina de não encontrado , caso o usuario queira acessar uma pagina que  não tenha na rota , voce pode mostrar para ele uma pagina padrão que fica configurada exclusivamente no servidor.
server.use((req: Request, res: Response)=> {
    //Caso o usuario tento acessa alguma rota e não conseguiu ter acesso a nada então mostra este resutado para ele , e passando o status da pagina para 404(para o navegador entender que é uma pagina não encontrada.)
    res.status(404).send('Pagina não encontrada!')
})

server.listen(80);