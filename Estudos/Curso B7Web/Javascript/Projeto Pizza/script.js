//Quantidade de pizzas do modal voce vai criar uma variavel que comeca com 1
let modalQt = 1;

let cart = [] // Variavel onde vai salvar o carrinho de compras e as informações que vão sendo adicionadas em objetos com informações de cada

//Cria esta variavel para guardar as informação que voce vai pegar ao selecionar a pizza voce vai salvar ela la dentro do modal e mandar para esta variavel
let modalKey = 0

//Função auxiliares para simplificar os query selector , para não ficar fazendo o comando toda hora . é somente colocar a função e entre os parametros voce passar qual query voce quer selecionar.
const c = (elemento) => document.querySelector(elemento) //Usa o "c" para usar o comando querySelector que retornara o item
const cs = (elemento) => document.querySelectorAll(elemento) //Usa o "cs" para usar o querrySelectorAll que retornara um array com varios itens que voce seleciono ou varias tags ou classes

//LISTAGEM DAS PIZZAS

//Mapear a lista de pizza
//Mapaear com os parametros = 1º o item que seria a pizza em si, 2º = que seria o index da pizza ou seja o numero dela .
pizzaJson.map((item, index) => {
    //Com o a função cloneNode voce vai clona a estrutura das pizza com as informações em gerais de cada uma, preencher todos os dados e vai mostrar na tela. Dentro do cloneNode ,voce vai usar o true para ele não pegar o proprio item e sim tudo que estiver dentro dele
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

        //Sempre que abrir o modal ele vai resetar a quantidade de itens do modal
        modalQt = 1;

        //Para colocar as informações da variavel key neste outra variavel que esta fora , pois a variavel key somente esta dentro do modal , e depois que eu fecho ela , eu perco esta informação então para isto vou salvar nesta outra , para ficar salva fora ao eu selecionar a pizza ele ja selecionar e quando eu fechar eu ja possa ter esta informação guardada para tambem usar e salvar esta informação no carrinho.Ao abrir o carrinho vai pegar as informações de qual pizza é pelo key e vai me dizer qual é e salvando em modalkey
        modalKey = key 


        //Aqui voce vai setar as informações de cada pizza antes de abrir o modal voce vai setando as informação de cada pizza especifica atraves daquela variavel que voce crio logo acima que pega o atributo data-key e mostra toda a informação especifica de cada uma e vai adicionando conforme ela pega as informação la na lista pizza.js.
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        //Para remover o item que por padrão ele ja vem selecionado que é o grande, voce vai tirar a propriedade selected dele deixar ele resetado
        c('.pizzaInfo--size.selected').classList.remove('selected')

        //Agora para colocar o tamanho de cada uma pizza voce seleciona a div e dar um forEach(para cada um dos itens) que ele vai de um em uma div com esta class  ele vai rodar uma função
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=> {
            //Para adicionar sempre o tamanho grande em todos os modals de pizza que voce for abrir ele vai fazer uma verificação , como o a pizza grande sempre esta em terceiro el vai fazer uma verificação e no sizeIndex 2 ele vai sempre acrescentar a classe selected , que voce reseto antes
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }

            //Dentro de cada item desta div vai ter um span que é onde fica o valor . Voce vai selecionar o span e acrescentar o valor nele que seria o valor que esta em sizes la no json que la vai ter o valor de cada tamanho e cada tamanho vai ter seu index ai o tamanho vai ser cada sizeIndex é um tamanho diferente e ele vai preencher os espaços
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        }) 

        c('.pizzaInfo--qt').innerHTML = modalQt;

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

//EVENTOS DO MODAL
//Ações do modal voce tem que fazer fora do map pois o modal é um só  então não pode fazer dentro da listagem la do map

//Função para fechar o modal
function closeModal() {//Voce vai fazer o processo "inverso" do processo de abrir

    //Voce vai setar o opacidade como 0
    c('.pizzaWindowArea').style.opacity = 0;

    //Vai dar um settimeout para ele esperar um tempo e depois colocar um display none para fechar a tela
    setTimeout(()=> {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)//Vai esperar meio segundo para executar esta função   


}

 //Colocando a função closeModal() em todas as divs especificas com a mesma class para que elas fechem via javascript 
 cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{//Aqui ele vai seleciona as div com estas classes e com o forEach ele vai de item em item e vai adicionar a função de click do closemodal
    item.addEventListener('click', closeModal)
});

//Colocando em evento de click para aumentar e diminuir a quantidade de pizza ao clicar no mais e menos
c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{ //click menos
    if(modalQt > 1) {
        modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt
    }
})
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{//Click mais
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt
})

//Para alternar o botao de tamanho das pizzas para selecionar cada uma

cs('.pizzaInfo--size').forEach((size, sizeIndex)=> {
    size.addEventListener('click', () =>{
        c('.pizzaInfo--size.selected').classList.remove('selected'); // Voce vai remover a classe selected que ja continha no botão do tamanho , sendo assim a cada click um reset sempre removendo para depois ao add a cada click em lugar diferente
        size.classList.add('selected') //e depois add a classe selected no tamanho que voce for clicar
    })
}) 

//Addicionando as informações das pizzas ao carrinho de compras

c('.pizzaInfo--addButton').addEventListener('click', ()=>{//Adicionando ação ao carrinho de compras

    /*Qual é a pizza? modalKey ja vai ter o id da pizza

        console.log("Pizza: "+ modalKey)

    //Qual é o tamanho? Voce vai saber o tamanho dela pelo data-key que voce acrescento a cada tamanho , voce vai pegar o id deste tamanho "data-key"
    let size = c('.pizzaInfo--size.selected').getAttribute('data-key')
    console.log('Tamanho: '+ size)

    //Quantas pizzas?? Que é a informação que esta na variavel modal qt
    console.log('Quantidade: '+ modalQt)
    */
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
    //Depois de ter pego o atributo data key para saber o tamanho voce vai acrescentando ao carrinho que é o array cart , com a função push todas as informações que serão guardada em um objeto no array, cada pizza selecionada vai ter como informação Qual pizza, Qual o tamanho e Quantidade

    //Cria um identificador para a pizza que vai ser o id @ e o tamanho dela
    let identifier = pizzaJson[modalKey].id+'@'+size;

    //Ele vai fazer uma verificação para ver o identificador da pizza , para não acrescentar mais pizzas do mesmo id , e ficar la varios identificadores repetindo , ele vai fazer a verificação com o finIndex se ja algum identifier, se caso tiver ele vai me retornar o index dele , se não achar ele vai retornar -1
    let key = cart.findIndex((item)=>item.identifier == identifier);

    //Voce faz uma verifiação com o resultado do findIndex , se ele retornar algum valor maior que -1 ou seja se ele achar um item igual se repetindo, ele vai alterar a quantidade de key do identificador e vai acrescentar a mais na quantidade final de cada identificador
    if(key > -1) {
        cart[key].qt += modalQt;
    }else {
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,//Voce vai salvar o id da pizza pegando a informação do modalKey que esta dentro do pizzaJson voce vai acessar o id real dela com o .id
            size, //Que seria o tamanho que voce pego com a variavel size ali em cima, voce poderia colocar ; size:size , ou somente size
            qt:modalQt // E a quantidade da pizza que voce vai pegar na variavel modalQt
        })
    }
    //Atualiza o carrinho
    updateCart()
    //Fechar o modal após toda ação executando a função de fechar o modal
    closeModal()
})

//Fazendo um evento de click no botão de carrinho no header da pagina , para mobile
c('.menu-openner').addEventListener('click', ()=>{
    //Para fazer com que o menu de pizza apareca na tela pelo mobile . Voce tem que colocar o left como 0 . Porque ele no css esta com uma posição de left 100vw , ou seja ele ta todo para direita . então voce seta o left como 0 para ele descolar de la . Mais voce tem que fazer uma verificação para caso ele vai mudar a posição do menu se caso "tiver" item no carrinho , se não tiver quer dizer que o menu esta zerado e ele não precisa mostrar o menu na tela com o carrinho zerado
    if (cart.length > 0)  { //Se caso tiver itens no carrinho  ou seja maior que 0 voce abre
        c('aside').style.left = '0';
    }})
//Fazendo um evento de click no botão x la de dentro do carrinho para poder fechar a tela do menu
c('.menu-closer').addEventListener('click', ()=>{//Aqui ao clicar no botão ele vai empurrar o menu para o lado direito onde ele estava , setando o left dele para 100vw denovo
    c('aside').style.left = '100vw';
})


//Função para atualizar o carrinho
function updateCart() {
    //No mobile para voce alterar a quantidade de tipos de itens que irão ser mostrada no  carrinho la no header da pagina  para a quantidade total de itens do carrinho
    c('.menu-openner span').innerHTML= cart.length; 

    if (cart.length > 0) {
        c('aside').classList.add('show');

        //Aqui voce pega a div que esta o carrinho com as informações que voce for adicionando , e vai zerando cada vez que for dar o update na tela, se não vai ficar acrescentando duplicadamente , zerar e mostrar ...
        c('.cart').innerHTML = '';

        //Criando as variaveis dos preços dos carrinhos valores de subtotal, desconto , e o total começando com 0 e depois la dentro do for que vai preenchendo estes valores
        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        //Agora faz um for para pegar item a item e exibir na tela
        for (let i in cart) {//Para pegar os itens do cart
            //Voce cria a variavel que vai acessar o pizzaJson e com a função find ele vai procurar , se o id do item da função find, vai ser o mesmo id do index do for , e no final ele vai retornar os item da pizza mesmo nome imagem ... todas as informações usando o find, o findindex só vai retornar o numero do index.
            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);

            //Preenchendo a informação do subtotal
            subtotal += pizzaItem.price * cart[i].qt; //Subtotal comecando com 0 , ele vai pegar o preco da pizza e multiplicar pela quantidade do item em especifico .


            //Preenchendo as informações do carrinho

            // Voce cria a variavel cartItem para clonar e exibir na tela os itens do  carrinho
            let cartItem = c('.models .cart--item').cloneNode(true);

            //Aqui voce cria uma variavel vazia e preenche ela com um switch para mostrar ao lado da pizza o tamanho dela por letras ao inves de numeros(que normalmente iria mostrar) então voce faz um switch para cada tamanho ele preencher a variavel de acordo com a letra certa
            let pizzaSizeName;
            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = 'M';
                    break;
                case 2:
                    pizzaSizeName = 'G';
                    break;
            }
            //Aqui voce vai criar a variavel que vai conter um templateString com o nome da pizza + o tamanho da pizza que voce crio e preencheu antes com  o switch
            let pizzaName = `${pizzaItem.name} ${pizzaSizeName}`;

            //Aqui voce vai preenchendo os itens na variavel que voce clono do carrinho
            cartItem.querySelector('img').src = pizzaItem.img; //Imagem da pizza
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;// Nome da pizza + Tamanho 
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;//Quantidade de pizza

            //Colocando as ações de clique ao adicionar mais e menos no carrinho
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{//Evento de click no botão -
                if (cart[i].qt  > 1){
                    cart[i].qt--;
                }else {//Aqui voce vai fazer o item sumir do carrinho , para não ficar mostrando 0 unidades , então quando não tiver nenhum item ao tiver 1 item e se voce clicar novamente em diminuir ele vai dar um splice para tirar do carrinho este 1 item que ai ele zera e some do carrinho
                    cart.splice(i, 1)
                }
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{//Evento de click no botão +
                //Aproveitando o contexto do for que voce esta no laço de repetição , voce vai aqui no caso acrescentar a mais a quantidade do proprio item especifico que o for ta fazendo o looping
                cart[i].qt++ ; 

                //E depois de adicionar o item incrementando a mais , é rodar novamente a função updateCart() na tela sempre quando  voce clicar  no botão , pra ele ir sempre atualizando a tela com a quantidade certa
                updateCart()
            })


            //Depois de ter clonado e preenchido as informações voce vai exibir o item clonado na tela selecionando a div onde voce quer adicionar e dando um append do clone neste lugar
            c('.cart').append(cartItem);
        }

        //Depois do for eu calculo o restante dos itens
        desconto = subtotal * 0.1; //Desconto vai ser 10% de todo o valor da compra 
        total = subtotal - desconto; //Total vai ser o subtotal - o desconto eu vou chegar ao preco final

        //Depois de ter feito Todo o calculo , agora é hora de colocar estes valores na tela. Voce seleciona a div e altera o valor que vai estar em um span.
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        //Fecha no computador desktop
        c('aside').classList.remove('show');
        // Fecha no celular tambem ao zerar o  item do menu carrinho
        c('aside').style.left = '100vw' //Empurrando de volta para a posição inicial dele.
    }

}