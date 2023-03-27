import Image from "next/image";
import { ReactNode } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Stack,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";

// 👇 Navbar options
const Links = ["Create", "Explore", "Connect Wallet"];

// 👇 Navbar Options rendering

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    fontSize={"lg"}
    fontWeight={"bold"}
    px={2}
    py={1}
    rounded={"md"}
    color={"white"}
    _hover={{
      textDecoration: "none",
      color: "brown",
    }}
    href={`/${children}`}
  >
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // 👇 Container for whole Header
    <Box bg={"navbar.background"} px={4}>
      {/* Container for Header content */}
      <Flex h={16} align={"center"} justify={"space-between"}>
        {/* Logo */}
        <HStack spacing={8} align={'center'}>
          <Link href={'/'} _hover={{ opacity: '50%' }}>
            <Image
            id={'logo'}
            src={'/../public/logo2.png'}
            alt={'logo'}
            width={'200'}
            height={'100'} />
          </Link>
        </HStack>

        {/* Container for Menu Options */}
        <Flex alignItems={"center"}>
          {/* Stacking of Options */}
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>

          {/* Responsive Menu for Tablets and Mobile Devices */}
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
              onClick={isOpen ? onClose : onOpen}
              _hover={{
                opacity: "50%",
              }}
            >
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                color={"white"}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                bg={"none"}
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>

      {/* Menu Options Display for Mobile Devices */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
