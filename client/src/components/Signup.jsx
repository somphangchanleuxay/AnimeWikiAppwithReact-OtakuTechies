import { Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useState } from 'react'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [signup, { loading, error }] = useMutation(SIGNUP_USER);
  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: formData
      });

      Auth.login(data.signup.token); // Assuming your signup mutation returns a token
      toast({
        title: "Signup Successful",
        description: "You have successfully signed up!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Signup Failed",
        description: e.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form style={{ width: '40%', padding: '20px' }} onSubmit={handleSubmitSignup}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel htmlFor="signup-name" color="white">Name</FormLabel>
          <Input 
            type="text" 
            id="signup-name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name" 
            bg="white"
            color="black"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="signup-email" color="white">Email</FormLabel>
          <Input 
            type="email" 
            id="signup-email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email" 
            bg="white"
            color="black"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="signup-password" color="white">Password</FormLabel>
          <Input 
            type="password" 
            id="signup-password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password" 
            bg="white"
            color="black"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>
        <Button isLoading={loading} type="submit" colorScheme="blue">Sign Up</Button>
      </Stack>
    </form>
  );
};

export default Signup;