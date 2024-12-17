// src/pages/servicos/CreditoRural.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const CreditoRural: React.FC = () => {
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
              Crédito Rural
            </Heading>
            <Text fontSize="xl">
              Linhas de crédito adaptáveis para apoiar cada fase do seu ciclo produtivo.
            </Text>
            <Image src="/images/credito_rural_destaque.jpg" alt="Crédito Rural" borderRadius="md" />
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
              Oferecemos linhas de crédito adaptáveis para apoiar cada fase do ciclo produtivo, desde a preparação até a colheita. Facilitamos o acesso aos principais bancos e fundos de investimento do Brasil, proporcionando financiamento para:
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Custeio:</strong> Cobertura de despesas operacionais.</ListItem>
              <ListItem><strong>Aquisição de Maquinário:</strong> Investimentos em equipamentos modernos.</ListItem>
              <ListItem><strong>Construção de Silos e Barracões:</strong> Expansão e melhoria da infraestrutura.</ListItem>
              <ListItem><strong>Financiamento de Propriedades Rurais:</strong> Aquisição e ampliação de terras.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Flexibilidade Financeira</ListItem>
              <ListItem>Taxas Competitivas</ListItem>
              <ListItem>Suporte Especializado</ListItem>
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
                Solicite uma Consulta
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default CreditoRural;
