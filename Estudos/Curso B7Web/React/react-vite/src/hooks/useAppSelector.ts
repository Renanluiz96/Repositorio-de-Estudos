//Pagina para concentrar o uso do hook useSelector - que serio hooke onde voce usa o reducer na pagina . Mas se tiver muitos reducers, isso vai causar grande quantidade de importação de arquivos . Então cria um arquivo onde voce importa o hook do useSelector, e o typedUseSelectorHook do redux , e importa o type RootState(type global) onde tem todas os types ja guardados.

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store";


//Criado o hook useSelector, tipado ja com o type rootState global. A magica esta no type pois la que ta toda a informação. Agora é só importar este hook tipado ja para qualquer lugar , da sua aplicação que ele ja vai ter acesso. a todos os reducers, voce apenas precisa escolher o que quer usar. Tudo isso em 1 import só 
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;