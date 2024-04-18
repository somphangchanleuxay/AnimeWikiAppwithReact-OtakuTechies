import { useState } from 'react';
import Footer from './Footer';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_001cih8', 'template_x4cgo8j', e.target, 'wXU1oyIwgqiAUEKQD')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
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
        <Box
          backgroundColor="rgba(0, 0, 0, 0.5)"
          padding="20px"
          borderRadius="10px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="600px"
          width="100%"
          margin="0 auto"
        >
          <form style={{ width: '100%', padding: '20px' }} onSubmit={handleSubmit}>
            <Stack spacing={3} width="100%">
              <FormControl>
                <FormLabel htmlFor="name" color="white">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  bg="white"
                  color="black"
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" color="white">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  bg="white"
                  color="black"
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message" color="white">Message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  bg="white"
                  color="black"
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  required
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="100%">Send Message</Button>
            </Stack>
          </form>
        </Box>
      </Box>
      <Footer style={{ width: '100%' }} /> 
    </>
  );
};

export default Contact;