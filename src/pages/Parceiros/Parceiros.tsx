// src/pages/Parceiros.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container, Button, List, ListItem, Link } from '@chakra-ui/react';

const Parceiros: React.FC = () => {
  return (
    <VStack spacing={8} align="stretch">
      {/* Seção de Introdução da Página de Parcerias */}
      <Box bg="#331400" color="#ffffff" py={16}>
        <Container maxW="6xl">
          <VStack spacing={8} align="center">
            <Heading as="h1" size="2xl" color="#3aab36">
              Nossas Parcerias
            </Heading>
            <Text fontSize="xl" textAlign="center">
              Colaborações estratégicas que ampliam as capacidades da Altaterra, oferecendo soluções integradas e maior valor aos nossos clientes.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Vida de Ouro */}
      <VStack spacing={0} align="stretch">
        {/* Seção do título e logo (Fundo Marrom) */}
        <Box 
          bg="#331400" 
          color="#ffffff" 
          py={16} 
          boxShadow="lg"
          borderRadius="md"
        >
          <Container maxW="6xl">
            <VStack spacing={8} align="start">
              <Heading as="h2" size="2xl" color="#3aab36">
                Vida de Ouro
              </Heading>
              <Text fontSize="xl">
                Excelência em seguros pessoais e empresariais, oferecendo soluções diferenciadas para o setor agrícola.
              </Text>
              {/* Logo da Vida de Ouro (Substituir pela logo real) */}
              <Image src="/images/vida_de_ouro_logo.jpg" alt="Vida de Ouro Logo" borderRadius="md" />
            </VStack>
          </Container>
        </Box>

        {/* Seção Descrição (Fundo Branco) */}
        <Box 
          bg="#ffffff" 
          color="#331400" 
          py={16} 
          boxShadow="lg" 
          borderRadius="md" 
          mt={8}
        >
          <Container maxW="6xl">
            <VStack spacing={8} align="start">
              <Heading as="h3" size="xl" color="#3aab36">
                Descrição
              </Heading>
              <Text>
                A <strong>Vida de Ouro</strong> é reconhecida pela excelência em seguros pessoais e empresariais. Nossa parceria permite oferecer seguros diferenciados, alinhados às necessidades do setor agrícola.
              </Text>
              <Heading as="h4" size="lg" mt={8} color="#64b145">
                Benefícios da Parceria
              </Heading>
              <List spacing={2} styleType="disc" pl={6}>
                <ListItem>Produtos Personalizados</ListItem>
                <ListItem>Atendimento Especializado</ListItem>
                <ListItem>Soluções Integradas</ListItem>
              </List>

              <Link
                href="https://chatgpt.com/c/6750b67f-56f4-800d-9818-d9fdb957a582?model=o1-preview#servicos"
                isExternal
              >
                <Button
                  mt={8}
                  size="lg"
                  bg="#3aab36"
                  color="#ffffff"
                  _hover={{ bg: '#64b145' }}
                >
                  Saiba Mais sobre Seguros
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      </VStack>

      {/* StudioAgro */}
      <VStack spacing={0} align="stretch">
        {/* Seção do título e logo (Fundo Marrom) */}
        <Box 
          bg="#331400" 
          color="#ffffff" 
          py={16} 
          boxShadow="lg"
          borderRadius="md"
        >
          <Container maxW="6xl">
            <VStack spacing={8} align="start">
              <Heading as="h2" size="2xl" color="#3aab36">
                StudioAgro
              </Heading>
              <Text fontSize="xl">
                Consultoria técnica e inovação no agronegócio, impulsionando eficiência e sustentabilidade.
              </Text>
              {/* Logo da StudioAgro (Substituir pela logo real) */}
              <Image src="/images/studioagro_logo.jpg" alt="StudioAgro Logo" borderRadius="md" />
            </VStack>
          </Container>
        </Box>

        {/* Seção Descrição (Fundo Branco) */}
        <Box 
          bg="#ffffff" 
          color="#331400" 
          py={16} 
          boxShadow="lg" 
          borderRadius="md" 
          mt={8}
        >
          <Container maxW="6xl">
            <VStack spacing={8} align="start">
              <Heading as="h3" size="xl" color="#3aab36">
                Descrição
              </Heading>
              <Text>
                Especializada em consultoria técnica e inovação no agronegócio, a <strong>StudioAgro</strong> traz soluções modernas que impulsionam a eficiência e a sustentabilidade das operações agrícolas.
              </Text>
              <Heading as="h4" size="lg" mt={8} color="#64b145">
                Benefícios da Parceria
              </Heading>
              <List spacing={2} styleType="disc" pl={6}>
                <ListItem>Equipe de Especialistas</ListItem>
                <ListItem>Inovação Tecnológica</ListItem>
                <ListItem>Soluções Sustentáveis</ListItem>
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
                  Conheça Nossas Soluções
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      </VStack>

      {/* Outras Parcerias */}
      <VStack spacing={0} align="stretch">
        {/* Seção Descrição (Fundo Branco) */}
        <Box 
          bg="#331400" 
          color="#ffffff" 
          py={16} 
          boxShadow="lg" 
          borderRadius="md" 
          mt={8}
        >
          <Container maxW="6xl">
            <VStack spacing={8} align="start">
              <Heading as="h3" size="xl" color="#3aab36">
                Descrição
              </Heading>
              <Text>
                Além da Vida de Ouro e da StudioAgro, a Altaterra está constantemente explorando novas oportunidades de colaboração com empresas, organizações e associações que possam agregar valor aos nossos clientes.
              </Text>

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
                  Entre em Contato para Parcerias
                </Button>
              </Link>
            </VStack>
          </Container>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Parceiros;
