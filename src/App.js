import './App.css';
import Home from './component/Home/Home';
import CloudSoft from './component/CloudSoftware/CloudSoft';
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
function App() {
  return (
  <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cloud' element={<CloudSoft />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </>
  );
}

export default App;
