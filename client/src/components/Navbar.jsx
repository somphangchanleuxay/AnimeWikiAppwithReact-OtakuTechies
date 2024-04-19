import { useState, useEffect } from 'react';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import AuthService from '../utils/auth';

const Navbar = () => {
  const location = useLocation();
  const [username, setUsername] = useState(null); // State to hold the username

  useEffect(() => {
    const updateProfile = () => {
      const profile = AuthService.getProfile();
      if (profile) {
        setUsername(profile.username); // Set username if profile exists
      } else {
        setUsername(null); // Reset username if no profile
      }
    };

    updateProfile(); // Call when component mounts
    return () => setUsername(null); // Clean up on unmount
  }, [location.pathname]); // Dependency on location.pathname to update on route change

  const handleLogout = () => {
    AuthService.logout();
    setUsername(null); // Reset username on logout
  };

  // Render different elements based on the current route
  const renderNavbar = () => {
    return (
      <Box bg="black" px={4} width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ width: '131px', height: '81px', backgroundColor: 'black', fontFamily: 'Unica One', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '31px', color: 'white' }}>Otaku-Ani</div>
        </Link>
        <Flex alignItems="center">
          <Link href="/about" color="white" mr={4} fontSize="24px">About</Link>
          <Link href="/services" color="white" mr={4} fontSize="24px">Services</Link>
          <Link href="/contact" color="white" mr={4} fontSize="24px">Contact</Link>
          {AuthService.loggedIn() ? (
            <>
              <span style={{ color: 'white', fontSize: '24px', marginRight: '4px' }}>
                Logged in as: {username}
              </span>
              <Button colorScheme="red" ml={4} onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
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
  };

  return renderNavbar();
};

export default Navbar;