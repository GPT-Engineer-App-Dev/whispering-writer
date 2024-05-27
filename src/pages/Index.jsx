import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaMoon, FaSun } from "react-icons/fa"; // Import icons for dark mode toggle
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode(); // Use Chakra UI's color mode hook

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg={colorMode === "light" ? "gray.800" : "gray.200"} color={colorMode === "light" ? "white" : "black"} p={4} align="center">
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">MyBlog</Link>
          <Link as={RouterLink} to="/"><FaHome /> Home</Link>
          <Link as={RouterLink} to="#"><FaUser /> About</Link>
          <Link as={RouterLink} to="#"><FaEnvelope /> Contact</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
          <Link as={RouterLink} to="#">Login</Link>
          <Link as={RouterLink} to="#">Sign Up</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Button as={RouterLink} to="/add-post" colorScheme="blue" mb={4}>
            Add New Post
          </Button>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
                <Text mt={4} fontSize="sm" color="gray.500">{post.date}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg={colorMode === "light" ? "gray.50" : "gray.700"} borderLeftWidth={{ md: "1px" }} mt={{ base: 4, md: 0 }}>
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