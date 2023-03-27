import { Routes, Route } from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';

import { ContextProvider } from "./contexts/Context";

const App = () => {
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