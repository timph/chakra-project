import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, HStack } from '@chakra-ui/react'
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Box w="100%">
      <HStack 
        gap={6} 
        p={4} 
        as="nav" 
        position="fixed" 
        top={0} 
        width="100%" 
        bg="white" 
        boxShadow="sm"
        zIndex={1}
      >
        <RouterLink to="/home" style={{ color: 'blue' }}>Home</RouterLink>
        <RouterLink to="/pokemon" style={{ color: 'blue' }}>Pokemon</RouterLink>
      </HStack>

      <Container maxW="container.xl" pt={6}>
        <Outlet />
      </Container>
    </Box>
  )
}