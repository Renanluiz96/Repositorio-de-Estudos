import { useEffect, useState } from 'react';
import * as C from './App.styles'; //Importa o arquivo de estilos do styled componentes . Importei tudo e alterei o nome para 'C'
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import RestartIcon from './svgs/restart.svg'

const App = () => {
  // State para saber so o jogo esta rolando ou não.
  const [playing, setPlaying] = useState<boolean>(false);
  //State para saber os segundos que passou des do comeco do jogo comeca como 0 e vai alterando a state de 1 em 1 segundo
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  //State para cada movimento que foi feito , ou seja cada vez que clico no card .
  const [moveCount, setMoveCount] = useState<number>(0);
  //
  const [shownCount, setShownCount] = useState(0);
  //
  const [gridItems, setGridItems] = useState(false);


  useEffect(() => resetAndCreateGrid(), []
  )

  const resetAndCreateGrid = () => {

  }

  return(
    <C.Container> 
      <C.Info>
        <C.LogoLink href=''>
          <img src={logoImage} alt="" />
        </C.LogoLink>
        

        <C.InfoArea>
          <InfoItem label="Tempo" value="00-00" />
          <InfoItem label="Movimentos" value="0"/>
        </C.InfoArea>  

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>

        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App;