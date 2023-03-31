import {
  Collapse,
  Flex,
  Stack,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

/* 1. Header Props */

interface Header {
  name: string;
  subLabel?: string;
  children?: Array<Header>
  href?: string;
}

/* 2. Object with Header options */

const Links: Array<Header> = [

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

/* 3. Rendering of Header Options */
export function NavLink(props: Header) {

    const {name, href} = props
    const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Stacking */}
      <Stack spacing={4} onClick={onToggle}>
        {/* Container */}
        <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'}}>
          {/* Options */}
          <Text
            fontWeight={'bold'}
            fontSize={"lg"}
            px={2}
            py={1}
            color={'white'}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
              color: "brown"}}>
            {name}
          </Text>
        </Flex>
        {/* Collapse */}
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}>
        {/* Stack inside Menu */}  
        <Stack
          mt={2}
          pl={4}>  
          {/* Rendering */}   
          {Links.map((child) => (
            <Link key={child.name} py={2} href={child.href}>
              {child.name}
            </Link>))}
        </Stack>   
        </Collapse>
      </Stack>
    </>
  );
};

/* 4. Rending of Options on Mobile Devices */
export default function MobileNav() {
  return (
    <>
      {/* Stack */} 
      <Stack
        bg={'navbar.background'}
        p={4}
        display={{ md: 'none' }}>
        {/* Render */} 
        {Links.map((link) => (
          <NavLink key={link.name} {...link} />))}
      </Stack>
    </>
  );
};