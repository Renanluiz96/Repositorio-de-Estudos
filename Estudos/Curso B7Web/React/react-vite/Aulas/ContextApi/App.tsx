import { Routes, Route } from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';

import { Context } from "./contexts/ContextReducer";
import { useContext } from "react";

/* Context provider que estou usando e dentro dele coloquei a div com todo o site principal da aula. Agora vou ter acesso a variavel global la do contexto podendo usar aqui dentro , semprecisa chamar muitas props. Podendo acessar aqui dentro das paginas que eu tiver seja em uma route ou outra eu vou ter acesso a estas informações*/

function App() {

  const {state, dispatch} = useContext(Context)

  const handleSwitchTheme = () => {
    if(state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      });
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {status: 'light'}
      });
    }
  }

  return (
    <div style={{
      backgroundColor: state.theme.status === 'light' ? '#fff' : '#000',
      color: state.theme.status === 'light' ? '#000' : '#FFF'
    }}>
      <h1>Título da página</h1>
      Tema: {state.theme.status}
      <button onClick={handleSwitchTheme}>Switch Theme</button>
      <br/><hr/><br/>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/exibir" element={<ShowData />} />
      </Routes>
    </div>
  );
}

export default App;