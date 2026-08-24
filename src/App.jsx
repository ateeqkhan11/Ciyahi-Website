import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import About from './pages/About'
import Industries from './pages/Industries'
import UseCases from './pages/UseCases'
import DocumentIntelligence from './pages/DocumentIntelligence'
import InvoAIce from './pages/InvoAIce'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/user-stories" element={<UseCases />} />
        <Route path="/use-cases" element={<Navigate to="/user-stories" replace />} />
        <Route path="/document-intelligence" element={<DocumentIntelligence />} />
        <Route path="/invoaice" element={<InvoAIce />} />
        <Route path="/insights" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
