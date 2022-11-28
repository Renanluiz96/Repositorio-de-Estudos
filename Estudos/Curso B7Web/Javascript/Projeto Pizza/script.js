//Função auxiliares para simplificar os querry selector , para não ficar fazendo o comando toda hora . é somente colocar a função e entre os parametros voce passar qual query voce quer selecionar.
const c = (elemento) => document.querySelector(elemento) //Usa o "c" para usar o comando querySelector que retornara o item
const cs = (elemento) => document.querySelectorAll(elemento) //Usa o "cs" para usar o querrySelectorAll que retornara um array com varios itens que voce seleciono ou varias tags ou classes

//Mapear a lista de pizza
//Mapaear com os parametros = 1º o item que seria a pizza em si, 2º = que seria o index da pizza ou seja o numero dela .
pizzaJson.map((item, index) => {
    //Com o a função cloneNode voce vai clona a estrurura das pizza com as informações em gerais de cada uma, preencher todos os dados e vai mostrar na tela. Dentro do cloneNode ,voce vai usar o true para ele não pegar o proprio item e sim tudo que estiver dentro dele
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Esta variavel pizzaItem é basicamente o clone dos items

    //Aqui voce vai setar um atributo data-key com o index é o numero especifico do index ou seja o id para voce reconhecer qual é cada pizza atraves deste data-key
    pizzaItem.setAttribute('data-key', index);

    //Adicionando as informações nos clones das pizzas , voce vai dentro do clone pizzaItem, e vai selecionar os itens . e vai acrescentar as informações a partir do item que é o parametro do map la do Json. Ou seja ele vai selecionar o item(querrySelector) e vai pegar a informação que esta la no json(parametro item da função map ) e vai colocar dentro de cada clone. 
    pizzaItem.querySelector('.pizza-item--img img').src = item.img; //Adicionei a imagem da pizza acessando o img que estava dentro da div fiz um caminho direto , não precisando usar 2 querySelector e peguei o img e alterei o valor do src(que seria onde fica a imagem) para o valor do img la do item.img do json que seria a imagem la do json.
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // Adicionar o preço coloquei ele dentro de uma tamplate string e usei o tofixed para ele colocar 2 numeros depois do ponto , pois esta trabalhando com valores .
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name; //Adicionei o nome da pizza
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description; //Adicionei a descrição da pizza

    //Seleciona a tag a que é o link que dentro dele vai esta a imagem e o botão , e ao clicar ele vai abrir um modal. Para isto voce tem que selecionar a tag "a" e add um evento de click
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        
        e.preventDefault();//Voce usa a função preventDefault para cancelar a ação natural de um link que é de atualizar a pagina , aqui ele vai cortar isso
        let key = e.target.closest('.pizza-item').getAttribute('data-key');// aqui voce vai criar uma variavel que vai pegar a informação de qual pizza ela é através do atributo "data-key" . E a função closest é para achar o elemento mais proximo que tenha oque esta como parametro escrito ele vai procurar a partir de onde ele esteja ou dentro ou fora da div que ele tiver mais "proximo" ele vai pegar esta informação , aqui no caso eu tenho uma tag "a" e quero pegar a informação da div em que ela esta dentro . E a partir dai voce vai pegando as informações das pizzas por este atribute key e vai adicionando as informações no modal


        //Aqui voce vai setar as informações de cada pizza antes de abrir o modal voce vai setando as informação de cada pizza especifica atraves daquela variavel que voce crio logo acima que pega o atributo data-key e mostra toda a informação especifica de cada uma e vai adicionando conforme ela pega as informação la na lista pizza.js.
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;


        //Depois voce vai selecionar o modal que esta em pizzaWindowArea e vai setar a opacidade 0, e como ele ja esta pré configurado ja  e ta com o display none , voce só aplica um display flex para ele aparecer na tela
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        //E para ele não abrir uma aba muito seca "muito rapido sem nenhum efeito" voce aplica a opacidade para 0 como ta la em cima. e seta um time out com 200ms bem pouco tempo mesmo (pois o javascript interpreta muito rapido então ele nem seta o 0 ele ja seta direto o 1 por isso voce coloca um time), e dentro dele voce passa uma arrow function e seta a opacidade para 1 para mostrar na tela , que ja no css ja tem um pequeno efeito de transição.
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })


    //Agora voce pega o conteudo que voce clono e da um append la na div pizza-area que vai ser onde vai ser mostrado na tela , detealhe voce usa o append para ele ir mostrando na tela cada item um ao lado do outro , se voce usar o innerHTML ele vai ficar substituindo os itens e vai ficar com somente 1. 
    c('.pizza-area').append( pizzaItem);
})