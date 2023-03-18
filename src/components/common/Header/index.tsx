import Image from 'next/image';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Stack,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure
} from '@chakra-ui/react';

// 👇 Navbar options
const Links = ['Create', 'Explore', 'Connect Wallet'];

// 👇 Navbar Options rendering

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    fontSize={'lg'}
    fontWeight={'bold'}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'navbar.marketplace',
    }}
    href={`/${Links[0]}`}>
    {children}
  </Link>
);

export default function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={'navbar.background'} px={4}>

        <Flex h={16} align={'center'} justify={'space-between'}>
          <HStack spacing={8} align={'center'}>
              <Link href={'/'}>
              <Image
                id="logo"
                src="/../public/logo.png"
                alt="logo"
                width="200"
                height="100"/>
              </Link>
          </HStack>

          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}/>
              </MenuButton>
                <MenuList fontSize={'lg'}>
                  <MenuItem>Create</MenuItem>
                  <MenuItem>Explore</MenuItem>
                  <MenuItem>Connect Wallet</MenuItem>
                </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      
      </Box>
  );
}