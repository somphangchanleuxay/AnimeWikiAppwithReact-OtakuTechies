
import Footer from './Footer';
// import Login from './Login'; // Import the Login component

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const LoginSignup = () => {
  const handleSubmitSignup = (event) => {
    event.preventDefault();
    console.log('Signing up...');
  };

  return (
    <>
      <Box
        minHeight="100vh"
        backgroundImage="url(https://wallpapercave.com/wp/crs8YVV.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        {/* Otaku Image */}
        <img src='/images/Otaku-Ani.gif' alt="Anime Image" style={{ maxWidth: '100%', borderRadius: '10px', marginBottom: '20px' }} />
        
        {/* Login and Signup Forms */}
        <Box
          backgroundColor="rgba(0, 0, 0, 0.5)"
          padding="20px"
          borderRadius="10px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          maxWidth="1200px"
          width="100%"
          margin="0 auto"
          marginTop="20px"
          marginBottom="20px"
        >
          {/* Login Form */}
          {/* <Stack spacing={3} style={{ width: '40%', padding: '20px' }}>
            <Login />
          </Stack> */}

          {/* "Or" */}
          <Box fontSize="3xl" fontWeight="bold" color="white" textAlign="center" width="10%">
            OR
          </Box>

          {/* Signup Form */}
          <form style={{ width: '40%', padding: '20px' }} onSubmit={handleSubmitSignup}>
            <Stack spacing={3}>
              <FormControl>
                <FormLabel htmlFor="signup-name" color="white">Name</FormLabel>
                <Input 
                  type="text" 
                  id="signup-name" 
                  placeholder="Name" 
                  bg="white"
                  color="black"
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="signup-email" color="white">Email</FormLabel>
                <Input 
                  type="email" 
                  id="signup-email" 
                  placeholder="Email" 
                  bg="white"
                  color="black"
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="signup-password" color="white">Password</FormLabel>
                <Input 
                  type="password" 
                  id="signup-password" 
                  placeholder="Password" 
                  bg="white"
                  color="black"
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue">Sign Up</Button>
            </Stack>
          </form>
        </Box>
      </Box>
      <Footer style={{ width: '100%'}} /> 
    </>
  );
};

export default LoginSignup;