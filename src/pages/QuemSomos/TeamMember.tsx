// src/components/TeamMember.tsx
import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <VStack align="start" spacing={4} w="100%">
      <Image
        boxSize="150px"
        borderRadius="full"
        src={image}
        alt={name}
      />
      <Text fontWeight="bold" fontSize="lg" color="#3aab36">{name}</Text>
      <Text fontStyle="italic">{role}</Text>
      <Text>{bio}</Text>
    </VStack>
  );
};

export default TeamMember;
