import './App.css'
import Nav from './components/Nav/Nav'
import Produtos from './components/Produtos/Produtos'
import Sobre from './components/Sobre/Sobre'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
