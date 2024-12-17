import { ChakraProvider } from '@chakra-ui/react'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Servicos from './pages/Servicos/Servicos'
import Parceiros from './pages/Parceiros/Parceiros'
import Contato from './pages/Contato/Contato'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer'

function App() {

  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/parcerias" element={<Parceiros />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  )
}

export default App
