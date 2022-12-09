import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Product';
import Chocparty from './pages/Chocparty';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Login from './pages/Login';
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;