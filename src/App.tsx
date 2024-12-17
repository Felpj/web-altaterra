import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Button, ChakraProvider, Heading, Text } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Box textAlign="center" p={6} bg="gray.50" minH="100vh">
        <Heading mb={4} color="blue.700">
          Bem-vindo ao Chakra UI!
        </Heading>
        <Text fontSize="lg" mb={4}>
          Este é um exemplo básico usando Chakra UI com React e TypeScript.
        </Text>
        <Button colorScheme="teal" size="lg" leftIcon={<CheckCircleIcon />}>
          Teste Chakra UI
        </Button>
      </Box>
    </ChakraProvider>
  )
}

export default App
