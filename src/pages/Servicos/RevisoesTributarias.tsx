// src/pages/servicos/RevisoesTributarias.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const RevisoesTributarias: React.FC = () => {
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
              Revisões Tributárias
            </Heading>
            <Text fontSize="xl">
              Realizamos auditorias detalhadas e consultoria tributária para otimizar a eficiência fiscal e garantir conformidade com as regulamentações vigentes.
            </Text>
            <Image src="../public/tributario1.jpeg" alt="Revisões Tributárias" borderRadius="md" />
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
              Realizamos auditorias detalhadas e consultoria tributária para otimizar a eficiência fiscal e garantir conformidade com as regulamentações vigentes.
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Análise de Tributos e Impostos:</strong> Avaliação completa das obrigações fiscais da empresa.</ListItem>
              <ListItem><strong>Planejamento Tributário Estratégico:</strong> Desenvolvimento de estratégias para minimizar a carga tributária legalmente.</ListItem>
              <ListItem><strong>Compliance Fiscal:</strong> Garantia de conformidade com todas as regulamentações fiscais vigentes.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Otimização de Custos</ListItem>
              <ListItem>Segurança Jurídica</ListItem>
              <ListItem>Melhorias na Gestão Financeira</ListItem>
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
                Fale com um Especialista
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default RevisoesTributarias;
