// src/components/Footer.tsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container, 
  SimpleGrid, 
  Link, 
  HStack, 
  Icon 
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Box bg="#331400" color="#ffffff" py={10} px={4} mt={16}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          
          {/* Menus Rápidos */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color="#3aab36">Menu Rápido</Heading>
            <Link as={RouterLink} to="/quem-somos" _hover={{ color: "#64b145" }}>
              Quem Somos
            </Link>
            <Link as={RouterLink} to="/servicos" _hover={{ color: "#64b145" }}>
              Serviços
            </Link>
            <Link as={RouterLink} to="/parcerias" _hover={{ color: "#64b145" }}>
              Parcerias
            </Link>
            <Link as={RouterLink} to="/blog" _hover={{ color: "#64b145" }}>
              Blog
            </Link>
            <Link as={RouterLink} to="/contato" _hover={{ color: "#64b145" }}>
              Contato
            </Link>
          </VStack>

          {/* Informações Legais */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color="#3aab36">Informações Legais</Heading>
            <Link as={RouterLink} to="/politica-de-privacidade" _hover={{ color: "#64b145" }}>
              Política de Privacidade
            </Link>
            <Link as={RouterLink} to="/termos-de-uso" _hover={{ color: "#64b145" }}>
              Termos de Uso
            </Link>
          </VStack>

          {/* Redes Sociais */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color="#3aab36">Redes Sociais</Heading>
            <HStack spacing={4}>
              <Link href="https://www.instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} color="#ffffff" _hover={{ color: "#64b145" }} />
              </Link>
              <Link href="https://www.linkedin.com" isExternal>
                <Icon as={FaLinkedin} boxSize={6} color="#ffffff" _hover={{ color: "#64b145" }} />
              </Link>
              <Link href="https://www.facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} color="#ffffff" _hover={{ color: "#64b145" }} />
              </Link>
            </HStack>
          </VStack>

          {/* Dados de Contato */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color="#3aab36">Contato</Heading>
            <Text>
              <strong>Endereço:</strong><br/>
              Rua das Flores, 123, São Paulo, SP
            </Text>
            <Text>
              <strong>Telefones:</strong><br/>
              Comercial: (11) 1234-5678<br/>
              Suporte: (11) 8765-4321
            </Text>
            <Text>
              <strong>E-mail:</strong><br/>
              contato@altaterra.com.br
            </Text>
          </VStack>

        </SimpleGrid>

        {/* Informações Legais e Direitos Autorais */}
        <Box mt={10} textAlign="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Altaterra Assessoria e Corretagem de Seguros Ltda. Todos os direitos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
