import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer'
import Photography from './Pages/Photography';
import Films from './Pages/Films';
import Gallery from './Components/Gallery'
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/films" element={<Films />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/watch/:id' element={<Gallery/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
