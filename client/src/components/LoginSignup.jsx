
import Footer from './Footer';
import Login from './Login'; 
import Signup from './Signup';


import {
  Box,

} from '@chakra-ui/react';

const LoginSignup = () => {


  return (
    <>
      <Box
        minHeight="100vh"
        backgroundImage="url(https://wallpapercave.com/wp/crs8YVV.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
      
        
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
          {/* <Stack spacing={3} style={{ width: '40%', padding: '20px' }}> */}
            <Login />
          {/* </Stack> */}

          {/* "Or" */}
          <Box fontSize="3xl" fontWeight="bold" color="white" textAlign="center" width="10%">
            OR
          </Box>

          {/* Signup Form */}
          <Signup />
        </Box>
      </Box>
      <Footer style={{ width: '100%'}} /> 
    </>
  );
};

export default LoginSignup;