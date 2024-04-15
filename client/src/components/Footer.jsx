import { Box, Flex, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} px={8}>
      <Flex justify="center">
        <Text fontSize="md">
          <Link href="#">About Us</Link>
        </Text>
        <Text fontSize="md" mx={4}>
          <Link href="#">Contact Us</Link>
        </Text>
        <Text fontSize="md">
          <Link href="#">Privacy Policy</Link>
        </Text>
        <Text fontSize="md" mx={4}>
          <Link href="#">Terms of Service</Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;

