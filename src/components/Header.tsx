// src/components/Header.tsx
import React from 'react';
import {
    Box,
    HStack,
    Link,
    Heading,
    Spacer,
    Container,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra hook para controlar o Drawer

    return (
        <Box bg="#331400" color="#ffffff" py={4} boxShadow="md">
            <Container maxW="6xl">
                <HStack spacing={8} align="center">
                    {/* Logo ou Nome da Empresa */}
                    <Link  as={RouterLink} to="/" _hover={{ color: "#64b145" }}>
                        <Heading as="h1" size="lg" color="#3aab36">
                            Altaterra
                        </Heading>
                    </Link>

                    <Spacer />

                    {/* Menu para Telas Grandes */}
                    <HStack
                        spacing={6}
                        display={{ base: "none", md: "flex" }} // Oculta em telas menores
                    >
                        <Link as={RouterLink} to="/" _hover={{ color: "#64b145" }}>
                            Home
                        </Link>
                        <Link as={RouterLink} to="/quem-somos" _hover={{ color: "#64b145" }}>
                            Quem Somos
                        </Link>
                        <Link as={RouterLink} to="/servicos" _hover={{ color: "#64b145" }}>
                            Serviços
                        </Link>
                        <Link as={RouterLink} to="/parcerias" _hover={{ color: "#64b145" }}>
                            Parcerias
                        </Link>
                        <Link as={RouterLink} to="/contato" _hover={{ color: "#64b145" }}>
                            Contato
                        </Link>
                    </HStack>

                    {/* Menu Hamburguer para Telas Pequenas */}
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        display={{ base: "flex", md: "none" }} // Exibe apenas em telas menores
                        onClick={onOpen}
                        variant="outline"
                        color="#ffffff"
                        borderColor="#64b145"
                        _hover={{ bg: "#64b145", color: "#ffffff" }}
                    />
                </HStack>
            </Container>

            {/* Drawer (Menu Lateral) */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="#331400" color="#ffffff">
                    <DrawerCloseButton />
                    <DrawerHeader color="#3aab36">Menu</DrawerHeader>

                    <DrawerBody>
                        <VStack align="start" spacing={6}>
                            <Link as={RouterLink} to="/" _hover={{ color: "#64b145" }} onClick={onClose}>
                                Home
                            </Link>
                            <Link as={RouterLink} to="/quem-somos" _hover={{ color: "#64b145" }} onClick={onClose}>
                                Quem Somos
                            </Link>
                            <Link as={RouterLink} to="/servicos" _hover={{ color: "#64b145" }} onClick={onClose}>
                                Serviços
                            </Link>
                            <Link as={RouterLink} to="/parcerias" _hover={{ color: "#64b145" }} onClick={onClose}>
                                Parcerias
                            </Link>
                            <Link as={RouterLink} to="/contato" _hover={{ color: "#64b145" }} onClick={onClose}>
                                Contato
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Header;
