import { useEffect, useState } from 'react';
import * as C from './App.styles'; //Importa o arquivo de estilos do styled componentes . Importei tudo e alterei o nome para 'C'
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg'

//Import de componentes
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';

//Import de types
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
//Importando função auxiliar da pasta helpers.
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {
  // State para saber so o jogo esta rolando ou não.
  const [playing, setPlaying] = useState<boolean>(false);
  //State para saber os segundos que passou des do comeco do jogo comeca como 0 e vai alterando a state de 1 em 1 segundo
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  //State para cada movimento que foi feito , ou seja cada vez que clico no card .
  const [moveCount, setMoveCount] = useState<number>(0);
  //State para mostrar a quantidade de cards que estão virados na tela.
  const [shownCount, setShownCount] = useState<number>(0);
  //State que vai ser um array das informações do grid
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  //useEffect para resetar e criar o jogo quando abrir a tela do navegador
  useEffect(() => resetAndCreateGrid(), [])

  //useEffect para fazer o contador na tela. encrementando a state timeElapsed de 1 em 1 segundo.
  useEffect(() => {
    const timer = setInterval(() => {
      //Faz uma verificação se o jogo estiver rodando , ou seja a state playing estiver true , então ele comeca a setar a encrementar o contador, incrementando a a state +1 a cada 1 segundo. Se caso o playing estiver false, quer dizer que parou o jogo, então o contador para de incrementar.
      if(playing) {
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000);
    return () => clearInterval(timer)//Criar um return , para que quando saia da memoria, ou atualiza a tela  ou qualquer uma coisa aconteca com a aplicação , ele tem que "zerar o timer" , mandando um clearInterval , e  voce manda a variavel que esta o setinterval, que ele zera o setInterval.- return do useEffect serve para isso.
  }, [playing, timeElapsed])

  //useEffect para fazer a verificação dos movimentos.
  
  useEffect(() => {
    // Verificar se o contador esta igual a 2 . Se tiver 2 cards exibidos na tela.
    if(shownCount === 2) { 
      //Fazer um array para pegar os items que estão com o shown true . Se o shown for true ele vai entrar no filtro que seria um novo array
      let opened = gridItems.filter(item => item.shown === true);

      //Depois de filtrado, se o opened for 2 , faz mais uma verificação
      if(opened.length === 2) {

        //v1 - Se eles são iguais, faz o shown ficar permanente  se o item do array 1 é igual ao item do array 2 .
        if (opened[0].item === opened[1].item) {

          //Criar o clone do grid sempre. Para não fazer alterações no array principal
          let tmpGrid = [...gridItems];
          //Faz um loop dentro do array temporario
          for( let i in tmpGrid) {
            //E verifica cada um , se o shown for verdadeiro . Ele vai pegar o permanentShown e transformar ele para true. Deixando ele true, e vai setar de volta o shown para false. 
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;

            }
          }
          //Depois de verificado , setado para a posição certa cada card. Seta o gridItems como o temporario grid, para ele pega as informações deles. e altera o contador na tela para zero novamente.
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          //v2 - Se eles não são iguais, fechar todos os shown
          //Fazer uma função para setar um tempo de 1 segundo , para podermos visualizar quais cards virou errados antes deles virarem novamente.
          setTimeout(()=> {
            let tmpGrid = [...gridItems];
            // Cria um clone tambem, e faz um loop , setando o shown deles para false novamente.
            for(let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            //Depois de setar para a posição inicial . Setar o gridItems como o temportario igual no if, e o contador para 0 tambem
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000)
        }

        //Setando a state do contador incrementando a cada 1 jogada feita, ao final ele vai incrementar o contador
        setMoveCount( moveCount => moveCount + 1)
      }

    }

  }, [shownCount, gridItems])

  //useEffect para verificar se o jogo ja acabou
  useEffect(() => {
    //Verifica se o moveCount > 0 , então quer dizer que tem alguma jogada. E se todos os itens estão com permanentShown true. Usa a função every que auxilia que se "todos" os itens satisfazerem uma condicional dentro do every, então o every retorna true. Então verifica se todos os permanentShown estiverem true , então ele vai retornar true, e mostra que o jogo esta finalizado.
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true
      )) {
        //Se ele terminar o jogo, ele seta o playing para false, que automaticamente, tudo para de funcionar. Unica coisa que vai funcionar na tela, é o botão de reiniciar , para poder reiniciar o game novamente.
        setPlaying(false)
    }

  }, [moveCount, gridItems])

  const resetAndCreateGrid = () => {//Passo a passo para criar o jogo
    // Passo 1ª  = Resetar o jogo  zerando os contadores
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    //Passo 2 Criar o Grid
    //2.1 - Criar um grid vazio
    let gridTemporario: GridItemType[] = []; //Cria um array temporario para guardar os items
    // Faz um for com tamanho dinamico de quantidade de items do grid multiplicado por 2 , e depois voce inseri dentro do array temporario que voce crio vazio , inseri um objeto contendo os items com as propriedades vazia e false para poder ser alterada futuramente. 
    for (let i = 0; i < (items.length * 2); i++) {
      gridTemporario.push({item: null, shown: false, permanentShown: false})
    }

    // 2.2 - Preencher o grid
    for(let w = 0; w < 2; w++) { //Como ele tem que ser selecionado o card 2 vezes primeiro cria um for com 2 items
      for(let i = 0; i < items.length; i++) {//Depois faz um for pelo tamanho total da variavel items
        let pos = -1; //Comeca uma pos -1 pois 0 ja vai ser 1 posição do array. -1 para poder entrar no while
        while(pos < 0 || gridTemporario[pos].item !== null) {
        //Faz uma verificação se tiver algum item acima de 0 , e algum item na posição que não tenha o null , ou seja se tiver algum item vazio . ele entra no while
          pos = Math.floor(Math.random() * (items.length * 2)); // Aqui preenche uma posição aleatoria. do valor total do array item vezes 2 pois seria o total de cards na tela. 
        }
        gridTemporario[pos].item = i; //Depois de sair do while ele vai achar o item vazio e vai preencher com o i
      }
    }


    //2.3 - jogar no state
    setGridItems(gridTemporario);

    // Passo 3 - Comecar o jogo
    setPlaying(true)

  }
  
  const handleItemClick = (index:number) => {
    //Faz uma verificação para ver se o jogo estiver rodando(playing estiver true), se o card que voce clico tiver alguma carta para mostrar(se o index tiver diferente de null  então tem algo para mostrar), e se o shownCount for menor que 2 para poder mostrar até 2 carta por vez
    if(playing && index !== null && shownCount < 2) {

      //Cria um array que vai ser a copia do array original , para não alterar direto do array original(da problema no react.)
      let tmpGrid = [...gridItems]
      
      //Faz outra verificação se o permanentShown e o shown do index tiverem false(então basicamente o card esta de costas.) , sendo assim agora tem que virar o card.
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {

        //Se ele tiver false. Agora voce coloca como true o shown para alterar visualmente na tela, e aquela index do card ou seja o card mesmo ,passa a ser true.
        tmpGrid[index].shown = true;
        //Depois de virada a carta o contador incrementa mais um numero.
        setShownCount(shownCount + 1)
      }

      //Depois de toda a modificação voce manda o clone que voce crio e fez toda a alteração nele , voce manda ele agora , para o react entender que voce ta mandando um array totalmente diferente do original , daquele que voce tinha antes. aquele la ta intacto.
      setGridItems(tmpGrid)
    }
  }



  return(
    <C.Container> 
      <C.Info>
        <C.LogoLink href=''>
          <img src={logoImage} alt="" width={200}/>
        </C.LogoLink>
        

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()}/>
        </C.InfoArea>  

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index)=> ( 
            //Faz um map para mostrar o que tiver la no array de itens , mostra o componente que vou criar e passar props para personalizar este componente.
            <GridItem 
            key={index}
            item={item}
            onClick={()=> handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App;