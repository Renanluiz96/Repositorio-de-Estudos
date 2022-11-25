//Função auxiliares para simplificar os querry selector , para não ficar fazendo o comando toda hora . é somente colocar a função e entre os parametros voce passar qual query voce quer selecionar.
const c = (elemento) => document.querySelector(elemento) //Usa o "c" para usar o comando querySelector que retornara o item
const cs = (elemento) => document.querySelectorAll(elemento) //Usa o "cs" para usar o querrySelectorAll que retornara um array com varios itens que voce seleciono ou varias tags ou classes

//Mapear a lista de pizza
//Mapaear com os parametros = 1º o item que seria a pizza em si, 2º = que seria o index da pizza ou seja o numero dela .
pizzaJson.map((item, index) => {
    //Com o a função cloneNode voce vai clona a estrurura das pizza com as informações em gerais de cada uma, preencher todos os dados e vai mostrar na tela. Dentro do cloneNode ,voce vai usar o true para ele não pegar o proprio item e sim tudo que estiver dentro dele
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Esta variavel pizzaItem é basicamente o clone dos items

    //Adicionando as informações nos clones das pizzas , voce vai dentro do clone pizzaItem, e vai selecionar os itens . e vai acrescentar as informações a partir do item que é o parametro do map la do Json. Ou seja ele vai selecionar o item(querrySelector) e vai pegar a informação que esta la no json(parametro item da função map ) e vai colocar dentro de cada clone. 
    pizzaItem.querySelector('.pizza-item--img img').src = item.img; //Adicionei a imagem da pizza acessando o img que estava dentro da div fiz um caminho direto , não precisando usar 2 querySelector e peguei o img e alterei o valor do src(que seria onde fica a imagem) para o valor do img la do item.img do json que seria a imagem la do json.
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // Adicionar o preço coloquei ele dentro de uma tamplate string e usei o tofixed para ele colocar 2 numeros depois do ponto , pois esta trabalhando com valores .
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name; //Adicionei o nome da pizza
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description; //Adicionei a descrição da pizza




    //Agora voce pega o conteudo que voce clono e da um append la na div pizza-area que vai ser onde vai ser mostrado na tela , detealhe voce usa o append para ele ir mostrando na tela cada item um ao lado do outro , se voce usar o innerHTML ele vai ficar substituindo os itens e vai ficar com somente 1. 
    c('.pizza-area').append( pizzaItem);
})