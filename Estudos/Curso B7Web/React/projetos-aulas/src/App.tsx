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
    if(playing && index !== null && shownCount > 2) {
      let tmpGrid = [...gridItems]
    }
  }


  return(
    <C.Container> 
      <C.Info>
        <C.LogoLink href=''>
          <img src={logoImage} alt="" />
        </C.LogoLink>
        

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value="0"/>
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