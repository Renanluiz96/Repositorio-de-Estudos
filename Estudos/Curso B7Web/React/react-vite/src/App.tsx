import { Routes, Route } from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';

import { ContextProvider } from "./contexts/Context";

/* Context provider que estou usando e dentro dele coloquei a div com todo o site principal da aula. Agora vou ter acesso a variavel global la do contexto podendo usar aqui dentro , semprecisa chamar muitas props. Podendo acessar aqui dentro das paginas que eu tiver seja em uma route ou outra eu vou ter acesso a estas informações*/

function App() {
  return (
    <ContextProvider>
      <div>
        <h1>Título da página</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </ContextProvider>

  );
}

export default App;