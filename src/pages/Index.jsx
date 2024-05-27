import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <HStack spacing={4}>
          <Link href="#" fontSize="xl" fontWeight="bold">MyBlog</Link>
          <Link href="#"><FaHome /> Home</Link>
          <Link href="#"><FaUser /> About</Link>
          <Link href="#"><FaEnvelope /> Contact</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Login</Link>
          <Link href="#">Sign Up</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give a brief overview of the post.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give a brief overview of the post.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 3</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give a brief overview of the post.</Text>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderLeftWidth={{ md: "1px" }} mt={{ base: 4, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">About Me</Heading>
              <Text mt={4}>A brief bio about the blog author. This section can include a photo, a short description, and links to social media profiles.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Categories</Heading>
              <Text mt={4}>A list of blog categories or tags that help readers navigate the content.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Recent Posts</Heading>
              <Text mt={4}>Links to recent blog posts for quick access.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;