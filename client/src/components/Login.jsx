import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useState } from 'react'; 

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
const __DEV__ = true
if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...formState } });
      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
      }
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
      <form 
      onSubmit={handleSubmit}
      >
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

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client/dev';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Login = (props) => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error, data }] = useMutation(LOGIN_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setFormState({
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Login</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Login;
