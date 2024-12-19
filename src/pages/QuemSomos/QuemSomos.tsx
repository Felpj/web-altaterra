// src/pages/QuemSomos.tsx
import React from 'react';
import { Box, Heading, Text, VStack,  Container, Divider, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaAward, FaEye, FaHandsHelping } from 'react-icons/fa'; // Ícones para Missão, Visão e Valores
import Timeline from './Timeline';
import TeamMember from './TeamMember';

const QuemSomos: React.FC = () => {
  return (


    <VStack spacing={0} align="stretch">
      <Box
        mb={4}
        position="relative"
        color="#ffffff"
        py={{ base: 8, md: 16 }}
        px={4}
        boxShadow="lg"
        borderRadius="md"
        backgroundImage="url('/quemSomos1.jpeg')"
        backgroundSize="cover" // Ajusta tamanho da imagem
        backgroundPosition="center" // Centraliza em todas as telas
        height={{ base: "60vh", sm: "70vh", md: "80vh" }} // Altura responsiva
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
          zIndex: 1, // Coloca a camada atrás do conteúdo
        }}
      >
        {/* Conteúdo do Título */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)" // Centraliza o texto
          zIndex={2} // Sobre o escurecimento
          textAlign="center"
        >
          <Heading
            as="h1"
            size={{ base: "lg", md: "2xl" }} // Tamanho responsivo do título
            color="#3aab36"
            textShadow="1px 1px 5px rgba(0, 0, 0, 0.8)" // Sombra para contraste
          >
            Nossa História, Nossa Missão: Transformando o Futuro do Agronegócio
          </Heading>
          <Text
            mt={4}
            fontSize={{ base: "sm", md: "lg" }} // Tamanho responsivo do subtítulo
            color="#ffff"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)" // Sombra para contraste
          >
            Enraizados no Agronegócio, Impulsionando o Seu Crescimento
          </Text>
        </Box>
      </Box>

      {/* Seção: Nossa História (Fundo Marrom Escuro) */}
      <Box bg="#331400" color="#ffffff" py={16}>

        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" color="#3aab36">
              Nossa História
            </Heading>
            <VStack align="start" spacing={4}>
              <Text>
                Desde 2017, a <strong>Altaterra Assessoria e Corretagem de Seguros Ltda.</strong> tem se dedicado a oferecer soluções financeiras, tributárias e securitárias para produtores rurais e empresários do agronegócio. Nossa jornada começou com o objetivo de otimizar recursos e proteger patrimônios, e ao longo dos anos, nos consolidamos como referência no setor.
              </Text>
              <Text>
                Em 2024, fortalecemos nosso compromisso com a excelência ao nos tornarmos uma unidade de negócios da <strong>Corretora de Seguros Vida de Ouro</strong>, de São Marcos/RS, e da <strong>StudioAgro</strong>, empresa de consultoria do renomado Grupo Studio. Essas parcerias estratégicas ampliaram nossas capacidades, permitindo oferecer soluções ainda mais completas e inovadoras.
              </Text>

              <Timeline />

              <Box>


              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Divider borderColor="#3aab36" />

      {/* Seção: Missão, Visão e Valores */}
      <Box bg="#ffffff" color="#331400" py={20} px={10}>
        <VStack gap={5} textAlign="center">
          <Heading color="#3aab36">Missão, Visão e Valores</Heading>
          <Divider borderColor="#3aab36" width="60px" borderWidth="2px" />
          <Text maxW="800px">
            Nossa missão, visão e valores refletem nosso compromisso em oferecer soluções financeiras, tributárias e securitárias que promovam o crescimento sustentável no agronegócio brasileiro.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mt={10}>
          {/* Missão */}
          <VStack
            bg="#f7f7f7"
            borderRadius="md"
            boxShadow="md"
            p={5}
            gap={3}
            align="center"
          >
            <Icon as={FaHandsHelping} w={10} h={10} color="#64b145" />
            <Heading size="md" color="#3aab36">
              Missão
            </Heading>
            <Text color="#331400" textAlign="center">
              Entender os desafios do campo e transformá-los em oportunidades de crescimento. Equipamos produtores rurais e empresários do agronegócio com as estratégias e ferramentas certas para prosperarem.
            </Text>
          </VStack>

          {/* Visão */}
          <VStack
            bg="#f7f7f7"
            borderRadius="md"
            boxShadow="md"
            p={5}
            gap={3}
            align="center"
          >
            <Icon as={FaEye} w={10} h={10} color="#64b145" />
            <Heading size="md" color="#3aab36">
              Visão
            </Heading>
            <Text color="#331400" textAlign="center">
              Ser reconhecida como a principal parceira financeira, tributária e securitária do agronegócio brasileiro, promovendo crescimento sustentável e prosperidade.
            </Text>
          </VStack>

          {/* Valores */}
          <VStack
            bg="#f7f7f7"
            borderRadius="md"
            boxShadow="md"
            p={5}
            gap={3}
            align="center"
          >
            <Icon as={FaAward} w={10} h={10} color="#64b145" />
            <Heading size="md" color="#3aab36">
              Valores
            </Heading>
            <VStack align="start" spacing={2} color="#331400" mt={2}>
              <Text textAlign="center">
                <strong>Transparência e Confiança:</strong> Cultivamos relações baseadas na clareza e na sinceridade.
              </Text>
              <Text textAlign="center">
                <strong>Compromisso com o Crescimento do Cliente:</strong> Colocamos o cliente no centro de tudo o que fazemos.
              </Text>
              <Text textAlign="center">
                <strong>Inovação com Propósito:</strong> Buscamos continuamente novas ideias e tecnologias para melhorar o agronegócio.
              </Text>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Box>




      <Divider borderColor="#3aab36" />

      {/* Seção: Nossa Equipe (Fundo Marrom Escuro) */}
      <Box bg="#331400" color="#ffffff" py={16}>
        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" color="#3aab36">
              Nossa Equipe
            </Heading>
            <TeamMember
              name="Raoni Guimarães"
              role="Fundador e Administrador"
              image="/images/raoni.jpg"
              bio="Engenheiro Agrônomo especializado em Agronegócios e Manejo de Solo pela ESALQ/USP. Corretor de Seguros desde 2018 e Perito em Seguro Agrícola desde 2010. Com mais de uma década de experiência, Raoni lidera a Altaterra com dedicação, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente."
            />
          </VStack>
        </Container>
      </Box>
    </VStack>
  );
};

export default QuemSomos;
