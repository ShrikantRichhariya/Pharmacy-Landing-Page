
import './App.css';

import Card from './Components/Card';
import { Routes, Route } from 'react-router-dom';
import Dummy from './Components/Dummy';
import Pharmacy from './Components/Pharmacy';


function App() {
  
  return (
    <>
      <div>
        <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/pharmacy/:pharmacyName" element={<Pharmacy/>}/>
      </Routes>
      </div>
    </>
  );
}




export default App;
