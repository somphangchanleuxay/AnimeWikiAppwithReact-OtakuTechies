import { ChakraProvider, Center } from '@chakra-ui/react'; // Import Center from Chakra UI
import Navbar from './components/Navbar';
import Body from './components/Body';
import './index.css';

const App = () => {
  return (
    <ChakraProvider>
      <Center>
        <Navbar />
      </Center>
        <Body />
    </ChakraProvider>
  );
};

export default App;