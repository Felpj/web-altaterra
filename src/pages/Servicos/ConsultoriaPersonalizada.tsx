// src/pages/servicos/ConsultoriaPersonalizada.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const ConsultoriaPersonalizada: React.FC = () => {
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
              Consultoria Personalizada
            </Heading>
            <Text fontSize="xl">
              Oferecemos consultoria personalizada para atender às necessidades específicas do seu negócio, incluindo:
            </Text>
            <Image src="/consultoria1.jpeg" alt="Consultoria Personalizada" borderRadius="md" />
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
              Oferecemos consultoria personalizada para atender às necessidades específicas do seu negócio, incluindo:
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Análise Diagnóstica:</strong> Avaliação detalhada das operações e processos atuais.</ListItem>
              <ListItem><strong>Elaboração de Estratégias Personalizadas:</strong> Desenvolvimento de planos estratégicos alinhados aos objetivos do negócio.</ListItem>
              <ListItem><strong>Acompanhamento Contínuo:</strong> Monitoramento e ajustes contínuos para garantir o sucesso das estratégias implementadas.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Soluções Sob Medida</ListItem>
              <ListItem>Aumento da Eficiência Operacional</ListItem>
              <ListItem>Foco no Crescimento Sustentável</ListItem>
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
                Entre em Contato
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default ConsultoriaPersonalizada;
