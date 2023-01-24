Tudo no react é um componente - componente nada mais é do que uma função ou classe, que geralmente retorna algo grafico como no caso o projeto todo em si, pode ser considerado um componente.
Todos os componentes precisam ser "exportado de algum lugar" , para poder ser "importado" em outro lugar para poder ser utilizado.

Para criar projetos em vite no react(Mais rapido) - npm init vite nome-projeto --template -react.ts
Depois npm install - Para instalar os pacotes

Arquivos JSX / TSX =
    JSX - É um codigo que mistura javascript com um pseudo-html na tela ele é bem igual a um html mais no fim ele não pois ele pode receber dentro das tags html codigos javascript no meio delas, mais no final vai ser convertido em javascript por um compilador chamado babel.

    Voce pode escrever tanto sintax html, e javascript em 	algum arquivo jsx que o editor decodigo ira entender as2 sintax

    TSX é um codigo JSX só que como é feito em typescript a 	nomenclatura muda

COMPONENTES =
    - Quando voce tem uma quantidade de codigo grande em um bloco , voce sempre cria um arquivo "Componente" para ele , para ser facil da manutenção deste codigo , ele fica facil de ler pois é curto, e voce somente exporta , e importa ele no App
    - Criado tambem Componente em cada arquivo , para quando voce quer reutilizar ele em outros locais.
    - Sempre cria os componentes dentro e uma pasta components dentro da pasta src.
    - Sempre cria arquivos para os componentes de acordo com o que eles são para facil leitura, se tiver criando um header , voce coloca o nome do arquivo de header tambem.
    - Pode ja criar um componente exportando ele ja antes de declarar é só escrever um export antes  ; export const Header = () = {...}, fazendo isto é só importar onde voce quiser utilizar ele .
    - Usando Import - 
        voce vai no arquivo que quer utilizar ele , e coloca ;

        import { Header } from './components/Header' .

        Utiliza o import depois chaves e dentro das chaves voce coloca o componente que voce quer exportar que esta dentro do arquivo, coloca um from e depois onde esta o arquivo.

    - Usando o Componente - Depois de exportado coloca onde voce quiser , em uma tag mesmo parecido com html , e fecha nela mesma <Header /> , sempre com a letra maiuscula o componente.

PROPS = 
    Props são como se fosse um atributo no html , mais no react são chamadas de props(properity).

    <Header title='Este é um texto' />
    Aqui voce esta usando ela.

    Para criar,  voce tem que criar a prop la no parametro do componente =
    
    export const Header = (props: Props) {...}

    Voce tem que criar um type para esta prop , e dentro do type dela que voce coloca de fato a prop que voce quer criar e o tipo dela.

    Normalmente se o componente estiver em um unico arquivo dele mesmo , voce coloca o nome do type de Props mesmo ,pois esta tudo em um mesmo ecossistema. Sempre cria o type dela dentro do arquivo onde voce tambem esta criando o componente, aqui no caso o Header.tsx
    type Props = {
        title: string;
    }
    
    Voce pode usar a prop desta  forma , que geralmente é a mais usada.

    Mandando um objeto e o que voce vai precisar que no caso seria o title que voce vai utilizar. e depois voce passa o type dela que seria do Type Props que voce criou.
    export const Header = ({ title }: Props) {...}

    Depois de passar para o parametro , Voce usa onde quiser como uma variavel dentro do seu componente como um codigo entre {}. 
    
    Exemplo que ficou =  Usando ela dentro do h1
        export const Header = ({ title }: Props) => {
            return (
            <header>
                <h1> {title}</h1>
                <hr />
            </header>
            );
        }
    
    Mais ao declarar a props dentro do type dela . Ela vai ser obrigatoria, então toda vez que for utilizar o compontente voce vai ter que mandar alguma destas props obrigatoriamente, se não o react vai reclamar.
    Para resolver isto voce pode colocar dentro do type Props la no seu componente, voce pode colocar como opcional a prop que voce quer usar , com um ?.
    type Props = {
        title?: string;
    }





