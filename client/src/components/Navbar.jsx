import { useLocation } from 'react-router-dom';
import { Box, Flex, Link, Button} from '@chakra-ui/react';

const Navbar = () => {
  const location = useLocation();

  // Render different elements based on the current route
  const renderNavbar = () => {
    if (location.pathname === '/home') {
      return (
        <Box bg="black" px={4} width="100%" display="flex" justifyContent="space-between" alignItems="center">
          {/* Otaku-Ani logo on the left */}
          
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ width: '131px', height: '81px', backgroundColor: 'black', fontFamily: 'Unica One', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '31px', color: 'white' }}>Otaku-Ani</div>
          </Link>
          {/* About, Services, and Contact links on the right */}
          <Flex>
          <Link href="/about" color="white" mr={4} fontSize="24px" ml={2}>About</Link>
            <Link href="/services" color="white" mr={4} fontSize="24px" ml={2}>Services</Link>
            <Link href="/contact" color="white" mr={4} fontSize="24px" ml={2}>Contact</Link>
            <Button colorScheme="blue" ml={4}>Login</Button>
            <Button colorScheme="green" ml={4}>Sign Up</Button>
          </Flex>
        </Box>
      );
    } else {
      // Default navbar for other routes
      return (
        <Box bg="black" px={4} width="100%"> 
          <Flex direction="column" alignItems="center">
            {/* General navbar elements */}
            <Link href="/" color="white" fontSize="100px" fontFamily= 'Unica One' fontWeight="bold" mb={4}>
              Otaku-Ani
            </Link>
            <Flex>
              <Link href="/about" color="white" mr={24} fontSize="28px">
                About
              </Link>
              <Link href="/services" color="white" mr={24} fontSize="28px">
                Services
              </Link>
              <Link href="/contact" color="white" fontSize="28px">
                Contact
              </Link>
            </Flex>
          </Flex>
        </Box>
      );
    }
  };

  return renderNavbar();
};

export default Navbar;