// src/pages/QuemSomos.tsx
import React from 'react';
import { Box, Heading, Text, VStack, Image, Container } from '@chakra-ui/react';
import Timeline from './Timeline';
import TeamMember from './TeamMember';

const QuemSomos: React.FC = () => {
  return (
    <VStack spacing={0} align="stretch"> 
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
                <Image src="/images/historico1.jpg" alt="História 1" mb={4} />
                <Image src="/images/historico2.jpg" alt="História 2" />
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Seção: Missão, Visão e Valores (Fundo Branco) */}
      <Box bg="#ffffff" color="#331400" py={16}>
        <Container maxW="6xl">
          <VStack spacing={8} align="start">
            <Heading as="h2" size="xl" color="#3aab36">
              Missão, Visão e Valores
            </Heading>
            <VStack align="start" spacing={6}>
              <Box>
                <Heading as="h3" size="md" mt={4} color="#64b145">
                  Missão
                </Heading>
                <Text mt={2}>
                  Entender os desafios do campo e transformá-los em oportunidades de crescimento. Equipamos produtores rurais e empresários do agronegócio com as estratégias e ferramentas certas para prosperarem.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mt={4} color="#64b145">
                  Visão
                </Heading>
                <Text mt={2}>
                  Ser reconhecida como a principal parceira financeira, tributária e securitária do agronegócio brasileiro, promovendo crescimento sustentável e prosperidade.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mt={4} color="#64b145">
                  Valores
                </Heading>
                <VStack align="start" spacing={2} mt={2}>
                  <Text><strong>Transparência e Confiança:</strong> Cultivamos relações baseadas na clareza e na sinceridade.</Text>
                  <Text><strong>Compromisso com o Crescimento do Cliente:</strong> Colocamos o cliente no centro de tudo o que fazemos.</Text>
                  <Text><strong>Inovação com Propósito:</strong> Buscamos continuamente novas ideias e tecnologias para melhorar o agronegócio.</Text>
                </VStack>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>

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
