import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { CarList } from './pages/CarList';
import { NotFound } from './pages/NotFound';
import { EditCar } from './pages/EditCar';

export const App = () => {
  return (
    <div className='container'>
      <Header />

      <Routes>
        <Route path='/'  element={<CarList />}/>
        <Route path='/car'  element={<EditCar />}/>
        <Route path='*'  element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App;