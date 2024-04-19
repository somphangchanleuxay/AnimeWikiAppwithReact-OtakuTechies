import React from 'react';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import AuthService from '../utils/auth';

const Navbar = () => {
  const location = useLocation();

  // Function to handle logout
  const handleLogout = () => {
    AuthService.logout();
  };

  // Render different elements based on the current route
  const renderNavbar = () => {
    // Get the user's profile
    const profile = AuthService.getProfile();
    // Extract username from profile
    const username = profile ? profile.username : null;

    if (
      location.pathname === '/home' ||
      location.pathname === '/login-signup' ||
      location.pathname === '/contact' ||
      location.pathname === '/services' ||
      location.pathname === '/about'
    ) {
      return (
        <Box bg="black" px={4} width="100%" display="flex" justifyContent="space-between" alignItems="center">
          {/* Otaku-Ani logo on the left */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ width: '131px', height: '81px', backgroundColor: 'black', fontFamily: 'Unica One', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '31px', color: 'white' }}>Otaku-Ani</div>
          </Link>
          {/* About, Services, and Contact links on the right */}
          <Flex alignItems="center">
            <Link href="/about" color="white" mr={4} fontSize="24px">
              About
            </Link>
            <Link href="/services" color="white" mr={4} fontSize="24px">
              Services
            </Link>
            <Link href="/contact" color="white" mr={4} fontSize="24px">
              Contact
            </Link>
            {/* Display the username if logged in */}
            {AuthService.loggedIn() && (
              <>
                <span style={{ color: 'white', fontSize: '16px', marginRight: '4px', backgroundColor:'#3182ce', width: '95px', textAlign: 'center', height: '41px', display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: '7px'}}>
                  Logged in
                </span>
                <Button colorScheme="red" ml={4} onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
            {/* Render login and sign up buttons */}
            {!AuthService.loggedIn() && (
              <>
                <Button colorScheme="blue" ml={4}>
                  <Link href="/login-signup" style={{ color: 'white', textDecoration: 'none' }}>
                    Login
                  </Link>
                </Button>
                <Button colorScheme="green" ml={4}>
                  <Link href="/login-signup" style={{ color: 'white', textDecoration: 'none' }}>
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </Flex>
        </Box>
      );
    } else {
      // Default navbar for other routes
      return (
        <Box bg="black" px={4} width="100%"> 
          <Flex direction="column" alignItems="center">
            {/* General navbar elements */}
            <Link href="/" color="white" fontSize="100px" fontFamily="Unica One" fontWeight="bold" mb={4}>
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