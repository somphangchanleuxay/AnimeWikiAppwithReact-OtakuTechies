import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useState } from 'react'; 

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER); // Removed 'data' from destructuring

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({ email: '', password: '' });
  };

  return (
    <Box
      maxWidth="600px"
      width="100%"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      padding="20px"
      borderRadius="10px"
      margin="20px auto"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel htmlFor="email" color="white">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              bg="white"
              color="black"
              _placeholder={{ color: 'gray.400' }}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password" color="white">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
              bg="white"
              color="black"
              _placeholder={{ color: 'gray.400' }}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">Login</Button>
        </Stack>
      </form>

      {error && (
        <Box my={3} p={3} bg="red.500" color="white">
          {error.message}
        </Box>
      )}
    </Box>
  );
};

export default Login;