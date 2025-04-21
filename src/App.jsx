import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './Components/Detail';
 import { useState } from 'react';
import Cart from './Components/Cart';

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/detail/:id" element={<Detail />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
