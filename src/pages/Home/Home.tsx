// src/pages/Home.tsx
import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container, 
  Image, 
  Button, 
  SimpleGrid, 
  FormControl, 
  FormLabel, 
  Input, 
  Select, 
  HStack 
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <VStack spacing={0} align="stretch">
      
{/* Banner Principal */}
<Box
  position="relative"
  color="#ffffff"
  py={{ base: 8, md: 16 }} // Reduz o padding no mobile
  px={4}
  boxShadow="lg"
  borderRadius="md"
  backgroundImage="url('../public/fundoHome1.jpeg')"
  backgroundSize={{ base: "cover", md: "cover" }} // Ajusta tamanho da imagem
  backgroundPosition={{ base: "center", md: "center" }} // Centraliza em todas as telas
  height={{ base: "60vh", sm: "70vh", md: "80vh" }} // Ajusta a altura em dispositivos menores
  width="100%"
  overflow="hidden"
  _before={{
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)", // Escurecimento sutil
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.6)", // Sombra escura
    zIndex: 1, // Coloca a camada atrás do conteúdo
  }}
>
  <Container maxW="6xl" position="relative" zIndex={2}>
    <VStack spacing={8} align="center" textAlign="center">
      <Heading
        marginTop={{ base: "40px", md: "80px" }} // Ajusta margem no mobile
        as="h1"
        size={{ base: "lg", sm: "xl", md: "2xl" }} // Reduz o tamanho da fonte em telas menores
        color="#3aab36"
      >
        Transformando Desafios em Oportunidades no Agronegócio
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }}>
        Soluções Financeiras, Tributárias e Securitárias Personalizadas para o Seu Negócio
      </Text>

      <HStack spacing={4} flexWrap="wrap" justify="center">
        <Button
          as={RouterLink}
          to="/quem-somos"
          size="md"
          bg="#3aab36"
          color="#ffffff"
          _hover={{ bg: "#64b145" }}
        >
          Conheça a Altaterra
        </Button>
        <Button
          as={RouterLink}
          to="/servicos"
          size="md"
          bg="#3aab36"
          color="#ffffff"
          _hover={{ bg: "#64b145" }}
        >
          Nossos Serviços
        </Button>
      </HStack>
    </VStack>
  </Container>
</Box>




      {/* Quem Somos (Resumo) - Fundo Branco */}
      <Box 
        bg="#ffffff" 
        color="#331400"
        py={16}
        boxShadow="lg"
        borderRadius="md"
        mt={8}
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={8}>
              <Heading as="h2" size="xl" color="#3aab36">
                Quem Somos
              </Heading>
              <Text>
                A Altaterra tem como missão equipar produtores rurais e empresários do agronegócio com estratégias e ferramentas para prosperarem. Nossa experiência e dedicação garantem soluções sob medida, transformando desafios em oportunidades.
              </Text>
              <Button 
                as={RouterLink} 
                to="/quem-somos" 
                size="lg" 
                bg="#3aab36"
                color="#ffffff"
                _hover={{ bg: '#64b145' }}
              >
                Saiba Mais
              </Button>
            </VStack>
            <Image 
              src="/images/quem_somos_resumo.jpg" 
              alt="Equipe da Altaterra" 
              borderRadius="md" 
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Nossas Soluções (Resumo dos Serviços) - Fundo Marrom */}
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
            <Heading as="h2" size="xl" color="#3aab36">
              Nossas Soluções
            </Heading>
            <Text fontSize="lg">
              Conheça algumas de nossas principais soluções para o agronegócio:
            </Text>
            
            {/* Grid de Serviços com Ícones/Imagens e Breve Descrição */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {/* Exemplo de 3 colunas por linha, ajustar conforme a quantidade de serviços */}
              <VStack align="start" spacing={4} bg="#ffffff" color="#331400" p={4} borderRadius="md">
                <Image src="../public/ruralCredit.webp" alt="Crédito Rural" borderRadius="md" />
                <Heading as="h3" size="md" color="#3aab36">Crédito Rural</Heading>
                <Text fontSize="sm">Linhas de financiamento adaptáveis a cada fase do ciclo produtivo.</Text>
                <Button as={RouterLink} to="/servicos/credito-rural" size="sm" bg="#3aab36" color="#ffffff" _hover={{ bg: '#64b145' }}>
                  Ver Mais
                </Button>
              </VStack>

              <VStack align="start" spacing={4} bg="#ffffff" color="#331400" p={4} borderRadius="md">
                <Image src="../public/seguro.webp" alt="Seguros" borderRadius="md" />
                <Heading as="h3" size="md" color="#3aab36">Seguros</Heading>
                <Text fontSize="sm">Proteja sua operação contra riscos climáticos e imprevistos.</Text>
                <Button as={RouterLink} to="/servicos/seguros" size="sm" bg="#3aab36" color="#ffffff" _hover={{ bg: '#64b145' }}>
                  Ver Mais
                </Button>
              </VStack>

              <VStack align="start" spacing={4} bg="#ffffff" color="#331400" p={4} borderRadius="md">
                <Image src="../public/divida.webp" alt="Renegociação de Dívidas" borderRadius="md" />
                <Heading as="h3" size="md" color="#3aab36">Renegociação de Dívidas</Heading>
                <Text fontSize="sm">Reestruture dívidas e recupere o equilíbrio financeiro.</Text>
                <Button as={RouterLink} to="/servicos/renegociacao-dividas" size="sm" bg="#3aab36" color="#ffffff" _hover={{ bg: '#64b145' }}>
                  Ver Mais
                </Button>
              </VStack>

              <VStack align="start" spacing={4} bg="#ffffff" color="#331400" p={4} borderRadius="md">
                <Image src="../public/tributario.webp" alt="Revisões Tributárias" borderRadius="md" />
                <Heading as="h3" size="md" color="#3aab36">Revisões Tributárias</Heading>
                <Text fontSize="sm">Otimização fiscal e compliance para seu negócio.</Text>
                <Button as={RouterLink} to="/servicos/revisoes-tributarias" size="sm" bg="#3aab36" color="#ffffff" _hover={{ bg: '#64b145' }}>
                  Ver Mais
                </Button>
              </VStack>

              <VStack align="start" spacing={4} bg="#ffffff" color="#331400" p={4} borderRadius="md">
                <Image src="../public/holding.webp" alt="Formação de Holdings" borderRadius="md" />
                <Heading as="h3" size="md" color="#3aab36">Formação de Holdings</Heading>
                <Text fontSize="sm">Estruture seu negócio para o longo prazo e sucessão.</Text>
                <Button as={RouterLink} to="/servicos/formacao-holdings" size="sm" bg="#3aab36" color="#ffffff" _hover={{ bg: '#64b145' }}>
                  Ver Mais
                </Button>
              </VStack>

              <VStack align="start" spacing={4} bg="#ffffff" color="#331400" p={4} borderRadius="md">
                <Image src="../public/imovel.webp" alt="Avaliação de Imóveis Rurais" borderRadius="md" />
                <Heading as="h3" size="md" color="#3aab36">Avaliação de Imóveis Rurais</Heading>
                <Text fontSize="sm">Conheça o valor real de suas propriedades.</Text>
                <Button as={RouterLink} to="/servicos/avaliacao-imoveis" size="sm" bg="#3aab36" color="#ffffff" _hover={{ bg: '#64b145' }}>
                  Ver Mais
                </Button>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Parcerias Estratégicas (Resumo) - Fundo Branco */}
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
            <Heading as="h2" size="xl" color="#3aab36">
              Parcerias que Potencializam Resultados
            </Heading>
            <Text fontSize="lg">
              Com a Vida de Ouro e a StudioAgro, ampliamos nossas capacidades, oferecendo soluções ainda mais completas e inovadoras.
            </Text>
            <HStack spacing={8}>
              <Image src="/images/vida_de_ouro_logo.jpg" alt="Vida de Ouro" boxSize="100px" borderRadius="md" />
              <Image src="/images/studioagro_logo.jpg" alt="StudioAgro" boxSize="100px" borderRadius="md" />
            </HStack>
            <Button 
              as={RouterLink} 
              to="/parcerias" 
              size="lg" 
              bg="#3aab36"
              color="#ffffff"
              _hover={{ bg: '#64b145' }}
              mt={8}
            >
              Conheça Nossas Parcerias
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Contato (Resumo) - Fundo Marrom */}
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
            <Heading as="h2" size="xl" color="#3aab36">
              Fale Conosco
            </Heading>
            <Text fontSize="lg">
              Estamos prontos para ajudar. Entre em contato conosco!
            </Text>
            {/* Formulário Simplificado */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="start">
              <VStack align="start" spacing={4}>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input placeholder="Seu nome" bg="#f9f9f9" color="#331400" />
                </FormControl>
                <FormControl>
                  <FormLabel>E-mail</FormLabel>
                  <Input type="email" placeholder="seuemail@exemplo.com" bg="#f9f9f9" color="#331400" />
                </FormControl>
                <FormControl>
                  <FormLabel>Assunto</FormLabel>
                  <Select placeholder="Selecione um assunto" bg="#f9f9f9" color="#331400">
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
              <VStack align="start" spacing={4}>
                <Text>
                  <strong>Telefone:</strong> (11) 1234-5678<br/>
                  <strong>E-mail:</strong> contato@altaterra.com.br
                </Text>
                <Button 
                  as={RouterLink} 
                  to="/contato"
                  size="lg" 
                  bg="#3aab36"
                  color="#ffffff"
                  _hover={{ bg: '#64b145' }}
                  mt={4}
                >
                  Página de Contato Completa
                </Button>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

    </VStack>
  );
};

export default Home;
