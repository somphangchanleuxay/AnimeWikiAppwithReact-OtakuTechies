import { Box, Flex, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} px={8} bottom="0" left="0" width="100%">
      <Flex justify="center">
        <Text fontSize="md">
          <Link href="/about">About Us</Link>
        </Text>
        <Text fontSize="md" mx={4}>
          <Link href="/contact">Contact Us</Link>
        </Text>
        <Text fontSize="md" mx={4}>
          <Link href="/services">Services</Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
