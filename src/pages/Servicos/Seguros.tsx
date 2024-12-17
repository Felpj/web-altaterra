// src/pages/servicos/Seguros.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const Seguros: React.FC = () => {
  return (
    <VStack spacing={0} align="stretch">
      {/* Seção do título e imagem de destaque (Fundo Marrom com boxShadow) */}
      <Box 
        bg="#331400" 
        color="#ffffff" 
        py={16} 
        boxShadow="lg"       // Adicionando boxShadow
        borderRadius="md"    // Adicionando borderRadius para cantos arredondados
      >
        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading as="h1" size="2xl" color="#3aab36">
              Seguros Rurais, Patrimoniais e Empresariais
            </Heading>
            <Text fontSize="xl">
              Proteja sua operação contra uma variedade de riscos com nossos seguros robustos.
            </Text>
            <Image src="/images/seguros_destaque.jpg" alt="Seguros" borderRadius="md" />
          </VStack>
        </Container>
      </Box>

      {/* Seção de descrição detalhada (Fundo Branco com boxShadow) */}
      <Box 
        bg="#ffffff" 
        color="#331400" 
        py={16} 
        boxShadow="lg"       // Adicionando boxShadow
        borderRadius="md"    // Adicionando borderRadius para cantos arredondados
        mt={8}               // Adicionando margem superior para separar das seções anteriores
      >
        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" color="#3aab36">
              Descrição
            </Heading>
            <Text>
              Proteja sua operação contra uma variedade de riscos com nossos seguros robustos. Em parceria com a <strong>Vida de Ouro</strong>, oferecemos:
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Seguro Agrícola:</strong> Proteção contra eventos climáticos, pragas e doenças.</ListItem>
              <ListItem><strong>Seguro Patrimonial:</strong> Cobertura para instalações, maquinários e equipamentos.</ListItem>
              <ListItem><strong>Seguro Empresarial:</strong> Proteção abrangente para o seu negócio.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Segurança e Tranquilidade</ListItem>
              <ListItem>Planos Personalizados</ListItem>
              <ListItem>Atendimento Ágil em Sinistros</ListItem>
            </List>

            <Link
              href="https://chatgpt.com/c/6750b67f-56f4-800d-9818-d9fdb957a582?model=o1-preview#contato"
              isExternal
            >
              <Button
                mt={8}
                size="lg"
                bg="#3aab36"
                color="#ffffff"
                _hover={{ bg: '#64b145' }}
              >
                Solicite uma Cotação
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default Seguros;
