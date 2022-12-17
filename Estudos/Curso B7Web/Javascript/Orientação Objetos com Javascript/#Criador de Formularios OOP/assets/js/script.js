//CRIANDO AS CLASSES

class Form {

    //Criando a lista com os itens que tem dentro do formulario ou seja onde vai acrescentar os inputs e o button . Onde vai começar com o array vazio e depois vai adicionando os inputs dentro
    items = [];

    method = 'GET';

    //Contrutor de um form tem um containrer(onde vai ser o formulario), o metodo dele(por padrão vai ser GET), e a action que é para onde ele vai ser redirecionado(url)
    constructor(container, method, action) {
        //Container é onde vai ficar o formulario ou seja a div que ele vai ser inserido dentro e voce seleciona com o queryselector o proprio container , que na hora que voce for usar , voce especifica la na hora qual é o local do container(div)
        this.container = document.querySelector(container)

        this.method = method
        this.action = action
    }

    // Criar uma função para adicionar os itens na lista de arrays do formulario
    addItem(item) {
        this.items.push(item);
    }

    //Agora e por ultimo depois de ter criado tudo voce vai mostrar na tela, então vai criar uma função para renderizar todo mundo na tela
    render() {
        //Voce vai criar o elemento formulario com o createElement. Vai criar um form
        let formElement  = document.createElement('form')
        //Setando atributos neste formulario que é os atributos ali do construtor
        formElement.setAttribute('method', this.method)
        formElement.setAttribute('action', this.action)

        //Aqui voce vai fazer um loop para navegar este array de itens
        for(let i in this.items) {
            //Aqui voce esta com o proprio objeto do input, e vai usar a função render para renderizar no formulario o item do loop  que voce vai ter que colocar como parametro onde é o formulario que voce vai renderizar o item . Voce usa a variavel que voce crio o formulario ali em cima
            this.items[i].render(formElement);
        }

        //E aqui ele vai jogar o formulario todo ja preenchido dentro do container que é a div em que o formulario fica dentro
        this.container.appendChild(formElement);

    }
}

class Input {

    //Variaveis padrões : _type é para o tipo de texto inserido nos input que por padrão vai vir como texto , e depois pode ser alterado. Required que é o campo required que por padrão ja vem como false. Depois podendo ser alterado para true quando precisar ser usado
    _type = 'text';
    required = false;

    //Criando um construtor para receber um nome , e um label
    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    //Vai pegar o atributo la da variavel padrão com o get e retornar ela
    get type() {
        return this._type;
    }

    //Fazer a verificação se o campo de input é dos tipo , texto , password, email ou submit com o set 
    set type(t) {
        if(['text', 'password', 'email', 'submit'].includes(t)) {
            this._type = t;
        } else {
            throw new Error (`Input ${t} type doesn't exist`)
        }
    }

    //Aqui voce vai criar o elemento na tela com o createElement igual voce crio o formulario só que agora voce vai criar os inputs e preencher as propriedades dele com os que voce crio aqui na class usando o "this". E depois vai ter que fazer a mesma coisa la na class do button , para criar o botão na tela
    render(formElement) {
        let el = document.createElement('input')
        el.type = this.type;
        el.name = this.name;
        el.placeholder = this.label;
        el.required = this.required;
        //Depois de ter criadoe preenchido as propriedades, voce adiciona ele no formulario usando o appendChild q
        formElement.appendChild(el);
    }
}

//Criando a class do button que vai "Herdar" as propriedades da classe input
class Button extends Input {
    //O constructor só vai receber o label , pois ele só precisa do texto deste proprio botão
    constructor(label) {
        //Como ele ta herdando propriedades , ele tem o primeiro parametro como nome , que aqui não precisa , então voce pode deixar em aspas vazio, e o label tambem herdado do pai dele.
        super('', label)

        //E substituir o type para submit por que ele é botão . Tem que colocar o tipo certinho, pois ele herdou aquela verificação la do setter , então se digitar algo diferente da erro
        this.type = 'submit';
    }

    //Voce precisa "sobreescrever" este render pois ele ja tem esta propriedade do pai , só que aqui voce vai modificar um pouco ela.
    render(formElement) {
        let el = document.createElement('input');
        el.type = this.type;
        //Só que aqui precisa o value que seria  o que esta escrito dentro do botão
        el.value = this.label
        formElement.appendChild(el)
    }
}

//IMPLEMENTAÇÃO

//Formulario
//Usando a classe do formulario  , primeiro parametro tem que especificar onde ele vai ser guardado(o container dele), segundo o metodo dele voce pode alterar para POST que por padrão ja vem como GET, e action o url do site que voce quer enviar
let form = new Form('.formArea', 'POST' , 'https://www.meusite.com.br')

//EMAIL
let email = new Input("email", 'Digite seu e-mail');
email.type = 'email';
//Alterando o tipo de required para true para ser obrigado o usuario a digitar este campo
email.required = true;
//Depois de ter criado o email voce vai adicionar este item no formulario usando a função que tem la dentro da classe do formulario . Passando como parametro o proprio email que voce crio agora
form.addItem(email)

//SENHA
let password = new Input('password', 'Digite sua senha')
password.type = 'password';
form.addItem(password) // Adicionou este objeto tambem ao array do formulario

//Botão
let button = new Button('Enviar')
form.addItem(button)//Adicionou este objeto tambem ao array do formulario

//E por ultimo voce renderiza tudo na tela usano a função render , no form
form.render();