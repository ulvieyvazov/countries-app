import { Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/countries';
import Header from './components/Header/header';
import CatagoryDetail from './components/Countries/CatagoryDetail';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Countries/>} ></Route>
        <Route path="/name/:name" element={<CatagoryDetail/>}></Route>
      </Routes>
    </>
  );
}

export default App;