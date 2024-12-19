// src/components/TeamMember.tsx
import React from 'react';
import { Image, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaUserTie } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <VStack align="start" spacing={4} w="100%" bg="#ffffff" p={4} borderRadius="md" color="#331400" boxShadow="md">
      <HStack spacing={4} align="center">
        <Image
          boxSize="150px"
          borderRadius="full"
          src={image}
          alt={name}
        />
        <VStack align="start" spacing={0}>
          <HStack spacing={2} align="center">
            <Icon as={FaUserTie} color="#3aab36" boxSize={5} />
            <Text fontWeight="bold" fontSize="lg" color="#3aab36">{name}</Text>
          </HStack>
          <Text fontStyle="italic">{role}</Text>
        </VStack>
      </HStack>
      <Text>
        {bio}
      </Text>
    </VStack>
  );
};

export default TeamMember;
