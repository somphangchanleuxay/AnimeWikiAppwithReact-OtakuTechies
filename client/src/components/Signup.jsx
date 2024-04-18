import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { useState } from 'react'; 

const Signup = ()=> {  
    const handleSubmitSignup = (event) => {
    event.preventDefault();
    console.log('Signing up...');
  };
return (
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

)}

export default Signup;