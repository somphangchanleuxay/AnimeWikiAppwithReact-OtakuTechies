import { ChakraProvider, Center } from '@chakra-ui/react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Homepage from './components/Homepage'; 
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import Contact from './components/Contact';
import LoginSignup from './components/LoginSignup';  
import './index.css';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Center> 
          <Navbar />
        </Center>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login-signup" element={<LoginSignup />} />

        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;