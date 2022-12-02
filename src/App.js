import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Product';
import Chocparty from './pages/Chocparty';
import {Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/chocparty" element={<Chocparty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;