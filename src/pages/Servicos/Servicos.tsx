// src/pages/Servicos.tsx
import React from 'react';
import { Box, Heading, VStack, Container, SimpleGrid } from '@chakra-ui/react';
import CreditoRural from './CreditoRural';
import Seguros from './Seguros';
import RenegociacaoDividas from './RenegociacaoDividas';
import RevisoesTributarias from './RevisoesTributarias';
import FormacaoHoldings from './FormacaoHoldings';
import AvaliacaoImoveis from './AvaliacaoImoveis';
import ConsultoriaPersonalizada from './ConsultoriaPersonalizada';

// Importando todos os serviços

const Servicos: React.FC = () => {
  return (
    <Box bg="">
      {/* Seção de Introdução */}
      <Box bg="#331400" color="#ffffff" py={16}>
        <Container maxW="6xl">
          <VStack spacing={8} align="center">
            <Heading as="h1" size="2xl" color="#3aab36">
              Nossos Serviços
            </Heading>
            <Heading as="h3" size="md" textAlign="center">
              Soluções completas para otimizar, proteger e impulsionar o seu negócio no agronegócio.
            </Heading>
          </VStack>
        </Container>
      </Box>

      {/* Grid com todos os serviços */}
      <Box bg="#ffffff" py={16}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
            <CreditoRural />
            <Seguros />
            <RenegociacaoDividas />
            <RevisoesTributarias />
            <FormacaoHoldings />
            <AvaliacaoImoveis />
            <ConsultoriaPersonalizada />
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Servicos;
