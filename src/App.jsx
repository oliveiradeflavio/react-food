
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home/Home'
import CardapioOnline from './pages/CardapioOnline/CardapioOnline'
import Carrinho from "./pages/Carrinho/Carrinho"

// components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// context
import { CartProvider } from './context/CartContext'


function App() {

  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cardapio-online' element={<CardapioOnline />} />
            <Route path='/carrinho' element={<Carrinho />} />
          </Routes>

          <Footer />
        </BrowserRouter>

      </CartProvider>

    </>
  )
}

export default App
