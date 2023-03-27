import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Título da página</h1>
      <hr />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/exibir" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;