import { Box, Flex, Link } from '@chakra-ui/react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <Box bg="black" px={4} width="100%"> 
      <Flex direction="column" alignItems="center">
      <Link href="/" color="white" fontSize="100px" fontWeight="bold" mb={4} className="unica-one-regular">
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
};


export default Navbar;
