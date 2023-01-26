import "./styles.css"; // Importando o css para o componente


//Nomes de classes unicos , na hora que voce fizer o build ele vai juntar todos os arquivos css, e vai juntar em uma só pagina css , e se caso tiver 2 classes com nomes iguais , mesmo que seja usada em lugar ou componente diferente, elas vão dar conflito. Pode tambem usar um prefixo como ; botao-square , botao-btn ... colocar um - para separar, para evitar problema

export const Botao = () => {
    return (
        //No html usamos "class" , aqui no react usamos "className"
        <div className='square'>
            <button className='btn'>Texto qualquer</button>
            <p className='legend'>Legenda</p>
        </div>
    )
}