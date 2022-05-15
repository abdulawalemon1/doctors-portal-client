import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Home/Home/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
