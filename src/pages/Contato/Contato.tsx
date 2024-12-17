// src/pages/Contato.tsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Select, 
  SimpleGrid, 
  Link, 
  HStack, 
  Icon 
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contato: React.FC = () => {
  return (
    <VStack spacing={0} align="stretch">
      {/* Seção Introdução (Fundo Marrom) */}
      <Box 
        bg="#331400" 
        color="#ffffff" 
        py={16} 
        boxShadow="lg" 
        borderRadius="md"
      >
        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading as="h1" size="2xl" color="#3aab36">
              Entre em Contato
            </Heading>
            <Text fontSize="xl">
              Estamos prontos para ajudar você a otimizar seus recursos e proteger seu patrimônio. Entre em contato conosco para agendar uma consulta ou esclarecer suas dúvidas.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Seção Detalhes (Fundo Branco) */}
      <Box 
        bg="#ffffff" 
        color="#331400" 
        py={16} 
        boxShadow="lg" 
        borderRadius="md"
        mt={8}
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Coluna do Formulário */}
            <VStack align="start" spacing={8}>
              <Heading as="h2" size="xl" color="#3aab36">
                Formulário de Contato
              </Heading>
              <FormControl isRequired>
                <FormLabel>Nome Completo</FormLabel>
                <Input placeholder="Seu nome" bg="#f9f9f9" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input type="email" placeholder="seuemail@exemplo.com" bg="#f9f9f9" />
              </FormControl>

              <FormControl>
                <FormLabel>Telefone</FormLabel>
                <Input placeholder="(xx) xxxxx-xxxx" bg="#f9f9f9" />
              </FormControl>

              <FormControl>
                <FormLabel>Assunto</FormLabel>
                <Select placeholder="Selecione um assunto" bg="#f9f9f9">
                  <option value="credito">Crédito Rural</option>
                  <option value="seguros">Seguros</option>
                  <option value="renegociacao">Renegociação de Dívidas</option>
                  <option value="revisoes">Revisões Tributárias</option>
                  <option value="holdings">Formação de Holdings</option>
                  <option value="avaliacao">Avaliação de Imóveis Rurais</option>
                  <option value="consultoria">Consultoria Personalizada</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="outros">Outros</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Mensagem</FormLabel>
                <Textarea placeholder="Escreva sua mensagem" bg="#f9f9f9" />
              </FormControl>

              <Button
                mt={4}
                size="lg"
                bg="#3aab36"
                color="#ffffff"
                _hover={{ bg: '#64b145' }}
              >
                Enviar Mensagem
              </Button>
            </VStack>

            {/* Coluna Informações de Contato e Mapa */}
            <VStack align="start" spacing={8}>
              <Heading as="h2" size="xl" color="#3aab36">
                Informações de Contato
              </Heading>
              <Text>
                <strong>Endereço:</strong><br />
                Rua das Flores, 123, São Paulo, SP
              </Text>
              <Text>
                <strong>Telefones:</strong><br />
                Comercial: (11) 1234-5678<br />
                Suporte: (11) 8765-4321
              </Text>
              <Text>
                <strong>E-mails:</strong><br />
                Geral: contato@altaterra.com.br<br />
                Suporte: suporte@altaterra.com.br
              </Text>
              <Text>
                <strong>Horário de Atendimento:</strong><br />
                Segunda a Sexta: 8h às 18h
              </Text>

              <Heading as="h3" size="lg" color="#3aab36" pt={8}>
                Mapa de Localização
              </Heading>
              <Box width="100%" height="300px" borderRadius="md" overflow="hidden" boxShadow="md">
                {/* Ajuste a URL do iframe para a localização exata da empresa */}
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8939080314135!2d-46.663114684463555!3d-23.536300466767025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ce5a0a66d1%3A0xf2a2e3db3aacb665!2sAv.%20Paulista%2C%202000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1690320000000!5m2!1sen!2sbr"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Mapa de Localização"
                />
              </Box>

              <Heading as="h3" size="lg" color="#3aab36" pt={8}>
                Redes Sociais
              </Heading>
              <HStack spacing={4}>
                <Link href="https://www.instagram.com" isExternal>
                  <Icon as={FaInstagram} boxSize={8} color="#3aab36" _hover={{ color: '#64b145' }} />
                </Link>
                <Link href="https://www.linkedin.com" isExternal>
                  <Icon as={FaLinkedin} boxSize={8} color="#3aab36" _hover={{ color: '#64b145' }} />
                </Link>
                <Link href="https://www.facebook.com" isExternal>
                  <Icon as={FaFacebook} boxSize={8} color="#3aab36" _hover={{ color: '#64b145' }} />
                </Link>
              </HStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </VStack>
  );
};

export default Contato;
