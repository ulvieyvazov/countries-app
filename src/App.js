import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/countries';
import Header from './components/Header/header';
import CatagoryDetail from './components/CatagoryDetail';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Countries />} >
          <CatagoryDetail/>
        </Route>
      </Routes>
    </>
  );
}

export default App;