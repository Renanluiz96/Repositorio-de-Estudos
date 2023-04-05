import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { CarList } from './pages/CarList';

export const App = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path='/'  element={<CarList />}/>
      </Routes>
    </div>
  )
}

export default App;