// src/pages/servicos/AvaliacaoImoveis.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const AvaliacaoImoveis: React.FC = () => {
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
              Avaliação de Imóveis Rurais
            </Heading>
            <Text fontSize="xl">
              Com expertise e precisão, oferecemos serviços de avaliação de imóveis rurais, auxiliando em decisões financeiras e estratégicas.
            </Text>
            <Image src="/imovel1.jpeg" alt="Avaliação de Imóveis Rurais" borderRadius="md" />
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
              Com expertise e precisão, oferecemos serviços de avaliação de imóveis rurais, auxiliando em decisões financeiras e estratégicas.
            </Text>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem><strong>Avaliação Mercadológica:</strong> Determinação do valor de mercado das propriedades.</ListItem>
              <ListItem><strong>Laudos Técnicos:</strong> Documentos detalhados que respaldam a avaliação.</ListItem>
              <ListItem><strong>Consultoria para Negociações:</strong> Suporte especializado durante processos de compra, venda ou financiamento.</ListItem>
            </List>

            <Heading as="h3" size="lg" mt={8} color="#64b145">
              Benefícios
            </Heading>
            <List spacing={2} styleType="disc" pl={6}>
              <ListItem>Conhecimento do Valor Real das Propriedades</ListItem>
              <ListItem>Transparência nas Transações</ListItem>
              <ListItem>Base para Tomada de Decisões Estratégicas</ListItem>
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
                Solicite uma Avaliação
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default AvaliacaoImoveis;
