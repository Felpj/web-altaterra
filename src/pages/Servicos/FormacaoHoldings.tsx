// src/pages/servicos/FormacaoHoldings.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const FormacaoHoldings: React.FC = () => {
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
              Formação de Holdings
            </Heading>
            <Text fontSize="xl">
              Planejamento estratégico e estruturação de holdings para proteger ativos e maximizar retornos a longo prazo.
            </Text>
            <Image src="../public/holding1.jpeg" alt="Formação de Holdings" borderRadius="md" />
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
              Planejamento estratégico e estruturação de holdings para proteger ativos e maximizar retornos a longo prazo.
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Análise Patrimonial:</strong> Avaliação detalhada dos ativos e passivos da empresa.</ListItem>
              <ListItem><strong>Estruturação de Holdings Familiares e Empresariais:</strong> Organização societária para melhor gestão e proteção dos ativos.</ListItem>
              <ListItem><strong>Planejamento Sucessório:</strong> Desenvolvimento de estratégias para a sucessão eficiente dos negócios.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Proteção de Ativos</ListItem>
              <ListItem>Eficiência Tributária</ListItem>
              <ListItem>Continuidade dos Negócios</ListItem>
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
                Planeje com a Altaterra
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default FormacaoHoldings;
