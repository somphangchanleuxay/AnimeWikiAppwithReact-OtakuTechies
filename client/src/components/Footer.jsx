import { Box, Flex, Link, Text } from '@chakra-ui/react';
import '../css/Footer.css'; 

function Footer() {
  return (
<Box as="footer" bg="gray.800" color="white" py={4} px={8} bottom="0" left="0" width="100%">
  <Flex justify="center" align="center">
  <Text fontSize="md" className="footer-link">
      <Link href="/home">Search</Link>
    </Text>
    <Text fontSize="md" className="footer-link" mr={4}>
      <Link href="/about">About Us</Link>
    </Text>
    <Text fontSize="md" className="footer-link" mr={4}>
      <Link href="/contact">Contact Us</Link>
    </Text>
    <Text fontSize="md" className="footer-link">
      <Link href="/services">Our Services</Link>
    </Text>
  </Flex>
</Box>
  )
}

export default Footer;