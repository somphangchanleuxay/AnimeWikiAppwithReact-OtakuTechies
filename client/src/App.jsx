import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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
import Favorites from './components/Favorites';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
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
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;