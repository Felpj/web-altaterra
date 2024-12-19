// src/components/Timeline.tsx
import React from 'react';
import { Box, Flex, Text, VStack, Icon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

interface TimelineEvent {
  year: string;
  description: string;
}

const events: TimelineEvent[] = [
  { year: '2017', description: 'Fundação da Altaterra, focada em soluções financeiras, tributárias e securitárias para o agronegócio.' },
  { year: '2019', description: 'Consolidação no mercado e expansão do portfólio de serviços.' },
  { year: '2021', description: 'Ampliação da atuação em diversas regiões do país.' },
  { year: '2024', description: 'Parcerias estratégicas com Vida de Ouro e StudioAgro, fortalecendo ainda mais as soluções oferecidas.' },
];

const Timeline: React.FC = () => {
  return (
    <VStack align="start" spacing={4} w="100%" mt={4}>
      {events.map((event, index) => (
        <Flex key={index} align="flex-start">
          <Icon as={MdCheckCircle} color="#3aab36" boxSize={6} mr={4} />
          <Box>
            <Text fontWeight="bold">{event.year}</Text>
            <Text>{event.description}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default Timeline;
