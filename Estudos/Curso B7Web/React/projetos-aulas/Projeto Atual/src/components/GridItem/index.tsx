import { GridItemType } from '../../types/GridItemType'
import * as C from './styles'
import b7Svg from '../../svgs/b7.svg'
import { items } from '../../data/items'

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return(
        <C.Container 
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={b7Svg}  alt="" opacity={.1}/>
                //Faz uma verificação se  o item permanenteShow e o item shown tiver como false ele vai mostrar o componente com um icone especifico - que seria o icone da b7 que seria a parte de tras da carta
            }

            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon src={items[item.item].icon}  alt="" />
                //Se o permanenteShown e o shown tiverem true, e se tiver item para exibir(item !== null) então ele exibe o item. vai pegar o icone que esta da vez la do array , então se for o item do array na posição 2 ele vai pegar o icone 2 do objeto que vai conter todas as informação do array
            }
        </C.Container>
    )
}