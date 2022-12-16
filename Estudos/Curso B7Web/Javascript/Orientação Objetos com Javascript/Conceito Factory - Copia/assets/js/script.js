class Input {

    _type = 'text';
    required = false;

    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    get type() {
        return this._type;
    }

    set type(t) {
        if(['text', 'password', 'email', 'submit'].includes(t)) {
            this._type = t;
        } else {
            throw new Error (`Input ${t} type doesn't exist`)
        }
    }
}

//IMPLEMENTAÇÃO

//EMAIL
let email = new Input("email", 'Digite seu e-mail');
email.type = 'email';
email.required = true;

//SENHA
let password = new Input('password', 'Digite sua senha')
password.type = 'password';