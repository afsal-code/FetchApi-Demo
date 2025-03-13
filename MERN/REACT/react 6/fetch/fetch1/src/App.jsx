import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './Components/Detail';
import Buy from './Components/Buy';
import { useState } from 'react';

function App() {
  const[search,setSearch]=useState("")
  console.log(search)
  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
      <Route path="/" element={<Home search={search} />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/buy/:id" element={<Buy />} />
      </Routes>
    </Router>
  );
}

export default App;