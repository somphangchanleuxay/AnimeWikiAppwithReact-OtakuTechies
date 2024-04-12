import { ChakraProvider, Center } from '@chakra-ui/react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Homepage from './components/Homepage'; // Import the Homepage component
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
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;