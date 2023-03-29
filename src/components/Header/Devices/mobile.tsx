import {
  Collapse,
  Flex,
  Stack,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

/* 1. Header Props */

interface NavItem {
  name: string;
  subLabel?: string;
  children?: Array<NavItem>
  href?: string;
}

/* 2. Object with Header options */

const Links: Array<NavItem> = [

  {
    name: "Create",
    href: "../create"
  },

  {
    name: "Explore",
    href: "../explore"
  },

  {
    name: "Connect Wallet",
    href: "../connect_wallet"
  }];

export default function MobileNav() {
  return (
    <Stack
      bg={'navbar.background'}
      p={4}
      display={{ md: 'none' }}>
      {Links.map((link) => (
        <NavLink key={link.name} {...link} />
      ))}
    </Stack>
  );
};

const NavLink = ({ name, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={'bold'}
          fontSize={"lg"}
          px={2}
          py={1}
          color={'white'}
          rounded={"md"}
          _hover={{
      textDecoration: "none",
      color: "brown",
    }}>
          {name}
        </Text>
        
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
        
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {
            Links.map((child) => (
              <Link key={child.name} py={2} href={child.href}>
                {child.name}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

