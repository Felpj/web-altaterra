// src/pages/servicos/RenegociacaoDividas.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const RenegociacaoDividas: React.FC = () => {
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
              Renegociação de Dívidas
            </Heading>
            <Text fontSize="xl">
              Estratégias eficazes para reestruturar dívidas e restabelecer o equilíbrio financeiro.
            </Text>
            <Image src="/images/renegociacao_dividas_destaque.jpg" alt="Renegociação de Dívidas" borderRadius="md" />
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
              Estratégias eficazes para reestruturar dívidas e restabelecer o equilíbrio financeiro. Com a parceria da <strong>StudioAgro</strong>, oferecemos:
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Análise Financeira Detalhada:</strong> Avaliação completa da situação financeira atual.</ListItem>
              <ListItem><strong>Negociação com Credores:</strong> Facilitação das negociações para condições mais favoráveis.</ListItem>
              <ListItem><strong>Elaboração de Planos de Reestruturação:</strong> Desenvolvimento de estratégias personalizadas para a recuperação financeira.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Estabilidade Financeira</ListItem>
              <ListItem>Redução de Custos</ListItem>
              <ListItem>Novas Oportunidades de Crescimento</ListItem>
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
                Agende uma Avaliação
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default RenegociacaoDividas;
