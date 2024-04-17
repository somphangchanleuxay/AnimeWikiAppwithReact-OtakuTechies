import { ChakraProvider, Center } from '@chakra-ui/react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Homepage from './components/Homepage'; 
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
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;